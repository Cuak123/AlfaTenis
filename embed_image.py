"""One-off script that baked a tournament photo into the flyer as a base64 URI.

STALE — do not run. It already ran: archive/flyer_2026.html carries the data URI.
Its paths are wrong twice over: `base_dir` is missing `Web Develop/`, and both
files have since moved out of `public/` on purpose (the photo shows identifiable
minors). Pointing it back at `public/` would republish them. See archive/README.md.
"""

import base64
import os

base_dir = '/Users/marco/Documents/Alfa Tenis'
image_path = os.path.join(base_dir, 'public/assets/torneo.jpeg')
html_path = os.path.join(base_dir, 'public/flyer_2026.html')

print(f"Reading image from {image_path}")
with open(image_path, 'rb') as img_f:
    img_data = img_f.read()
    b64_data = base64.b64encode(img_data).decode('utf-8')
    mime_type = 'image/jpeg'
    data_uri = f"data:{mime_type};base64,{b64_data}"

print(f"Reading HTML from {html_path}")
with open(html_path, 'r', encoding='utf-8') as html_f:
    content = html_f.read()

target_str = 'src="assets/torneo.jpeg"'
if target_str not in content:
    print("Target string 'src=\"assets/torneo.jpeg\"' not found in HTML file.")
    # Fallback to absolute if for some reason it reverted?
    target_str_abs = 'src="/assets/torneo.jpeg"'
    if target_str_abs in content:
        target_str = target_str_abs
        print("Found absolute path version instead.")
    else:
        print("Could not find image tag to replace.")
        exit(1)

new_content = content.replace(target_str, f'src="{data_uri}"')

print("Writing updated HTML...")
with open(html_path, 'w', encoding='utf-8') as html_f:
    html_f.write(new_content)

print("Successfully embedded image.")
