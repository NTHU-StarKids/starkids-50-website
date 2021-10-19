import Container from '@/components/Container'
import SplitNewLine from '@/components/SplitNewLine'

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
  return (
    <Container className="article-container mt-14 text-left">
      {contents.map((content, index) => {
        if (content.type == 'paragraph') {
          return (
            <p key={`content-${index}`} className="ml-1 md:ml-0">
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
                className="rounded-xl mx-auto max-h-72 w-full md:w-auto md:max-w-screen-md"
                // @ts-ignore
                alt={content.description}
              />
              {
                // @ts-ignore
                content.description ? (
                  <p className="img-description">
                    {
                      // @ts-ignore
                      content.description
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
                  return <li key={`orderList-${index}`}>{c}</li>
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
                  return <li key={`orderList-${index}`}>{c}</li>
                })
              }
            </ol>
          )
        }
      })}
    </Container>
  )
}

export default PostContent
