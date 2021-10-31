import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type TProps = {
  children: ReactNode
  title?: string
  metadata?: TMetadata
}

const Layout = ({ children, title = '', metadata }: TProps): JSX.Element => {
  const router = useRouter()

  return (
    <div className="font-sans bg-gray-700 text-white">
      <Head>
        <meta charSet="utf-8" />

        <title>
          {title ? `${title} - 清大天文社 50 週年` : '清大天文社 50 週年'}
        </title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="author"
          content="清大外語18級 郭人萱、清大電機18級 徐安廷"
        />

        <meta name="robots" content="all" />
        <meta
          name="keywords"
          content="清大天文50,清大天文社50週年,清大天文社五十週年,清大天文社50社慶,清大天文50週年,清大天文50社慶,週年,周年,社慶,50,50週年,50社慶,50歲,清華,大學,清大,清華大學,清大天文社,天文,天文社,星空之子,NTHU Astronomy Club 50 Anniversary,50 anniversary"
        />
        <meta
          name="description"
          content={metadata?.description ? metadata.description : ''}
        />

        <meta
          property="og:title"
          content={
            title ? `${title} - 清大天文社 50 週年` : '清大天文社 50 週年'
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://50.starkids.club${router.asPath}`}
        />
        <meta
          property="og:image"
          content={
            metadata?.imageUrl
              ? `https://50.starkids.club${metadata.imageUrl}`
              : 'https://50.starkids.club/img/fb-sharing-cover.png'
          }
        />
        <meta property="og:site_name" content="清大天文社 50 週年" />
        <meta
          property="og:description"
          content={metadata?.description ? metadata.description : ''}
        />

        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SBKWE3FLH6"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-SBKWE3FLH6');
            `,
          }}
        />
      </Head>

      <Header />

      <div className="pt-12 overscroll-none">{children}</div>

      <Footer />
    </div>
  )
}

export default Layout
