"""Export browser icons from the official logo; requires Pillow.
Run from any directory: python3 scripts/generate_favicons.py
Only blank background is trimmed; logo artwork and colours are preserved.
"""
from pathlib import Path
from PIL import Image, ImageChops

ROOT = Path(__file__).resolve().parents[1]
source = Image.open(ROOT / 'public/logo.jpg').convert('RGB')
background = source.getpixel((0, 0))
difference = ImageChops.difference(source, Image.new('RGB', source.size, background))
mask = difference.convert('L').point(lambda value: 255 if value > 48 else 0)
bounds = mask.getbbox()
if not bounds:
    raise ValueError('Official logo artwork was not found')
artwork = source.crop(bounds)
canvas = Image.new('RGB', (512, 512), background)
artwork.thumbnail((464, 464), Image.Resampling.LANCZOS)
canvas.paste(artwork, ((512 - artwork.width) // 2, (512 - artwork.height) // 2))
for filename, size in [('icon1.png', 32), ('icon2.png', 192), ('icon3.png', 512), ('apple-icon.png', 180)]:
    canvas.resize((size, size), Image.Resampling.LANCZOS).save(ROOT / 'app' / filename, optimize=True)
canvas.convert('RGBA').save(ROOT / 'app/favicon.ico', format='ICO', sizes=[(n, n) for n in [16, 24, 32, 48, 64, 128, 256]])
print('Exported official ISFS ICO, 32/192/512px PNG icons, and 180px Apple touch icon.')
