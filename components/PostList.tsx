import { H3 } from '@/components/Headings'

type TProps = {
  post: TPost
}

type TListProps = {
  posts: TPost[]
}

const Post = ({ post }: TProps): JSX.Element => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-600 hover:bg-gray-650 rounded-2xl h-96 lg:h-48 w-full overflow-hidden transition-colors duration-200 cursor-pointer">
      <div
        className="w-full lg:w-2/5 bg-center bg-cover h-40 lg:h-auto"
        style={{ backgroundImage: `url('${post.imageUrl}')` }}
      ></div>
      <div className="w-full px-4 lg:px-8 py-4 text-left">
        <H3 className="mb-1 lg:mb-4 text-center lg:text-left">
          {post.title}
          <span className="hidden lg:inline lg:ml-16 text-base">
            作者/{post.author}
          </span>
        </H3>
        <p className="lg:hidden mb-4 text-base text-center tracking-widest">
          作者/{post.author}
        </p>
        <p
          className="text-center lg:text-left font-light tracking-wider overflow-hidden w-full h-28 leading-7"
          style={{ textOverflow: 'ellipsis' }}
        >
          {post.body}
        </p>
      </div>
    </div>
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
