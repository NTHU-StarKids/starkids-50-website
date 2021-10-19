import dayjs from 'dayjs'
import { sha256 } from 'js-sha256'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { H2, H3 } from '@/components/Headings'
import P from '@/components/Paragraph'
import Section from '@/components/Section'
import Layout from '@/components/Layout'
import { dailies, categories } from '@/constants/album'

const getDailyPicture = (): TAlbumImage => {
  const length = dailies.length
  const today = dayjs().format('YYYYMMDD')
  const hash = sha256(today)
  const index = parseInt(`0x${hash}`) % length

  return dailies[index]
}

// const ComingSoonSection = (): JSX.Element => {
//   return (
//     <Section className="h-72">
//       <div className="mt-16 flex justify-center items-center">
//         <FontAwesomeIcon className="h-20 mr-6" icon={faHammer} />
//         <h1 className="text-5xl tracking-wider font-semibold">
//           Coming Soon...
//         </h1>
//       </div>
//     </Section>
//   )
// }

const TitleSection = (): JSX.Element => {
  return (
    <Section className="pb-0">
      <H2>成果集錦</H2>
    </Section>
  )
}

const DailySection = (): JSX.Element => {
  const picture = getDailyPicture()

  return (
    <Section className="pt-0 pb-6">
      <div
        className="relative w-full h-80 lg:h-96 bg-center bg-cover"
        style={{ backgroundImage: `url('${picture.imgUrl}')` }}
      >
        <div className="absolute bottom-0 w-full px-6 py-4 bg-gray-900 bg-opacity-40 text-white cursor-default select-none">
          <H3 className="mb-1 truncate">每日精選</H3>
          <P>{picture.description}</P>
        </div>
      </div>
    </Section>
  )
}

const CategorySection = (): JSX.Element => {
  const router = useRouter()

  return (
    <Section className="pt-0">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 outline-none cursor-pointer">
        {categories.map((category, index) => {
          return (
            <Link
              href={`${router.pathname}/${category.slug}`}
              key={`category-${index}`}
              passHref
            >
              <div
                className="relative w-full h-48 sm:h-60 lg:h-72 bg-center bg-cover rounded-2xl overflow-hidden"
                style={{ backgroundImage: `url('${category.coverImgUrl}')` }}
              >
                <div className="absolute bottom-0 w-full px-6 py-4 bg-gray-900 bg-opacity-40 text-white select-none">
                  <H3 className="truncate">{category.name}</H3>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </Section>
  )
}

export default function AlbumPage(): JSX.Element {
  return (
    <Layout title="成果集錦">
      <TitleSection />
      <DailySection />
      <CategorySection />
    </Layout>
  )
}
