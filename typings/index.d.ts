interface IChat {
  id: string
  sentAt: string
  name: string
  text: string
  profile: string
}

type TMetadata = {
  imageUrl?: string
  description?: string
}

type TSlide = {
  imageUrl: string
  title: string
  description: string
  slug: string
}

type TPostParagraph = {
  type: string = 'paragraph'
  text: string
}

type TPostImage = {
  type: string = 'image'
  url: string
  description: string
}

type TPost = {
  author: string
  coverUrl: string
  slug: string
  title: string
  decade?: number
  recommended: boolean
  contents: (TPostParagraph | TPostImage)[]
}

type TGoods = {
  imageUrl: string
  name: string
  description: string
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

type TAlbumImage = {
  imgUrl: string
  description: string
}

type TAlbumCategory = {
  name: string
  slug: string
  coverImgUrl: string
  description: string
  images: TAlbumImage[]
}
