import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { H3 } from '@/components/Headings'
import Section from '@/components/Section'
import Layout from '@/components/Layout'
import posts from '@/constants/magazinePosts'

type TProps = {
  post: TPost
}

const PostSection = ({ post }: TProps): JSX.Element => {
  return (
    <Section className="pb-20">
      <div
        className="w-full h-64 bg-center bg-cover mb-8"
        style={{ backgroundImage: `url('${post.coverUrl}')` }}
      ></div>
      <h2 className="text-2xl tracking-widest mb-2">{post.title}</h2>
      <H3>作者/{post.author}</H3>
      <div className="mt-12 text-left">
        {post.contents.map((content, index) => {
          if (content.type == 'paragraph') {
            return (
              <p
                key={`content-${index}`}
                className="mb-6 font-light tracking-widest"
              >
                {
                  // @ts-ignore
                  content.text
                }
              </p>
            )
          } else if (content.type == 'image') {
            return (
              <div key={`content-${index}`} className="my-10">
                <img
                  // @ts-ignore
                  src={content.url}
                  className="rounded-xl mx-auto max-h-72 w-full md:w-auto md:max-w-screen-md"
                />
                {
                  // @ts-ignore
                  content.description ? (
                    <p className="mt-2 font-light text-sm text-center tracking-widest">
                      {
                        // @ts-ignore
                        content.description
                      }
                    </p>
                  ) : null
                }
              </div>
            )
          }
        })}
      </div>
    </Section>
  )
}

const MagazinePostPage = (): JSX.Element => {
  const [post, setPost] = useState<TPost | undefined>()
  const [metadata, setMetadata] = useState<TMetadata | undefined>()
  const router = useRouter()

  useEffect(() => {
    if (router.isReady) {
      const { slug } = router.query
      const foundPost = posts.find((p) => p.slug == slug)
      if (!foundPost) {
        router.replace('/404')
      } else {
        setPost(foundPost)
        const firstParagraph = foundPost.contents.find(
          (content) => content.type == 'paragraph'
          // @ts-ignore
        ).text
        const metadata: TMetadata = {
          imageUrl: foundPost.coverUrl,
          description: firstParagraph,
        }
        setMetadata(metadata)
      }
    }
  }, [router.isReady])

  return (
    <Layout title={post?.title} metadata={metadata}>
      {post && <PostSection post={post} />}
    </Layout>
  )
}

export default MagazinePostPage
