import historyPosts from '@/constants/historyPosts'
import magazinePosts from '@/constants/magazinePosts'

export const getRecommendedHistoryPosts = (): TPost[] => {
  const posts = historyPosts.filter((post) => post.recommended)
  return posts
}

export const getRecommendedMagazinePosts = (): TPost[] => {
  const posts = magazinePosts.filter((post) => post.recommended)
  return posts
}

export const getPostFirstParagraph = (post: TPost): string => {
  const paragraph = post.contents.find(
    (content) => content.type == 'paragraph'
    // @ts-ignore
  ).text

  return paragraph
}
