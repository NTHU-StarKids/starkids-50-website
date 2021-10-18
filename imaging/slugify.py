from unidecode import unidecode

text = '清大天文社近況速覽'
print(unidecode(text).lower().replace(' ', '-')[0: -1])