from rembg import remove
from PIL import Image

input_path = 'public/assets/yalode_bottle.png'
output_path = 'public/assets/yalode_bottle_nobg.png'

input_image = Image.open(input_path)
output_image = remove(input_image)
output_image.save(output_path)
