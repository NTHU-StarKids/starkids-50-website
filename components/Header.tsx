import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

const Header = (): JSX.Element => {
  return (
    <header className="shadow-md fixed top-0 w-full bg-gray-700">
      <nav className="flex items-center justify-between px-8 h-12 bg-white">
        <div className="w-12 text-2xl">
          <Link href="/">
            <Image src="/img/logo.png" />
          </Link>
        </div>
        <div className="flex-1"></div>
        <div className="flex gap-x-4 items-center justify-between">
          <Link href="/">社團歷史</Link>

          <Link href="/">社友來稿</Link>

          <Link href="/">留言板</Link>

          <Link href="/">贊助我們</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
