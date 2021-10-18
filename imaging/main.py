import os
import json
from PIL import Image

EXTENSION = '.jpg'
BASE_PIXELS = 2400

BASE_PATH = os.path.join(os.getcwd(), 'source')
DEST_PATH = os.path.join(os.getcwd(), 'results')

for source in os.listdir(BASE_PATH):
  if not source.startswith('.'):
    SOURCE_PATH = os.path.join(os.getcwd(), 'source', source)
    dir_list = os.listdir(SOURCE_PATH)
    dir_list.remove('data.json')
    dir_list.sort()
    if len(dir_list) != 0:
      with open(f'{SOURCE_PATH}/data.json') as f:
        data = json.load(f)
      
      # landscape
      new_data = {
        'name': data['name'],
        'slug': data['slug'],
        'coverImgUrl': '',
        'description': data['description'],
        'images': [],
      }

      for file in dir_list:
        if not file.startswith('.'):
          filename = file.split('.')[0]

          img = Image.open(f'{SOURCE_PATH}/{file}')
          (w, h) = img.size
          portrait = h > w

          if not portrait and w >= BASE_PIXELS:
            new_height = int(BASE_PIXELS / w * h)
            img = img.resize((BASE_PIXELS, new_height))

          if portrait and h >= BASE_PIXELS:
            new_width = int(BASE_PIXELS / h * w)
            img = img.resize((new_width, BASE_PIXELS))

          new_img_name = f'{source}-{filename}{EXTENSION}'
          img.save(f'{DEST_PATH}/{new_img_name}', quality=50, subsampling=0)

          new_data['images'].append({
            'imgUrl': f"/img/album/{new_img_name}",
            'description': data['images'][filename],
            'portrait': portrait
          })

      with open(f'{DEST_PATH}/{source}.json', 'w', encoding='utf-8') as f:
        json.dump(new_data, f, ensure_ascii=False, indent=4)
