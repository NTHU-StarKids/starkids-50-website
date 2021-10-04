import Error from 'next/error'
import { useRouter } from 'next/router'

import { H3 } from '@/components/Headings'
import Section from '@/components/Section'
import Layout from '@/components/Layout'
import posts from '@/constants/historyPosts'
import { getPostFirstParagraph } from '@/utils'

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
                className="mb-6 font-light tracking-widest ml-1 md:ml-0"
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

const HistoryPostPage = (): JSX.Element => {
  const router = useRouter()
  const { slug } = router.query
  const post = posts.find((p) => p.slug == slug)
  if (!post) return <Error statusCode={404} />

  const firstParagraph = getPostFirstParagraph(post)
  const metadata: TMetadata = {
    imageUrl: post.coverUrl,
    description: firstParagraph,
  }

  return (
    <Layout title={post.title} metadata={metadata}>
      <PostSection post={post} />
    </Layout>
  )
}

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug == params.slug)

  // Pass post data to the page via props
  return { props: { post } }
}

export default HistoryPostPage
