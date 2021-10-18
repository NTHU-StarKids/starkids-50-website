import Error from 'next/error'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { H3 } from '@/components/Headings'
import P from '@/components/Paragraph'
import Section from '@/components/Section'
import Layout from '@/components/Layout'
import { categories } from '@/constants/album'

type TProps = {
  category: TAlbumCategory
  nextCategory: TAlbumCategory
  prevCategory: TAlbumCategory
}

const CategorySection = ({
  category,
  nextCategory,
  prevCategory,
}: TProps): JSX.Element => {
  return (
    <Section className="pb-20">
      <div className="flex justify-center items-center">
        <Link href={`/album/${prevCategory.slug}`} passHref>
          <a title={prevCategory.name}>
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="w-2.5 mr-8 text-gray-300 hover:text-white cursor-pointer"
              fixedWidth
            />
          </a>
        </Link>
        <H3 className="cursor-default select-none">{category.name}</H3>
        <Link href={`/album/${nextCategory.slug}`} passHref>
          <a title={nextCategory.name}>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="w-2.5 ml-7 text-gray-300 hover:text-white cursor-pointer"
              fixedWidth
            />
          </a>
        </Link>
      </div>

      <div className="mt-12">
        <P>{category.description}</P>
      </div>

      <div className="mt-8 grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {category.images.map((image, index) => {
          return (
            <div key={`image-${index}`}>
              <div
                className={`${
                  image.portrait ? 'w-full sm:w-2/3 sm:mx-auto' : 'w-full'
                } rounded-xl overflow-hidden`}
                style={{ backgroundImage: `url('${image.imgUrl}')` }}
              >
                <img
                  src={image.imgUrl}
                  className="w-full"
                  alt={image.description}
                />
              </div>
              <p className="mt-2">{image.description}</p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

const CategoryPage = (): JSX.Element => {
  const router = useRouter()
  const { slug } = router.query
  const index = categories.findIndex((c) => c.slug == slug)
  if (index == -1) return <Error statusCode={404} />
  const category = categories[index]

  const metadata: TMetadata = {
    imageUrl: category.coverImgUrl,
    description: category.description,
  }

  const length = categories.length
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
    <Layout title={category.name} metadata={metadata}>
      <CategorySection
        category={category}
        nextCategory={categories[nextIndex]}
        prevCategory={categories[prevIndex]}
      />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = categories.map((category) => ({
    params: { slug: category.slug },
  }))

  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const index = categories.findIndex((c) => c.slug == params.slug)

  // Pass category data to the page via props
  return { props: { category: categories[index] } }
}

export default CategoryPage
