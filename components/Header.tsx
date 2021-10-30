import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { menuLinks } from '@/constants'

const Header = (): JSX.Element => {
  const [isMobileHidden, setIsMobileHidden] = useState<boolean>(true)
  const router = useRouter()

  return (
    <header
      className="shadow-md fixed top-0 w-full bg-gray-700 bg-opacity-75 z-50 select-none"
      style={{ backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)' }}
    >
      <nav className="flex items-center justify-between px-8 h-12">
        <div className="flex items-center text-2xl gap-x-3">
          <img src="/img/logo@xs.png" className="w-12" alt="清大天文社 Logo" />
          <Link href="/" passHref>
            <span
              className={`py-1 cursor-pointer border-b-2 transition-all duration-300 tracking-wider text-base font-light ${
                router.pathname == '/'
                  ? 'text-purple-300 border-purple-300 font-normal border-opacity-100'
                  : 'border-opacity-0 hover:border-opacity-25 hover:font-normal'
              }`}
            >
              首頁
            </span>
          </Link>
        </div>
        <div className="hidden sm:flex-1"></div>
        <div className="hidden sm:flex gap-x-4 items-center justify-between">
          {menuLinks.map((link, index) => {
            return (
              <Link key={`desktop-${index}`} href={link.url} passHref>
                <span
                  className={`py-1 cursor-pointer border-b-2 transition-all duration-300 tracking-wider font-light ${
                    router.pathname.startsWith(link.url)
                      ? 'text-purple-300 border-purple-300 font-normal border-opacity-100'
                      : 'border-opacity-0 hover:border-opacity-25 hover:font-normal'
                  }`}
                >
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
        } sm:max-h-0 text-center overflow-hidden transition-max-height duration-700`}
      >
        {menuLinks.map((link, index) => {
          return (
            <div
              key={`mobile-${index}`}
              className={`p-2 ${index + 1 === menuLinks.length ? 'pb-4' : ''}`}
            >
              <Link href={link.url} passHref>
                <span
                  className={`py-2 cursor-pointer border-b-2 transition-all duration-300 tracking-wider font-light ${
                    router.pathname.startsWith(link.url)
                      ? 'text-purple-300 border-purple-300 font-normal border-opacity-100'
                      : 'border-opacity-0 hover:border-opacity-25 hover:font-normal'
                  }`}
                >
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
