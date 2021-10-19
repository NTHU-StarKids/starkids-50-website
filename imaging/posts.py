import os
import sys
from PIL import Image

EXTENSION = '.jpg'
BASE_PIXELS = 2400

BASE_PATH = os.path.join(os.getcwd(), 'source', 'posts')
DEST_PATH = os.path.join(os.getcwd(), 'results', 'posts')

def main(argv):
  slug = argv[0]
  count = 1
  file_list = sorted([file for file in os.listdir(BASE_PATH) if not file.startswith('.')])

  for file in file_list:
    file_ext = file.split('.')[-1].lower()
    img = Image.open(f'{BASE_PATH}/{file}')
    (w, h) = img.size
    portrait = h > w

    if file_ext in ['png']:
      img = img.convert('RGB')

    if not portrait and w >= BASE_PIXELS:
      new_height = int(BASE_PIXELS / w * h)
      img = img.resize((BASE_PIXELS, new_height))

    if portrait and h >= BASE_PIXELS:
      new_width = int(BASE_PIXELS / h * w)
      img = img.resize((new_width, BASE_PIXELS))

    new_img_name = f'{slug}-{count}{EXTENSION}'
    img.save(f'{DEST_PATH}/{new_img_name}', quality=50, subsampling=0)
    count += 1

if __name__ == "__main__":
  main(sys.argv[1:])
