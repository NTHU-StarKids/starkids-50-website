import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faRandom } from '@fortawesome/free-solid-svg-icons'

import { H2 } from '@/components/Headings'
import Section from '@/components/Section'
import Layout from '@/components/Layout'

const ChatSection = (): JSX.Element => {
  const profileUrl = '/img/profile/sample-profile-1@4x.png'
  return (
    <Section>
      <H2>留言板</H2>
      <div className="relative bg-gray-600 w-full h-112 sm:h-128 md:h-144 lg:h-160 xl:h-176 2xl:h-196 rounded-xl overflow-scroll">
        <div className="absolute left-0 bottom-20 w-full max-h-92 sm:max-h-108 md:max-h-124 lg:max-h-140 xl:max-h-156 2xl:max-h-172 p-2 overflow-y-scroll">
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
          <br />
          hihi
        </div>
        <div className="absolute left-0 bottom-0 w-full h-20 border-t-2 border-gray-500 px-4 py-2">
          <div className="flex gap-2">
            <div
              className="relative w-16 h-16 rounded-full bg-center bg-cover cursor-pointer"
              style={{ backgroundImage: `url('${profileUrl}')` }}
            >
              <div className="absolute right-0 bottom-0 w-6 h-6 rounded-full bg-purple-500 p-1">
                <FontAwesomeIcon icon={faRandom} />
              </div>
            </div>
            <div className="w-full flex flex-col gap-2 pl-2">
              <div className="w-1/2 h-7 bg-white rounded-full px-3.5 overflow-hidden">
                <input
                  type="text"
                  className="w-full h-full tracking-wider outline-none text-black"
                  name="nickname"
                  placeholder="名字/暱稱"
                />
              </div>
              <div className="relative w-full h-7 bg-white rounded-full px-3.5 overflow-hidden">
                <textarea
                  className="w-full h-full pt-0.5 tracking-wider outline-none text-black"
                  name="message"
                  placeholder="輸入訊息"
                />
                <div
                  className="absolute w-6 h-6 rounded-full bg-purple-500 p-1 pl-0.5 cursor-pointer"
                  style={{ bottom: '0.125rem', right: '0.125rem' }}
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default function ChatPage(): JSX.Element {
  return (
    <Layout title="留言板">
      <ChatSection />
    </Layout>
  )
}
