import React, { ReactNode } from 'react'
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
        <title>{`${title} - 清大天文社 50 週年`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

      <div className="pt-16">
        <div className="container mx-auto px-8 text-center">{children}</div>
      </div>

      <Footer />
    </div>
  )
}

export default Layout
