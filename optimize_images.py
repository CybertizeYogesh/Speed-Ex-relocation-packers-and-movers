import os
import re
from PIL import Image

# Configuration
PROJECT_DIR = r"c:\Users\Yogesh Poonia\Desktop\Speed Ex relocation packers and movers"
MAX_SIZE_KB = 120
MAX_SIZE_BYTES = MAX_SIZE_KB * 1024
EXCLUDE_DIRS = {".git", ".gemini", ".system_generated", "scratch", "node_modules"}

def scan_images(directory):
    """Scans the directory recursively for JPG, JPEG, and PNG images."""
    image_paths = []
    for root, dirs, files in os.walk(directory):
        # Exclude hidden or system directories
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS and not d.startswith('.')]
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in {".jpg", ".jpeg", ".png"}:
                image_paths.append(os.path.join(root, file))
    return image_paths

def optimize_to_webp(img_path):
    """Converts an image to WebP, compressing it dynamically to fit under MAX_SIZE_KB."""
    base_path, ext = os.path.splitext(img_path)
    webp_path = base_path + ".webp"
    
    try:
        # Open the image
        img = Image.open(img_path)
        
        # Keep track of original format for transparency support
        if img.mode in ("RGBA", "P") and ext.lower() == ".png":
            img = img.convert("RGBA")
        else:
            img = img.convert("RGB")
            
        quality = 85
        scale = 1.0
        
        while True:
            # Scale down if necessary
            if scale < 1.0:
                new_size = (int(img.width * scale), int(img.height * scale))
                temp_img = img.resize(new_size, Image.Resampling.LANCZOS)
            else:
                temp_img = img
                
            # Save temporary file to check size
            temp_img.save(webp_path, "WEBP", quality=quality)
            file_size = os.path.getsize(webp_path)
            
            # Check if size is within limits
            if file_size <= MAX_SIZE_BYTES:
                break
                
            # If still too large, reduce quality
            if quality > 40:
                quality -= 5
            else:
                # If quality is already at 40, reduce scale
                scale -= 0.1
                quality = 85 # reset quality for new scale
                
            if scale < 0.1:
                # Fallback if image cannot be scaled down further
                print(f"Warning: Could not compress {os.path.basename(img_path)} under {MAX_SIZE_KB}KB even at minimum scale.")
                break
                
        print(f"Optimized: {os.path.basename(img_path)} -> {os.path.basename(webp_path)} ({file_size/1024:.1f} KB, Quality={quality}, Scale={scale:.1f})")
        return webp_path
    except Exception as e:
        print(f"Error processing {img_path}: {e}")
        return None

def update_references(directory, replacements):
    """Scans code files and replaces references to old image files with new WebP paths."""
    code_extensions = {".html", ".css", ".js", ".jsx", ".ts", ".tsx", ".json"}
    
    for root, dirs, files in os.walk(directory):
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS and not d.startswith('.')]
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in code_extensions:
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        code = f.read()
                        
                    original_code = code
                    for old_name, new_name in replacements.items():
                        # Case insensitive replacement for exact image file references
                        # e.g., about-image.jpg -> about-image.webp
                        pattern = re.compile(re.escape(old_name), re.IGNORECASE)
                        code = pattern.sub(new_name, code)
                        
                    if code != original_code:
                        with open(file_path, "w", encoding="utf-8") as f:
                            f.write(code)
                        console_msg = f"Updated references in {os.path.relpath(file_path, directory)}"
                        print(console_msg)
                except Exception as e:
                    print(f"Error updating references in {file_path}: {e}")

def main():
    print("Starting Image Optimization Pipeline...")
    
    # 1. Discover images
    images = scan_images(PROJECT_DIR)
    print(f"Discovered {len(images)} images to process.\n")
    
    replacements = {}
    converted_images = []
    
    # 2. Convert and compress
    for img_path in images:
        webp_path = optimize_to_webp(img_path)
        if webp_path:
            old_name = os.path.basename(img_path)
            new_name = os.path.basename(webp_path)
            replacements[old_name] = new_name
            converted_images.append(img_path)
            
    # 3. Update code references
    print("\nUpdating image references in source code...")
    update_references(PROJECT_DIR, replacements)
    
    # 4. Cleanup original images
    print("\nCleaning up original files...")
    for img_path in converted_images:
        try:
            os.remove(img_path)
            print(f"Deleted: {os.path.basename(img_path)}")
        except Exception as e:
            print(f"Error deleting {img_path}: {e}")
            
    print("\nImage Optimization Pipeline Completed Successfully!")

if __name__ == "__main__":
    main()
