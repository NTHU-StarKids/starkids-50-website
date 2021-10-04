import Link from 'next/link'
import { useRouter } from 'next/router'

type TProps = {
  post: TPost
}

type TListProps = {
  posts: TPost[]
}

const Post = ({ post }: TProps): JSX.Element => {
  const router = useRouter()
  const firstParagraph = post.contents.find(
    (content) => content.type == 'paragraph'
    // @ts-ignore
  ).text

  return (
    <Link href={`${router.pathname}/${post.slug}`} passHref>
      <div className="flex flex-col lg:flex-row bg-gray-600 hover:bg-gray-650 rounded-2xl h-96 lg:h-48 w-full overflow-hidden transition-colors duration-200 cursor-pointer">
        <div
          className="w-full lg:w-2/5 xl:w-1/3 2xl:w-1/4 bg-center bg-cover h-40 lg:h-auto"
          style={{ backgroundImage: `url('${post.coverUrl}')` }}
        ></div>
        <div className="w-full lg:w-3/5 xl:w-full px-4 lg:px-8 py-4 text-left">
          <div className="flex justify-between tracking-widest">
            <span className="text-xl mb-1 lg:mb-4 text-center lg:text-left w-full lg:w-2/3 truncate">
              {post.title}
            </span>
            <span className="hidden lg:inline lg:ml-4 lg:mr-2 text-base text-right w-max">
              作者/{post.author}
            </span>
          </div>
          <p className="lg:hidden mb-4 text-base text-center tracking-widest">
            作者/{post.author}
          </p>
          <p
            className="text-center lg:text-left font-light tracking-wider overflow-hidden w-full h-28 leading-7"
            style={{ textOverflow: 'ellipsis' }}
          >
            {firstParagraph}
          </p>
        </div>
      </div>
    </Link>
  )
}

const PostList = ({ posts }: TListProps): JSX.Element => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:px-16 outline-none">
      {posts.map((post, index) => (
        <Post key={`post-${index}`} post={post} />
      ))}
    </div>
  )
}

export default PostList
