import os
import re
from PIL import Image

# Configuration
PROJECT_DIR = os.path.dirname(os.path.abspath(__file__))
IMAGE_EXTENSIONS = ('.jpg', '.jpeg', '.png')
CODE_EXTENSIONS = ('.html', '.css', '.js', '.jsx', '.json', '.xml')
MAX_SIZE_KB = 120
MAX_SIZE_BYTES = MAX_SIZE_KB * 1024

# Folders to completely ignore during scanning
EXCLUDE_DIRS = {'node_modules', '.next', '.git', 'old-static-website'}

def get_optimized_webp_data(img_path):
    """
    Attempts to optimize and convert an image to WebP format.
    Dynamically adjusts quality and scales down dimensions if necessary to meet the 120KB limit.
    Returns: (bytes_data, final_width, final_height, final_quality, was_scaled)
    """
    try:
        with Image.open(img_path) as img:
            # Convert RGBA/P to RGB if converting to WebP to prevent color loss
            if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                # Keep alpha channel if needed, WebP supports it
                alpha_img = img.convert('RGBA')
            else:
                alpha_img = img.convert('RGB')
                
            orig_w, orig_h = alpha_img.size
            scale = 1.0
            
            # Step 1: Try adjusting quality first (from 85 down to 30)
            for quality in range(85, 29, -5):
                import io
                buf = io.BytesIO()
                alpha_img.save(buf, format='WEBP', quality=quality)
                data = buf.getvalue()
                if len(data) <= MAX_SIZE_BYTES:
                    return data, orig_w, orig_h, quality, False
            
            # Step 2: If still too large, dynamically scale down dimensions
            while scale > 0.1:
                scale -= 0.1
                new_w = int(orig_w * scale)
                new_h = int(orig_h * scale)
                if new_w < 10 or new_h < 10:
                    break
                
                resized = alpha_img.resize((new_w, new_h), Image.Resampling.LANCZOS)
                
                # Try quality range again for the resized image
                for quality in range(80, 29, -10):
                    import io
                    buf = io.BytesIO()
                    resized.save(buf, format='WEBP', quality=quality)
                    data = buf.getvalue()
                    if len(data) <= MAX_SIZE_BYTES:
                        return data, new_w, new_h, quality, True
            
            # Absolute fallback: save at lowest acceptable quality and dimension
            import io
            buf = io.BytesIO()
            lowest_w = max(50, int(orig_w * 0.1))
            lowest_h = max(50, int(orig_h * 0.1))
            resized = alpha_img.resize((lowest_w, lowest_h), Image.Resampling.LANCZOS)
            resized.save(buf, format='WEBP', quality=20)
            return buf.getvalue(), lowest_w, lowest_h, 20, True
            
    except Exception as e:
        print(f"Error processing image details for {img_path}: {e}")
        return None

def main():
    import sys
    print("=" * 80)
    print("SPEED EX RELOCATION - IMAGE OPTIMIZER & CODE UPDATE SCRIPT")
    print("=" * 80)
    
    dry_run = True
    if "--execute" in sys.argv or "--no-dry-run" in sys.argv:
        dry_run = False
        print("\n>>> RUNNING IN EXECUTION MODE (Files will be modified and original images deleted) <<<\n")
    elif sys.stdin.isatty():
        # Prompt safety check in interactive terminals
        dry_run_input = input("Perform a DRY RUN? (y/n) [Default: y]: ").strip().lower()
        dry_run = dry_run_input != 'n'
        
        if dry_run:
            print("\n>>> RUNNING IN DRY RUN MODE (No files will be modified or deleted) <<<\n")
        else:
            confirm = input("WARNING: This will permanently modify code files and delete original images. Proceed? (yes/no): ").strip().lower()
            if confirm != 'yes':
                print("Aborted.")
                return
    else:
        print("\n>>> RUNNING IN DRY-RUN MODE (Pass --execute to apply changes) <<<\n")

    # 1. Discover Images
    images_to_process = []
    for root, dirs, files in os.walk(PROJECT_DIR):
        # Modify dirs in-place to skip excluded folders
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        for file in files:
            if file.lower().endswith(IMAGE_EXTENSIONS):
                full_path = os.path.join(root, file)
                images_to_process.append(full_path)

    print(f"Found {len(images_to_process)} original image(s) to convert.")
    
    # 2. Convert and Compress
    conversions = {} # maps absolute old path -> absolute new webp path
    name_replacements = [] # list of tuples: (old_filename_with_ext, new_filename_with_webp)
    
    for img_path in images_to_process:
        rel_path = os.path.relpath(img_path, PROJECT_DIR)
        base_path, ext = os.path.splitext(img_path)
        webp_path = base_path + ".webp"
        
        old_filename = os.path.basename(img_path)
        new_filename = os.path.splitext(old_filename)[0] + ".webp"
        
        orig_size_kb = os.path.getsize(img_path) / 1024
        print(f"\nOptimizing: {rel_path} ({orig_size_kb:.1f} KB)")
        
        webp_data, w, h, q, scaled = get_optimized_webp_data(img_path)
        if webp_data is None:
            print(f"  [ERROR] Failed to optimize {old_filename}")
            continue
            
        new_size_kb = len(webp_data) / 1024
        print(f"  -> Target: {new_filename} ({new_size_kb:.1f} KB) | Quality: {q} | Size: {w}x{h} | Resized: {scaled}")
        
        if not dry_run:
            try:
                with open(webp_path, 'wb') as f:
                    f.write(webp_data)
                conversions[img_path] = webp_path
                name_replacements.append((old_filename, new_filename))
            except Exception as e:
                print(f"  [ERROR] Failed to write WebP file: {e}")
        else:
            name_replacements.append((old_filename, new_filename))

    # 3. Update Code References
    if name_replacements:
        print("\n" + "=" * 80)
        print("UPDATING CODE REFERENCES")
        print("=" * 80)
        
        code_files = []
        for root, dirs, files in os.walk(PROJECT_DIR):
            dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
            for file in files:
                if file.lower().endswith(CODE_EXTENSIONS):
                    code_files.append(os.path.join(root, file))

        for file_path in code_files:
            rel_file_path = os.path.relpath(file_path, PROJECT_DIR)
            try:
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                
                updated = False
                new_content = content
                for old_name, new_name in name_replacements:
                    # Case-sensitive exact match for filename references in code
                    if old_name in new_content:
                        new_content = new_content.replace(old_name, new_name)
                        updated = True
                        print(f"  Ref Match: Replacing '{old_name}' -> '{new_name}' in {rel_file_path}")
                
                if updated and not dry_run:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"  [UPDATED] {rel_file_path}")
            except Exception as e:
                print(f"  [ERROR] Failed to scan/update file {rel_file_path}: {e}")

    # 4. Cleanup Original Images
    if not dry_run and conversions:
        print("\n" + "=" * 80)
        print("CLEANING UP ORIGINAL IMAGES")
        print("=" * 80)
        for orig_path in conversions.keys():
            rel_orig = os.path.relpath(orig_path, PROJECT_DIR)
            try:
                os.remove(orig_path)
                print(f"  [DELETED] {rel_orig}")
            except Exception as e:
                print(f"  [ERROR] Failed to delete {rel_orig}: {e}")
                
    print("\n" + "=" * 80)
    print("PROCESS COMPLETE")
    if dry_run:
        print("Dry run completed successfully. No changes were written to disk.")
    else:
        print("Image optimization, code updates, and cleanup completed successfully.")
    print("=" * 80)

if __name__ == "__main__":
    main()
