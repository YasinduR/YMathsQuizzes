# Create an image with the specified content
width, height = 400, 200
background_color = (245, 85, 100)
text_color = (0, 0, 0)
font_size = 20

# Create an image with the specified size and background color
image = Image.new('RGB', (width, height), background_color)
draw = ImageDraw.Draw(image)

# Load a font
font_path = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
font = ImageFont.truetype(font_path, font_size)

# Define the text to be added to the image
text = ("  x^2 + 4x + 3\n"
        "= x^2 + x + 3x + 3\n"
        "= x(x + 1) + 3(x + 1)\n"
        "= (x + 3)(x + 1)")

# Calculate text size and position using textbbox
bbox = draw.textbbox((0, 0), text, font=font)
text_width, text_height = bbox[2] - bbox[0], bbox[3] - bbox[1]
text_x = (width - text_width) // 2
text_y = (height - text_height) // 2

# Add text to the image
draw.text((text_x, text_y), text, font=font, fill=text_color)

# Save the image
output_path = "factored_equation_updated.png"
image.save(output_path)

output_path