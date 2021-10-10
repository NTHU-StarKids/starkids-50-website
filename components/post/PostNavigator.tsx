import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons'

type TProps = {
  posts: TPost[]
  index: number
  prefix: 'history' | 'posts'
}

type TNav = {
  title?: string
  disabled?: boolean
  type: 'first' | 'previous' | 'next' | 'last'
}

const NavigationArrow = ({
  title = '',
  disabled = false,
  type,
}: TNav): JSX.Element => {
  const iconMapping = {
    first: faAngleDoubleLeft,
    previous: faAngleLeft,
    next: faAngleRight,
    last: faAngleDoubleRight,
  }

  const marginMapping = {
    first: 'mr-4',
    previous: 'mr-8',
    next: 'ml-7',
    last: 'ml-4',
  }

  return (
    <FontAwesomeIcon
      icon={iconMapping[type]}
      className={`h-5 ${marginMapping[type]} text-gray-300 ${
        disabled ? 'cursor-not-allowed' : 'hover:text-white cursor-pointer'
      }`}
      title={title}
      fixedWidth
    />
  )
}

const PostNavigator = ({ posts, index, prefix }: TProps): JSX.Element => {
  const length = posts.length

  const prevPost: TPost = posts[index - 1 < 0 ? 0 : index - 1]
  const nextPost: TPost = posts[index + 1 >= length ? index : index + 1]

  return (
    <div className="mt-12 flex justify-center items-center">
      {index == 0 ? (
        <>
          <NavigationArrow type="first" disabled={true} />
          <NavigationArrow type="previous" disabled={true} />
        </>
      ) : (
        <>
          <Link href={`/${prefix}/${posts[0].slug}`} passHref>
            <a>
              <NavigationArrow type="first" title={posts[0].title} />
            </a>
          </Link>
          <Link href={`/${prefix}/${prevPost.slug}`} passHref>
            <a>
              <NavigationArrow type="previous" title={prevPost.title} />
            </a>
          </Link>
        </>
      )}

      <span className="w-12 bg-gray-600 rounded-full tracking-wider cursor-default">
        {index + 1 < 10 ? '0' : ''}
        {index + 1}
      </span>

      {index == length - 1 ? (
        <>
          <NavigationArrow type="next" disabled={true} />
          <NavigationArrow type="last" disabled={true} />
        </>
      ) : (
        <>
          <Link href={`/${prefix}/${nextPost.slug}`} passHref>
            <a>
              <NavigationArrow type="next" title={nextPost.title} />
            </a>
          </Link>
          <Link href={`/${prefix}/${posts[length - 1].slug}`} passHref>
            <a>
              <NavigationArrow type="last" title={posts[length - 1].title} />
            </a>
          </Link>
        </>
      )}
    </div>
  )
}

export default PostNavigator
