import React from 'react'

import Link from 'next/link'

const Header = (): JSX.Element => {
  return (
    <header className="shadow-md fixed top-0 w-full bg-gray-700">
      <nav className="flex items-center justify-between px-8 h-12">
        <div className="flex items-center w-12 text-2xl">
          <Link href="/">
            <img src="/img/logo.png" alt="清大天文社 Logo" />
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
