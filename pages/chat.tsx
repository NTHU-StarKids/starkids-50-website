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
        <div className="absolute left-0 bottom-20 flex flex-col gap-4 w-full max-h-92 sm:max-h-108 md:max-h-124 lg:max-h-140 xl:max-h-156 2xl:max-h-172 px-2 py-3 overflow-y-scroll">
          <div className="flex w-full sm:w-5/6 md:w-4/5 lg:w-2/3">
            <div className="w-12">
              <div
                className="relative w-12 h-12 rounded-full bg-center bg-cover"
                style={{ backgroundImage: `url('${profileUrl}')` }}
              ></div>
            </div>
            <div className="w-full text-left px-3">
              <p className="tracking-wide">未命名</p>
              <div className="w-full mt-1 bg-white text-black font-thin p-3 rounded-2xl rounded-tl-none tracking-wide">
                不能城南微，堂江為有情野，間人斷青生邊山茫可憐之子⋯屏風石理對此難於上⋯者人在之兵莫青不葉歸客連：臨洮去夢南斗香送淚。月南風：雨萬不見裡不相見征天風塵青百，
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse w-full sm:w-5/6 md:w-4/5 lg:w-2/3 ml-auto">
            <div className="w-12">
              <div
                className="relative w-12 h-12 rounded-full bg-center bg-cover"
                style={{ backgroundImage: `url('${profileUrl}')` }}
              ></div>
            </div>
            <div className="w-full text-left px-3">
              <p className="text-right tracking-wide">未命名</p>
              <div className="w-full mt-1 bg-purple-600 text-white font-thin p-3 rounded-2xl rounded-tr-none tracking-wide">
                不能城南微，堂江為有情野，間人斷青生邊山茫可憐之子⋯屏風石理對此難於上⋯者人在之兵莫青不葉歸客連：臨洮去夢南斗香送淚。月南風：雨萬不見裡不相見征天風塵青百，
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 bottom-0 w-full h-20 border-t-2 border-gray-500 px-4 py-2">
          <div className="flex gap-1">
            <div className="w-16 h-full">
              <div
                className="relative w-16 h-16 rounded-full bg-center bg-cover cursor-pointer"
                style={{ backgroundImage: `url('${profileUrl}')` }}
              >
                <div className="absolute right-0 bottom-0 w-6 h-6 rounded-full bg-purple-500 p-1">
                  <FontAwesomeIcon icon={faRandom} />
                </div>
              </div>
            </div>

            <div className="w-full h-full flex flex-col gap-2 pl-2">
              <div className="w-1/2 h-7 bg-white rounded-full px-3.5 overflow-hidden">
                <input
                  type="text"
                  className="form-input w-full h-full px-0 placeholder-gray-400 text-black tracking-wider border-none outline-none focus:ring-0 focus:ring-transparent"
                  name="nickname"
                  placeholder="名字/暱稱"
                />
              </div>
              <div className="relative w-full h-7 bg-white rounded-full px-3.5 overflow-hidden">
                <textarea
                  className="form-textarea w-full h-full px-0 pt-0.5 placeholder-gray-400 text-black tracking-wider border-none outline-none focus:ring-0 focus:ring-transparent"
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
