import Section from '@/components/Section'
import { clubLinks, relatedLinks } from '@/constants'

import { H3 } from '@/components/Headings'
import Small from '@/components/Small'
import SplitNewLine from '@/components/SplitNewLine'

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-purple-700 pt-12 pb-8 w-full">
      <Section color="purple-700">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-28 md:gap-40 lg:gap-64 xl:gap-80 2xl:gap-96 mb-8 select-none">
          <div className="w-48">
            <H3 className="border-b border-opacity-20 pb-4">清大天文社</H3>
            <div className="flex flex-shrink-0 px-2 py-8 items-center justify-between">
              {clubLinks.map((link, index) => (
                <div
                  className="has-tooltip w-9 p-1 rounded-full hover:bg-400"
                  key={`club-link-${index}`}
                >
                  <a href={link.url} target="_blank" rel="noreferrer">
                    <img src={link.image} alt={link.title} />
                    <span className="tooltip mt-2.5 -ml-7 w-14 text-gray-200 text-2xs text-center font-light">
                      {link.tooltip}
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="w-72">
            <H3 className="border-b border-opacity-20 pb-4">相關連結</H3>
            <div className="flex flex-shrink-0 gap-x-6 px-2 py-8 items-center justify-between">
              {relatedLinks.map((link, index) => (
                <div
                  className="has-tooltip w-9 px-1 pt-0.5 pb-1.5 rounded-full hover:bg-400"
                  key={`related-link-${index}`}
                >
                  <a href={link.url} target="_blank" rel="noreferrer">
                    <img src={link.image} alt={link.title} />
                    <span className="tooltip mt-2.5 -ml-7 w-14 text-gray-200 text-2xs text-center font-light">
                      <SplitNewLine text={link.tooltip} />
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Small>
          1971-2021 Copyright © NTHU Astronomy Club. All rights reserved.
          <br></br>
          Designed by Kuo Jen-Hsuan. Developed by Hsu An-Ting. Maintained by
          51st cabinet.
          <br></br>
          本網頁由外語18郭人萱設計、電機18徐安廷開發、第51屆幹部維護
        </Small>
      </Section>
    </footer>
  )
}

export default Footer
