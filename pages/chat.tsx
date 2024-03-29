import dayjs from 'dayjs'

import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPaperPlane,
  faRandom,
  faSync,
} from '@fortawesome/free-solid-svg-icons'

import { H2 } from '@/components/Headings'
import Section from '@/components/Section'
import SplitNewLine from '@/components/SplitNewLine'
import Layout from '@/components/Layout'
import { availableProfiles } from '@/constants'
import { chats } from '@/constants/chats'

type TProps = {
  disabled: boolean
  messageGroups: TMessageGroup[]
}

type TMessage = {
  sentAt: string
  text: string
}

type TMessageGroup = {
  id: string
  name: string
  profileUrl: string
  isSelf: boolean
  sentAt: string
  messages: TMessage[]
}

const defaultProfile = 'profile-01'

const getChatIds = (): string[] => {
  const chatIds = JSON.parse(localStorage.getItem('chatIds'))
  if (!chatIds) {
    localStorage.setItem('chatIds', JSON.stringify([]))
  }

  const ids = chatIds || []
  return ids
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
                  <p className="tracking-wide text-gray-50 leading-4 text-right cursor-default select-none">
                    <span className="mr-2 text-sm text-gray-200">
                      {dayjs(sentAt).format('YYYY/MM/DD HH:mm')}
                    </span>
                    {name}
                  </p>
                ) : (
                  <p className="tracking-wide text-gray-50 leading-4 cursor-default select-none">
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
                  title={dayjs(sentAt).format('YYYY/MM/DD HH:mm:ss')}
                >
                  <SplitNewLine text={message.text} />
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
  const [nickname, setNickname] = useState<string>('')
  const [message] = useState<string>('')
  const [profile, setProfile] = useState<string>(defaultProfile)
  const messageRef = useRef()
  const focusOutBtnRef = useRef()

  const changeProfile = () => {
    if (!disabled) {
      const currentIndex = availableProfiles.findIndex((p) => p == profile)
      if (
        currentIndex === -1 ||
        currentIndex === availableProfiles.length - 1
      ) {
        setProfile(availableProfiles[0])
        localStorage.setItem('profile', availableProfiles[0])
      } else {
        setProfile(availableProfiles[currentIndex + 1])
        localStorage.setItem('profile', availableProfiles[currentIndex + 1])
      }
    }
  }

  useEffect(() => {
    const picture = localStorage.getItem('profile') || defaultProfile
    const index = availableProfiles.findIndex((p) => p == picture)
    if (index === -1) {
      localStorage.setItem('profile', defaultProfile)
    } else {
      setProfile(availableProfiles[index])
    }

    const chatNickname = localStorage.getItem('chatNickname')
    if (chatNickname) {
      setNickname(chatNickname)
    }
  }, [])

  return (
    <Section>
      <H2 className="mb-10">留言板</H2>
      <div className="relative">
        <div className="absolute w-full -top-4 flex justify-center z-30">
          <div className="rounded-full bg-purple-500 h-8 px-4 py-2 text-base sm:text-lg leading-4 sm:leading-4 tracking-wider select-none">
            {disabled ? (
              <FontAwesomeIcon
                className="animate-spin h-4 mx-2 inline"
                icon={faSync}
              />
            ) : (
              '清大天文50年生日快樂 🎉'
            )}
          </div>
        </div>
        <div className="relative bg-gray-600 w-full h-116 sm:h-132 md:h-148 lg:h-164 xl:h-180 2xl:h-200 rounded-xl">
          <div className="absolute left-0 bottom-24 w-full h-92 sm:h-108 md:h-124 lg:h-140 xl:h-156 2xl:h-176 overflow-hidden">
            <div
              className={`absolute top-0 w-full h-full flex place-content-center transition-opacity duration-700 z-10 opacity-100 ${
                disabled ? '' : 'opacity-0'
              }`}
            >
              <svg
                className="my-auto animate-spin h-10 w-10 rounded-full bg-transparent border-4 border-purple-500 border-opacity-90"
                viewBox="0 0 24 24"
                style={{ borderRightColor: '#F8F7FD' }}
              ></svg>
            </div>

            <div
              className={`absolute w-full h-full z-20 transition-opacity duration-700 ${
                disabled ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className="absolute bottom-0 w-full px-0.5 pt-2 pb-1 overflow-hidden">
                <div className="w-full max-h-88 sm:max-h-104 md:max-h-120 lg:max-h-136 xl:max-h-152 2xl:max-h-172 flex flex-col gap-4 px-2 pb-3 pt-6 lg:p-4 overflow-x-hidden overflow-y-scroll">
                  {messageGroups.map((messageGroup, index) => (
                    <MessageGroup
                      key={`messageGroup-${index}`}
                      {...messageGroup}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-0 bottom-0 w-full h-24 border-t-2 border-gray-500 px-2 md:px-4 py-2 select-none">
            <div className="flex gap-1 h-full">
              <div className="flex w-12 md:w-16 h-full">
                <div
                  className={`relative self-center w-12 md:w-16 h-12 md:h-16 rounded-full bg-center bg-cover ${
                    disabled ? 'cursor-not-allowed' : 'cursor-pointer'
                  }`}
                  style={{
                    backgroundImage: `url('/img/profile/${profile}.png')`,
                  }}
                  onClick={changeProfile}
                >
                  <div
                    className={`absolute right-0 bottom-0 w-6 h-6 rounded-full p-1 ${
                      disabled ? 'bg-gray-400' : 'bg-purple-500'
                    }`}
                  >
                    <FontAwesomeIcon icon={faRandom} />
                  </div>
                </div>
              </div>

              <div className="w-full h-full flex flex-col gap-2 pl-1 md:pl-2">
                <div className="w-full sm:w-1/2 h-9 bg-white rounded-full px-3.5 overflow-hidden">
                  <input
                    type="text"
                    className="form-input w-full h-full px-0 rounded placeholder-gray-400 text-black tracking-wider border-none outline-none focus:ring-0 focus:ring-transparent"
                    name="nickname"
                    placeholder="名字/暱稱"
                    disabled={true}
                    autoComplete="off"
                    value={nickname}
                  />
                </div>
                <div className="relative flex justify-between gap-1 w-full h-9 bg-white rounded-full pl-3.5 pr-0.5 overflow-hidden">
                  <div
                    className="w-full no-scrollbar overflow-y-scroll"
                    style={{ marginTop: '0.4rem' }}
                  >
                    <textarea
                      className="form-textarea w-full h-full p-0 rounded placeholder-gray-400 text-black tracking-wider border-none outline-none focus:ring-0 focus:ring-transparent"
                      name="message"
                      autoFocus={true}
                      placeholder="留言功能已關閉..."
                      disabled={true}
                      autoComplete="off"
                      ref={messageRef}
                    />
                  </div>
                  <div className="flex w-8 h-9">
                    <div
                      className={`w-8 h-8 self-center rounded-full p-1.5 pl-1 ${
                        disabled ||
                        !message ||
                        !message.split(/\n|\r|\r\n/g).join('')
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-purple-500 cursor-pointer'
                      }`}
                    >
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </div>
                  </div>
                  <button
                    className="hidden invisable"
                    ref={focusOutBtnRef}
                  ></button>
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
  const [messageGroups, setMessageGroups] = useState<TMessageGroup[]>([])
  const [isChatsDisabled, setIsChatsDisabled] = useState<boolean>(true)

  const metadata: TMetadata = {
    description: '留言板',
  }

  useEffect(() => {
    const chatIds = getChatIds()
    const generateMessageGroup = (chat: TChat): TMessageGroup => {
      const messageGroup = {
        id: chat.id,
        name: chat.name,
        profileUrl: `/img/profile/${chat.profile}.png`,
        isSelf: chatIds.includes(chat.id),
        sentAt: chat.sentAt,
        messages: [
          {
            sentAt: chat.sentAt,
            text: chat.text,
          },
        ],
      }
      return messageGroup
    }

    const messages: TMessageGroup[] = []
    let prevMessageGroup: TMessageGroup
    chats.forEach((chat, index) => {
      if (index == 0) {
        prevMessageGroup = generateMessageGroup(chat)
        return
      }

      if (
        dayjs(chat.sentAt).diff(dayjs(prevMessageGroup.sentAt)) <
          5 * 60 * 1000 &&
        ((chatIds.includes(chat.id) && chatIds.includes(prevMessageGroup.id)) ||
          (!chatIds.includes(chat.id) &&
            !chatIds.includes(prevMessageGroup.id) &&
            chat.name == prevMessageGroup.name))
      ) {
        const msg = {
          sentAt: chat.sentAt,
          text: chat.text,
        }
        prevMessageGroup.messages.push(msg)
      } else {
        messages.push(prevMessageGroup)
        prevMessageGroup = generateMessageGroup(chat)

        if (index == chats.length - 1) {
          messages.push(prevMessageGroup)
        }
        return
      }

      if (index == chats.length - 1) {
        messages.push(prevMessageGroup)
      }
    })

    setMessageGroups(messages)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsChatsDisabled(false)
    }, 1200)
  }, [])

  return (
    <Layout title="留言板" metadata={metadata}>
      <ChatSection disabled={isChatsDisabled} messageGroups={messageGroups} />
    </Layout>
  )
}
