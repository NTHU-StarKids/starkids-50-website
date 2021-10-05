import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faRandom } from '@fortawesome/free-solid-svg-icons'

import { H2 } from '@/components/Headings'
import Section from '@/components/Section'
import Layout from '@/components/Layout'

type TMessage = {
  sentAt: string
  text: string
}

type TMessageGroup = {
  name: string
  profileUrl: string
  isSelf: boolean
  sentAt: string
  messages: TMessage[]
}

const MessageGroup = ({
  name,
  profileUrl,
  isSelf,
  sentAt,
  messages,
}: TMessageGroup): JSX.Element => {
  return (
    <div
      className={`flex w-full sm:w-5/6 md:w-4/5 lg:w-2/3 ${
        isSelf ? 'flex-row-reverse ml-auto' : ''
      }`}
    >
      <div className="w-12">
        <div
          className="relative w-12 h-12 rounded-full bg-center bg-cover"
          style={{ backgroundImage: `url('${profileUrl}')` }}
        ></div>
      </div>
      <div className="w-full text-left px-3">
        {messages.map((message, index) => {
          return (
            <div key={`message-${index}`} className="font-light">
              {index == 0 &&
                (isSelf ? (
                  <p className="tracking-wide text-gray-50 text-right">
                    <span className="mr-2 text-sm text-gray-200">
                      {dayjs(sentAt).format('YYYY/MM/DD HH:mm')}
                    </span>
                    {name}
                  </p>
                ) : (
                  <p className="tracking-wide text-gray-50">
                    {name}
                    <span className="ml-2 text-sm text-gray-200">
                      {dayjs(sentAt).format('YYYY/MM/DD HH:mm')}
                    </span>
                  </p>
                ))}
              <div
                className={`w-full flex ${
                  isSelf ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`mt-1 p-3 rounded-2xl tracking-wide ${
                    isSelf ? 'bg-purple-600 text-white' : 'bg-white text-black'
                  } ${
                    index == 0
                      ? isSelf
                        ? 'rounded-tr-none'
                        : 'rounded-tl-none'
                      : ''
                  }`}
                >
                  {message.text}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const ChatSection = (): JSX.Element => {
  const profileUrl = '/img/profile/sample-profile-1@4x.png'

  const messageGroups: TMessageGroup[] = [
    {
      name: '吳慧生',
      profileUrl: profileUrl,
      isSelf: false,
      sentAt: '2021-11-27T13:00:01Z',
      messages: [
        {
          sentAt: '2021-11-27T13:00:01Z',
          text: '嶺外音書絕，城春草木深',
        },
        {
          sentAt: '2021-11-27T13:00:01Z',
          text: '故人西辭黃鶴樓',
        },
      ],
    },
    {
      name: '陳善麟',
      profileUrl: profileUrl,
      isSelf: false,
      sentAt: '2021-11-27T13:02:53Z',
      messages: [
        {
          sentAt: '2021-11-27T13:02:53Z',
          text: '不能城南微，堂江為有情野，間人斷青生邊山茫可憐之子⋯屏風石理對此難於上⋯者人在之兵莫青不葉歸客連：臨洮去夢南斗香送淚。月南風：雨萬不見裡不相見征天風塵青百，',
        },
      ],
    },
    {
      name: '楊佳慧',
      profileUrl: profileUrl,
      isSelf: true,
      sentAt: '2021-11-27T13:29:35Z',
      messages: [
        {
          sentAt: '2021-11-27T13:29:35Z',
          text: '不能城南微，堂江為有情野，間人斷青生邊山茫可憐之子⋯屏風石理對此難於上⋯者人在之兵莫青不葉歸客連：臨洮去夢南斗香送淚。月南風：雨萬不見裡不相見征天風塵青百，',
        },
      ],
    },
    {
      name: '左敬虹',
      profileUrl: profileUrl,
      isSelf: false,
      sentAt: '2021-11-27T14:41:22Z',
      messages: [
        {
          sentAt: '2021-11-27T14:41:22Z',
          text: '喵',
        },
      ],
    },
    {
      name: '陳柏瑋',
      profileUrl: profileUrl,
      isSelf: true,
      sentAt: '2021-11-28T06:29:10Z',
      messages: [
        {
          sentAt: '2021-11-28T06:29:10Z',
          text: '喵喵喵',
        },
        {
          sentAt: '2021-11-28T06:29:46Z',
          text: '外日之清綠水，如青雲雨，',
        },
        {
          sentAt: '2021-11-28T07:03:12Z',
          text: '八月都東流水沙場，生登嗟幽人識蹉跎君不見：花鄉心孤日月朝關何為十好，鴛鴦柳色不然杯春宵寒山，閒山泉水陶然共。',
        },
      ],
    },
  ]

  return (
    <Section>
      <H2>留言板</H2>
      <div className="relative bg-gray-600 w-full h-116 sm:h-132 md:h-148 lg:h-164 xl:h-180 2xl:h-200 rounded-xl overflow-scroll">
        <div className="absolute left-0 bottom-24 flex flex-col gap-4 w-full max-h-92 sm:max-h-108 md:max-h-124 lg:max-h-140 xl:max-h-156 2xl:max-h-176 px-2 py-3 lg:p-4 overflow-y-scroll">
          {messageGroups.map((messageGroup, index) => (
            <MessageGroup key={`messageGroup-${index}`} {...messageGroup} />
          ))}
        </div>
        <div className="absolute left-0 bottom-0 w-full h-24 border-t-2 border-gray-500 px-4 py-2">
          <div className="flex gap-1 h-full">
            <div className="flex w-12 md:w-16 h-full">
              <div
                className="relative self-center w-12 md:w-16 h-12 md:h-16 rounded-full bg-center bg-cover cursor-pointer"
                style={{ backgroundImage: `url('${profileUrl}')` }}
              >
                <div className="absolute right-0 bottom-0 w-6 h-6 rounded-full bg-purple-500 p-1">
                  <FontAwesomeIcon icon={faRandom} />
                </div>
              </div>
            </div>

            <div className="w-full h-full flex flex-col gap-2 pl-2">
              <div className="w-3/4 sm:w-1/2 h-9 bg-white rounded-full px-3.5 overflow-hidden">
                <input
                  type="text"
                  className="form-input w-full h-full px-0 rounded placeholder-gray-400 text-black tracking-wider border-none outline-none focus:ring-0 focus:ring-transparent"
                  name="nickname"
                  placeholder="名字/暱稱"
                />
              </div>
              <div className="relative w-full h-9 bg-white rounded-full px-3.5 overflow-hidden">
                <textarea
                  className="form-textarea w-full h-full px-0 pt-1.5 rounded placeholder-gray-400 text-black tracking-wider border-none outline-none focus:ring-0 focus:ring-transparent"
                  name="message"
                  placeholder="輸入訊息"
                />
                <div
                  className="absolute w-8 h-8 rounded-full bg-purple-500 p-1.5 pl-1 cursor-pointer"
                  style={{ bottom: '0.09rem', right: '0.125rem' }}
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
