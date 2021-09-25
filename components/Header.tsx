import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from '@/public/img/logo.png'

const Header = (): JSX.Element => {
  return (
    <header className="shadow-md fixed top-0 w-full bg-gray-700">
      <nav className="flex items-center justify-between px-8 h-12 bg-white">
        <div className="flex items-center w-12 text-2xl">
          <Link href="/">
            <Image src={logo} alt="清大天文社 Logo" />
          </Link>
        </div>
        <div className="flex-1"></div>
        <div className="flex gap-x-4 items-center justify-between tracking-wider font-light">
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
