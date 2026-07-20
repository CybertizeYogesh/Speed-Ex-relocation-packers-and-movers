const fs = require('fs');
const path = require('path');

let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  // Sharp not yet installed; message provided at execution time
}

const PROJECT_DIR = __dirname;
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);
const CODE_EXTENSIONS = new Set(['.html', '.css', '.js', '.jsx', '.tsx', '.ts', '.json', '.xml', '.mjs']);
const MAX_SIZE_BYTES = 120 * 1024; // 120 KB limit
const EXCLUDE_DIRS = new Set(['node_modules', '.next', '.git', 'old-static-website']);

/**
 * Scan directory recursively ignoring excluded folders
 */
function walkDir(dir, filterFn) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of list) {
    if (entry.isDirectory()) {
      if (!EXCLUDE_DIRS.has(entry.name)) {
        results = results.concat(walkDir(path.join(dir, entry.name), filterFn));
      }
    } else if (entry.isFile()) {
      const fullPath = path.join(dir, entry.name);
      if (filterFn(fullPath)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

/**
 * Dynamically optimizes and compresses image to WebP under 120 KB
 */
async function getOptimizedWebPBuffer(imgPath) {
  const metadata = await sharp(imgPath).metadata();
  let origW = metadata.width;
  let origH = metadata.height;

  // Step 1: Try adjusting quality (85 down to 30)
  for (let quality = 85; quality >= 30; quality -= 5) {
    const buffer = await sharp(imgPath)
      .webp({ quality })
      .toBuffer();

    if (buffer.length <= MAX_SIZE_BYTES) {
      return { buffer, width: origW, height: origH, quality, scaled: false };
    }
  }

  // Step 2: Dynamically scale down dimensions if still over 120 KB
  let scale = 0.9;
  while (scale > 0.1) {
    const newW = Math.max(10, Math.floor(origW * scale));
    const newH = Math.max(10, Math.floor(origH * scale));

    for (let quality = 80; quality >= 30; quality -= 10) {
      const buffer = await sharp(imgPath)
        .resize(newW, newH, { fit: 'inside' })
        .webp({ quality })
        .toBuffer();

      if (buffer.length <= MAX_SIZE_BYTES) {
        return { buffer, width: newW, height: newH, quality, scaled: true };
      }
    }
    scale -= 0.1;
  }

  // Fallback
  const lowestW = Math.max(50, Math.floor(origW * 0.1));
  const buffer = await sharp(imgPath)
    .resize(lowestW, null)
    .webp({ quality: 20 })
    .toBuffer();

  return { buffer, width: lowestW, height: 0, quality: 20, scaled: true };
}

async function main() {
  const args = process.argv.slice(2);
  const execute = args.includes('--execute') || args.includes('--no-dry-run');

  console.log('='.repeat(80));
  console.log('IMAGE OPTIMIZER & CODE REFERENCE UPDATER (Node.js + Sharp)');
  console.log('='.repeat(80));

  if (!sharp) {
    console.error('\nERROR: "sharp" package is required for Node.js optimization.');
    console.error('Please run: npm install sharp\n');
    process.exit(1);
  }

  if (execute) {
    console.log('\n>>> RUNNING IN EXECUTION MODE (Files will be modified and original images deleted) <<<\n');
  } else {
    console.log('\n>>> RUNNING IN DRY-RUN MODE (No files will be modified or deleted) <<<');
    console.log('>>> Pass --execute flag to run in execution mode <<<\n');
  }

  // 1. Discover Images
  const images = walkDir(PROJECT_DIR, (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    return IMAGE_EXTENSIONS.has(ext);
  });

  console.log(`Discovered ${images.length} image(s) (.jpg, .jpeg, .png) to convert.\n`);

  const conversions = []; // { oldPath, webpPath, oldName, newName }

  // 2. Convert & Compress
  for (const imgPath of images) {
    const relPath = path.relative(PROJECT_DIR, imgPath);
    const parsed = path.parse(imgPath);
    const webpPath = path.join(parsed.dir, `${parsed.name}.webp`);
    const oldName = parsed.base;
    const newName = `${parsed.name}.webp`;
    const origKb = (fs.statSync(imgPath).size / 1024).toFixed(1);

    try {
      const res = await getOptimizedWebPBuffer(imgPath);
      const newKb = (res.buffer.length / 1024).toFixed(1);

      console.log(`Optimizing: ${relPath} (${origKb} KB)`);
      console.log(`  -> ${newName} (${newKb} KB) | Quality: ${res.quality} | Dim: ${res.width}px | Resized: ${res.scaled}`);

      if (execute) {
        fs.writeFileSync(webpPath, res.buffer);
      }
      conversions.push({ oldPath: imgPath, webpPath, oldName, newName });
    } catch (err) {
      console.error(`  [ERROR] Processing ${relPath}: ${err.message}`);
    }
  }

  // 3. Update Code References
  if (conversions.length > 0) {
    console.log('\n' + '='.repeat(80));
    console.log('UPDATING CODE REFERENCES');
    console.log('='.repeat(80));

    const codeFiles = walkDir(PROJECT_DIR, (filePath) => {
      const ext = path.extname(filePath).toLowerCase();
      return CODE_EXTENSIONS.has(ext);
    });

    for (const codePath of codeFiles) {
      const relCodePath = path.relative(PROJECT_DIR, codePath);
      let content = fs.readFileSync(codePath, 'utf8');
      let updated = false;

      for (const item of conversions) {
        if (content.includes(item.oldName)) {
          content = content.replaceAll(item.oldName, item.newName);
          updated = true;
          console.log(`  Ref Match: '${item.oldName}' -> '${item.newName}' in ${relCodePath}`);
        }
      }

      if (updated && execute) {
        fs.writeFileSync(codePath, content, 'utf8');
        console.log(`  [UPDATED FILE] ${relCodePath}`);
      }
    }
  }

  // 4. Cleanup Original Images
  if (execute && conversions.length > 0) {
    console.log('\n' + '='.repeat(80));
    console.log('CLEANING UP ORIGINAL IMAGES');
    console.log('='.repeat(80));

    for (const item of conversions) {
      const relOrig = path.relative(PROJECT_DIR, item.oldPath);
      try {
        fs.unlinkSync(item.oldPath);
        console.log(`  [DELETED] ${relOrig}`);
      } catch (err) {
        console.error(`  [ERROR] Failed to delete ${relOrig}: ${err.message}`);
      }
    }
  }

  console.log('\n' + '='.repeat(80));
  console.log(execute ? 'OPTIMIZATION & CLEANUP COMPLETED SUCCESSFULLY' : 'DRY-RUN COMPLETE (Pass --execute to apply changes)');
  console.log('='.repeat(80));
}

main().catch((err) => console.error(err));
