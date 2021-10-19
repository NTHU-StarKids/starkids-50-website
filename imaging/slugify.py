import sys
from unidecode import unidecode

def main(argv):
  text = argv[0]
  print(unidecode(text).lower().replace(' ', '-')[0: -1])

if __name__ == "__main__":
  main(sys.argv[1:])