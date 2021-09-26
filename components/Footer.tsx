import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBirthdayCake,
  faBookReader,
  faGlobe,
  faGraduationCap,
  faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Container from '@/components/Container'

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-purple pt-12 pb-8 w-full">
      <Container color="purple">
        <div className="flex flex-col sm:flex-row items-center justify-center mb-8">
          <div className="w-48">
            <h3 className="border-b border-opacity-20 pb-4 text-xl tracking-widest">
              清大天文社
            </h3>
            <div className="flex flex-shrink-0 px-2 py-8 items-center justify-between">
              <div className="w-6">
                <a
                  href="http://my.nthu.edu.tw/~res9202/"
                  target="_blank"
                  title="國立清華大學天文社 NTHU Astronomy Club (官網)"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon fixedWidth icon={faGlobe} />
                </a>
              </div>
              <div className="w-4">
                <a
                  href="https://www.facebook.com/nthuastro"
                  target="_blank"
                  title="清大天文社 NTHU Astronomy Club (Facebook)"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon fixedWidth icon={faFacebookF} />
                </a>
              </div>
              <div className="w-6">
                <a
                  href="https://www.instagram.com/nthuastroclub/"
                  target="_blank"
                  title="清大天文社 NTHU Astronomy Club (Instagram)"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon fixedWidth icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 invisible sm:visible"></div>

          <div className="w-72">
            <h3 className="border-b border-opacity-20 pb-4 text-xl tracking-widest">
              相關連結
            </h3>
            <div className="flex flex-shrink-0 gap-x-6 px-2 py-8 items-center justify-between">
              <div className="w-6">
                <a
                  href="https://sites.google.com/site/nthuastro40th/"
                  target="_blank"
                  title="清大天文社四十周年"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon fixedWidth icon={faBirthdayCake} />
                </a>
              </div>
              <div className="w-6">
                <a
                  href="http://my.nthu.edu.tw/~res9202/astrocamp/2021/"
                  target="_blank"
                  title="2021 清華大學星空之子天文營"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon fixedWidth icon={faBookReader} />
                </a>
              </div>
              <div className="w-6">
                <a
                  href="http://nthuobs.phys.nthu.edu.tw/tw"
                  target="_blank"
                  title="清華大學天文台"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon fixedWidth icon={faUserAstronaut} />
                </a>
              </div>
              <div className="w-8">
                <a
                  href="https://www.facebook.com/AstronomyClubUnion/"
                  target="_blank"
                  title="全國大學天文社聯盟 (Facebook)"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon fixedWidth icon={faGraduationCap} />
                </a>
              </div>
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
      </Container>
    </footer>
  )
}

export default Footer
