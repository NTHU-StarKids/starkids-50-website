import { Fragment, useState } from 'react'
import dayjs from 'dayjs'
import { sha256 } from 'js-sha256'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dialog, Transition } from '@headlessui/react'

import { H2, H3 } from '@/components/Headings'
import P from '@/components/Paragraph'
import Section from '@/components/Section'
import SplitNewLine from '@/components/SplitNewLine'
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
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <Section className="pt-0 pb-6">
        <div
          className={`relative w-full h-80 lg:h-96 ${
            picture.portrait ? picture.position : 'bg-center'
          } bg-cover cursor-pointer`}
          style={{ backgroundImage: `url('${picture.imgUrl}')` }}
          onClick={() => setIsOpen(true)}
        >
          <div className="absolute bottom-0 w-full px-6 py-4 bg-gray-900 bg-opacity-40 text-white cursor-default select-none">
            <H3 className="mb-1 truncate">每日精選</H3>
            <P>{picture.title}</P>
          </div>
        </div>
      </Section>

      <Transition show={isOpen} as={Fragment}>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed z-50 inset-0 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-90"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-90"
            >
              <div className="relative bg-gray-700 text-white rounded-2xl w-5/6 mx-auto my-20 px-4 pt-4 pb-12 tracking-wider">
                <button
                  className="hamburger-btn open float-right outline-none focus:outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>

                <p className="text-xl text-center mb-6 px-12 cursor-default select-none">
                  {picture.title}
                </p>
                <div
                  className={`w-full ${
                    picture.portrait
                      ? 'sm:w-2/3 md:w-7/12 lg:w-2/5'
                      : 'sm:w-5/6 md:w-4/5 lg:w-2/3'
                  } mx-auto`}
                >
                  <img
                    src={picture.imgUrl}
                    alt={picture.title}
                    className="mb-6"
                  />
                </div>
                <div className={`w-full sm:w-5/6 md:w-4/5 lg:w-2/3 mx-auto`}>
                  <p className="mb-2">作者：{picture.author}</p>
                  <p className="mb-4">
                    說明：<br></br>
                    <SplitNewLine
                      className="font-light"
                      text={picture.description}
                    />
                  </p>
                  <p className="mb-4">
                    拍攝參數：<br></br>
                    <SplitNewLine
                      className="font-light tracking-wide"
                      text={picture.parameters}
                    />
                  </p>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
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
