import { H3 } from '@/components/Headings'
import SplitNewLine from '@/components/SplitNewLine'

type TProps = {
  contents: (TPostParagraph | TPostImage)[]
}

const PostContent = ({ contents }: TProps): JSX.Element => {
  return (
    <div className="mt-12 text-left">
      {contents.map((content, index) => {
        if (content.type == 'paragraph') {
          return (
            <p
              key={`content-${index}`}
              className="mb-4 font-light tracking-widest ml-1 md:ml-0"
            >
              <SplitNewLine
                // @ts-ignore
                text={content.text}
              />
            </p>
          )
        } else if (content.type == 'subtitle') {
          return (
            <H3
              key={`content-${index}`}
              className="mt-12 mb-2 tracking-wider text-center"
            >
              <SplitNewLine
                // @ts-ignore
                text={content.text}
              />
            </H3>
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
  )
}

export default PostContent
