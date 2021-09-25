import React from 'react'

import Link from 'next/link'

const Header = (): JSX.Element => {
  return (
    <header className="border-gray-500 border-b bg-gray">
      <nav className="flex items-center justify-between p-6 h-20 bg-white">
        <div className="flex-shrink-0 w-8 text-2xl">
          <Link href="/">
            <a>
              <span>Icon</span>
            </a>
          </Link>
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center justify-between flex-shrink-0 w-52 mr-8 lg:w-80 md:w-60 sm:w-56">
          <Link href="/settings/integration">
            <a>
              <span></span>
            </a>
          </Link>
          <Link href="/settings/workspace">
            <a>
              <span></span>
            </a>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
