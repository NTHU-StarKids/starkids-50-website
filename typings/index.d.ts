type TSlide = {
  imageUrl: string
  heading: string
  description: string
}

type TPost = {
  author: string
  imageUrl: string
  heading: string
  body: string
}

type TPosition = {
  name: string
  department: string
  position: string
}

type TCabinet = {
  age: number
  name: string
  positions: TPosition[]
}
