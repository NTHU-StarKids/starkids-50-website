import { Fragment, useState } from 'react'
import Container from '@/components/Container'
import SplitNewLine from '@/components/SplitNewLine'
import { Dialog, Transition } from '@headlessui/react'

type TProps = {
  contents: (
    | TPostParagraph
    | TPostSubtitle
    | TPostOrderList
    | TPostUnorderList
    | TPostImage
  )[]
}

const PostContent = ({ contents }: TProps): JSX.Element => {
  const initImage: TPostImage = {
    type: 'image',
    url: '',
    description: '',
  }
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [image, setImage] = useState<TPostImage>(initImage)
  const prviewImage = (img: TPostImage) => {
    if (window.innerWidth >= 640) {
      setImage(img)
      setIsOpen(true)
    }
  }

  return (
    <>
      <Container className="article-container mt-14 text-left">
        {contents.map((content, index) => {
          if (content.type == 'paragraph') {
            return (
              <p key={`content-${index}`}>
                <SplitNewLine
                  // @ts-ignore
                  text={content.text}
                />
              </p>
            )
          } else if (content.type == 'subtitle') {
            return (
              <p key={`content-${index}`} className="subtitle">
                <SplitNewLine
                  // @ts-ignore
                  text={content.text}
                />
              </p>
            )
          } else if (content.type == 'image') {
            return (
              <div key={`content-${index}`} className="my-10">
                <img
                  // @ts-ignore
                  src={content.url}
                  className="rounded-xl mx-auto w-full sm:w-auto sm:max-w-screen-xs md:max-w-screen-sm sm:max-h-112 cursor-default sm:cursor-pointer"
                  // @ts-ignore
                  alt={content.description}
                  // @ts-ignore
                  onClick={() => prviewImage(content)}
                />
                {
                  // @ts-ignore
                  content.description ? (
                    <p className="img-description">
                      {
                        // @ts-ignore
                        <SplitNewLine text={content.description} />
                      }
                    </p>
                  ) : null
                }
              </div>
            )
          } else if (content.type == 'unorderList') {
            return (
              // @ts-ignore
              <ul style={{ listStyleType: content.styleType }}>
                {
                  // @ts-ignore
                  content.title
                }
                {
                  // @ts-ignore
                  content.list.map((c: string, index: number) => {
                    return (
                      <li key={`unorderList-${index}`}>
                        <SplitNewLine text={c} />
                      </li>
                    )
                  })
                }
              </ul>
            )
          } else if (content.type == 'orderList') {
            return (
              <ol>
                {
                  // @ts-ignore
                  content.title
                }
                {
                  // @ts-ignore
                  content.list.map((c: string, index: number) => {
                    return (
                      <li key={`orderList-${index}`}>
                        <SplitNewLine text={c} />
                      </li>
                    )
                  })
                }
              </ol>
            )
          }
        })}
      </Container>
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
              <div
                className={`relative bg-gray-700 text-white rounded-2xl w-5/6 mx-auto my-20 px-4 pt-4 ${
                  image.description ? 'pb-12' : ''
                } tracking-wider`}
              >
                <button
                  className="hamburger-btn open float-right outline-none focus:outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>

                <div className="w-full sm:w-5/6 md:w-4/5 lg:w-2/3 mx-auto">
                  {image.description && (
                    <p className="text-lg font-light text-center mb-4 px-12">
                      {image.description}
                    </p>
                  )}
                  <img
                    src={image.url}
                    alt={image.description}
                    className="mb-4 mx-auto rounded-2xl"
                  />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default PostContent
