import { ReactNode } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type Props = {
  children: ReactNode
  title?: string
}

const Layout = ({
  children,
  title = 'This is the default title',
}: Props): JSX.Element => {
  return (
    <div className="font-sans bg-gray-700 text-white">
      <Head>
        <meta charSet="utf-8" />

        <title>{`${title} - 清大天文社 50 週年`}</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

      <div className="pt-12">{children}</div>

      <Footer />
    </div>
  )
}

export default Layout
