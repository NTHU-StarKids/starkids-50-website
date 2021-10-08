import Error from 'next/error'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons'

import { H3 } from '@/components/Headings'
import Section from '@/components/Section'
import Layout from '@/components/Layout'
import posts from '@/constants/magazinePosts'
import { getPostFirstParagraph } from '@/utils'

type TProps = {
  post: TPost
  index: number
  nextPost: TPost
  prevPost: TPost
}

const PostSection = ({
  post,
  index,
  nextPost,
  prevPost,
}: TProps): JSX.Element => {
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

      <div className="mt-12 flex justify-center items-center">
        <Link href={`/posts/${posts[0].slug}`} passHref>
          <FontAwesomeIcon
            icon={faAngleDoubleLeft}
            className="h-5 mr-4 text-gray-300 hover:text-white cursor-pointer"
            title={posts[0].title}
            fixedWidth
          />
        </Link>
        <Link href={`/posts/${prevPost.slug}`} passHref>
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="h-5 mr-8 text-gray-300 hover:text-white cursor-pointer"
            title={prevPost.title}
            fixedWidth
          />
        </Link>
        <span className="w-12 bg-gray-600 rounded-full tracking-wider cursor-default">
          {index + 1 < 10 ? '0' : ''}
          {index + 1}
        </span>
        <Link href={`/posts/${nextPost.slug}`} passHref>
          <FontAwesomeIcon
            icon={faAngleRight}
            className="h-5 ml-7 text-gray-300 hover:text-white cursor-pointer"
            title={nextPost.title}
            fixedWidth
          />
        </Link>
        <Link href={`/posts/${posts[posts.length - 1].slug}`} passHref>
          <FontAwesomeIcon
            icon={faAngleDoubleRight}
            className="h-5 ml-4 text-gray-300 hover:text-white cursor-pointer"
            title={posts[posts.length - 1].title}
            fixedWidth
          />
        </Link>
      </div>
    </Section>
  )
}

const MagazinePostPage = (): JSX.Element => {
  const router = useRouter()
  const { slug } = router.query
  const index = posts.findIndex((c) => c.slug == slug)
  if (index == -1) return <Error statusCode={404} />
  const post = posts[index]

  const firstParagraph = getPostFirstParagraph(post)
  const metadata: TMetadata = {
    imageUrl: post.coverUrl,
    description: firstParagraph,
  }

  const length = posts.length
  let prevIndex = 0
  let nextIndex = 0
  if (index == 0) {
    prevIndex = length - 1
    nextIndex = 1
  } else if (index == length - 1) {
    prevIndex = index - 1
    nextIndex = 0
  } else {
    prevIndex = index - 1
    nextIndex = index + 1
  }

  return (
    <Layout title={post.title} metadata={metadata}>
      <PostSection
        post={post}
        index={index}
        nextPost={posts[nextIndex]}
        prevPost={posts[prevIndex]}
      />
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

export default MagazinePostPage
