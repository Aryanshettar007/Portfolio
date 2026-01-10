from PIL import Image, ImageDraw, ImageOps

# Load the image
img_path = r"c:\Users\shara\Desktop\Portfolio\public\My DP.jpg"
out_path = r"c:\Users\shara\Desktop\Portfolio\public\favicon.png"

try:
    img = Image.open(img_path).convert("RGBA")
    
    # 1. Square Crop (Center)
    width, height = img.size
    min_dim = min(width, height)
    
    left = (width - min_dim) / 2
    top = (height - min_dim) / 2
    right = (width + min_dim) / 2
    bottom = (height + min_dim) / 2
    
    img = img.crop((left, top, right, bottom))
    
    # 2. Resize to typical favicon size (e.g., 512x512 for high res)
    size = (512, 512)
    img = img.resize(size, Image.Resampling.LANCZOS)
    
    # 3. Create Circular Mask
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0) + size, fill=255)
    
    # 4. Apply Mask
    output = ImageOps.fit(img, mask.size, centering=(0.5, 0.5))
    output.putalpha(mask)
    
    # 5. Save
    output.save(out_path, "PNG")
    print(f"Successfully created circular favicon at {out_path}")

except Exception as e:
    print(f"Error: {e}")
