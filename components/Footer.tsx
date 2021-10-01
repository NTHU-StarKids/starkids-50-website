import Section from '@/components/Section'
import { clubLinks, relatedLinks } from '@/constants'

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-purple-700 pt-12 pb-8 w-full">
      <Section color="purple-700">
        <div className="flex flex-col sm:flex-row items-center justify-center mb-8">
          <div className="w-48">
            <h3 className="border-b border-opacity-20 pb-4 text-xl tracking-widest">
              清大天文社
            </h3>
            <div className="flex flex-shrink-0 px-2 py-8 items-center justify-between">
              {clubLinks.map((link, index) => (
                <div className="w-7" key={`club-link-${index}`}>
                  <a
                    href={link.url}
                    target="_blank"
                    title={link.title}
                    rel="noreferrer"
                  >
                    <img src={link.image} alt={link.title} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 invisible sm:visible"></div>

          <div className="w-72">
            <h3 className="border-b border-opacity-20 pb-4 text-xl tracking-widest">
              相關連結
            </h3>
            <div className="flex flex-shrink-0 gap-x-6 px-2 py-8 items-center justify-between">
              {relatedLinks.map((link, index) => (
                <div className="w-7" key={`related-link-${index}`}>
                  <a
                    href={link.url}
                    target="_blank"
                    title={link.title}
                    rel="noreferrer"
                  >
                    <img src={link.image} alt={link.title} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="font-extralight tracking-wider text-xs sm:text-sm leading-6">
          1971-2021 Copyright © NTHU Astronomy Club. All rights reserved.
          <br></br>
          Designed by Kuo Jen-Hsuan. Developed by Hsu An-Ting. Maintained by
          51st cabinet.
          <br></br>
          本網頁由外語18郭人萱設計、電機18徐安廷開發、第51屆幹部維護
        </p>
      </Section>
    </footer>
  )
}

export default Footer
