import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faRandom } from '@fortawesome/free-solid-svg-icons'

import { H2 } from '@/components/Headings'
import Section from '@/components/Section'
import Layout from '@/components/Layout'

type TProps = {
  disabled: boolean
  messageGroups: TMessageGroup[]
}

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
      <div className="w-8 md:w-12">
        <div
          className="relative w-8 md:w-12 h-8 md:h-12 rounded-full bg-center bg-cover"
          style={{ backgroundImage: `url('${profileUrl}')` }}
        ></div>
      </div>
      <div className="w-full text-left px-2 md:px-3">
        {messages.map((message, index) => {
          return (
            <div key={`message-${index}`} className="font-light">
              {index == 0 &&
                (isSelf ? (
                  <p className="tracking-wide text-gray-50 leading-4 text-right">
                    <span className="mr-2 text-sm text-gray-200">
                      {dayjs(sentAt).format('YYYY/MM/DD HH:mm')}
                    </span>
                    {name}
                  </p>
                ) : (
                  <p className="tracking-wide text-gray-50 leading-4">
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

const ChatSection = ({ disabled, messageGroups }: TProps): JSX.Element => {
  const profileUrl = '/img/profile/sample-profile-1@4x.png'

  return (
    <Section>
      <H2 className="mb-10">留言板</H2>
      <div className="relative">
        <div className="absolute w-full -top-4 flex justify-center z-20">
          <div className="rounded-full bg-purple-500 h-8 px-4 py-2 text-lg leading-4 tracking-wider">
            歡迎來到留言板 rrrrrr
          </div>
        </div>
        <div className="relative bg-gray-600 w-full h-116 sm:h-132 md:h-148 lg:h-164 xl:h-180 2xl:h-200 rounded-xl overflow-y-scroll">
          <div className="absolute left-0 bottom-24 flex flex-col gap-4 w-full max-h-92 sm:max-h-108 md:max-h-124 lg:max-h-140 xl:max-h-156 2xl:max-h-176 px-2 pb-3 pt-6 lg:p-4 overflow-y-scroll">
            {messageGroups.map((messageGroup, index) => (
              <MessageGroup key={`messageGroup-${index}`} {...messageGroup} />
            ))}
          </div>
          <div className="absolute left-0 bottom-0 w-full h-24 border-t-2 border-gray-500 px-2 md:px-4 py-2">
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

              <div className="w-full h-full flex flex-col gap-2 pl-1 md:pl-2">
                <div className="w-3/4 sm:w-1/2 h-9 bg-white rounded-full px-3.5 overflow-hidden">
                  <input
                    type="text"
                    className="form-input w-full h-full px-0 rounded placeholder-gray-400 text-black tracking-wider border-none outline-none focus:ring-0 focus:ring-transparent"
                    name="nickname"
                    placeholder="名字/暱稱"
                    disabled={disabled}
                    autoComplete="off"
                  />
                </div>
                <div className="relative w-full h-9 bg-white rounded-full px-3.5 overflow-hidden">
                  <textarea
                    className="form-textarea w-full h-full px-0 pt-1.5 rounded placeholder-gray-400 text-black tracking-wider border-none outline-none focus:ring-0 focus:ring-transparent"
                    name="message"
                    placeholder="輸入訊息"
                    disabled={disabled}
                  />
                  <div
                    className={`absolute w-8 h-8 rounded-full p-1.5 pl-1 ${
                      disabled
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-purple-500 cursor-pointer'
                    }`}
                    style={{ bottom: '0.09rem', right: '0.125rem' }}
                  >
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default function ChatPage({ sheets }: { sheets?: any }): JSX.Element {
  const disabled = false
  console.log(sheets)
  const dataSheets = sheets.filter((sheet, index) => index != 0)
  console.log(dataSheets, 'dataSheets')
  const profileMap = {
    'sample-profile-1@4x.png': '/img/profile/sample-profile-1@4x.png',
  }
  const messageGroups = dataSheets.map((sheet) => {
    return {
      name: sheet[1],
      profileUrl: profileMap[sheet[3]],
      isSelf: false,
      sentAt: sheet[0],
      messages: [
        {
          sentAt: sheet[0],
          text: sheet[2],
        },
      ],
    }
  })
  return (
    <Layout title="留言板">
      <ChatSection disabled={disabled} messageGroups={messageGroups} />
    </Layout>
  )
}
import { google } from 'googleapis'
import credential from '@/constants/googleCredential'

export async function getStaticProps({}) {
  try {
    const scopes = ['https://www.googleapis.com/auth/spreadsheets']
    const jwt = new google.auth.JWT(
      credential.client_email,
      null,
      credential.private_key,
      scopes
    )

    const sheets = google.sheets({ version: 'v4', auth: jwt })
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: '1Extj_-zHi8swFzmF-hU76gRCy8gwn60RSUEO5rVhTJY',
      range: 'Sheet1',
    })
    return {
      props: {
        sheets: response.data.values,
      },
      revalidate: 10,
    }
  } catch (err) {
    console.log(err)
  }

  return {
    props: {},
  }
}
