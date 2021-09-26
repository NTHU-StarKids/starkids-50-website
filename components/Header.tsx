import React, { useState } from 'react'

import Link from 'next/link'

const Header = (): JSX.Element => {
  const [isMobileHidden, setIsMobileHidden] = useState<boolean>(true)
  const menuLinks = [
    {
      name: '社團歷史',
      url: '/',
    },
    {
      name: '社友來稿',
      url: '/',
    },
    {
      name: '留言板',
      url: '/',
    },
    {
      name: '贊助我們',
      url: '/',
    },
  ]

  return (
    <header className="shadow-md fixed top-0 w-full bg-gray-700">
      <nav className="flex items-center justify-between px-8 h-12">
        <div className="flex items-center w-12 text-2xl">
          <Link href="/">
            <img
              src="/img/logo.png"
              className="cursor-pointer"
              alt="清大天文社 Logo"
            />
          </Link>
        </div>
        <div className="hidden sm:flex-1"></div>
        <div className="hidden sm:flex gap-x-4 items-center justify-between tracking-wider font-light">
          {menuLinks.map((link, index) => {
            return (
              <Link key={`desktop-${index}`} href={link.url}>
                <span className="py-1 cursor-pointer border-b-2 border-opacity-0 hover:border-opacity-25 transition-all duration-300">
                  {link.name}
                </span>
              </Link>
            )
          })}
        </div>

        {/* Mobile menu button */}
        <div className="sm:hidden flex items-center">
          <div
            className={`hamburger-btn ${isMobileHidden ? '' : 'open'}`}
            onClick={() => setIsMobileHidden((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`${
          isMobileHidden ? 'max-h-0' : 'max-h-screen'
        } sm:max-h-0 text-center overflow-hidden transition-max-height duration-700 ease-in-out`}
      >
        {menuLinks.map((link, index) => {
          return (
            <div
              key={`mobile-${index}`}
              className={`p-2 ${index + 1 === menuLinks.length ? 'pb-4' : ''}`}
            >
              <Link href={link.url}>
                <span className="py-2  cursor-pointer border-b-2 border-opacity-0 hover:border-opacity-25 transition-all duration-300">
                  {link.name}
                </span>
              </Link>
            </div>
          )
        })}
      </div>
    </header>
  )
}

export default Header
