import dayjs from 'dayjs'

import { KeyboardEvent, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPaperPlane,
  faRandom,
  faSync,
} from '@fortawesome/free-solid-svg-icons'

import { createChat } from '@/api'
import { H2 } from '@/components/Headings'
import Section from '@/components/Section'
import Layout from '@/components/Layout'
import { profileMap } from '@/constants'
import { useChats } from '@/hook'

type TProps = {
  disabled: boolean
  messageGroups: TMessageGroup[]
  refetchChats: () => void
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

const appendChatId = (id: string) => {
  const ids = JSON.parse(localStorage.getItem('chatIds')) || []
  ids.push(id)
  const chatIds = Array.from(new Set(ids))
  localStorage.setItem('chatIds', JSON.stringify(chatIds))
}

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
            <div
              key={`message-${index}`}
              className="font-light"
              title={dayjs(sentAt).format('YYYY/MM/DD HH:mm:ss')}
            >
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
                  {message.text.split('\n').map((str, index) => {
                    if (index == message.text.split('\n').length + 1)
                      return <span key={`msg-${index}`}>{str}</span>
                    return (
                      <span key={`msg-${index}`}>
                        {str}
                        <br></br>
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const ChatSection = ({
  disabled,
  messageGroups,
  refetchChats,
}: TProps): JSX.Element => {
  const randomProfile = (): string => {
    return 'sample-profile-1'
  }

  const [nickname, setNickname] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [profile, setProfile] = useState<string>(randomProfile())
  const messageRef = useRef()
  const focusOutBtnRef = useRef()

  const sendMessage = async () => {
    if (!disabled && message && message.split(/\n|\r|\r\n/g).join('')) {
      const result = await createChat(nickname || '匿名', message, profile)
      if (result) {
        appendChatId(result.id)
        setMessage('')
        // @ts-ignore
        focusOutBtnRef.current.click()
        // @ts-ignore
        messageRef.current.focus()
        refetchChats()
      }
    }
  }

  const changeProfile = () => {
    if (!disabled) {
      console.log('changeProfile')
      setProfile(randomProfile())
    }
  }

  const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0
  }

  const onMessageKeyDown = (event: KeyboardEvent) => {
    if (
      !disabled &&
      event.key === 'Enter' &&
      !event.nativeEvent.isComposing &&
      !event.shiftKey &&
      !isTouchDevice()
    ) {
      sendMessage()
      event.preventDefault()
    }
  }

  return (
    <Section>
      <H2 className="mb-10">留言板</H2>
      <div className="relative">
        <div className="absolute w-full -top-4 flex justify-center z-20">
          <div className="rounded-full bg-purple-500 h-8 px-4 py-2 text-lg leading-4 tracking-wider">
            {disabled ? (
              <FontAwesomeIcon
                className="animate-spin h-4 mx-2 inline"
                icon={faSync}
              />
            ) : (
              '🎉 清大天文50週年生日快樂 🎂'
            )}
          </div>
        </div>
        <div className="relative bg-gray-600 w-full h-116 sm:h-132 md:h-148 lg:h-164 xl:h-180 2xl:h-200 rounded-xl overflow-y-scroll">
          <div className="absolute left-0 bottom-24 w-full max-h-92 sm:max-h-108 md:max-h-124 lg:max-h-140 xl:max-h-156 2xl:max-h-176 px-2 pb-3 pt-6 lg:p-4 overflow-x-hidden overflow-y-scroll">
            <div
              className={`flex flex-col gap-4 transition-opacity duration-700 delay-300 ${
                disabled ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {messageGroups.map((messageGroup, index) => (
                <MessageGroup key={`messageGroup-${index}`} {...messageGroup} />
              ))}
            </div>
          </div>
          <div className="absolute left-0 bottom-0 w-full h-24 border-t-2 border-gray-500 px-2 md:px-4 py-2">
            <div className="flex gap-1 h-full">
              <div className="flex w-12 md:w-16 h-full">
                <div
                  className={`relative self-center w-12 md:w-16 h-12 md:h-16 rounded-full bg-center bg-cover ${
                    disabled ? 'cursor-not-allowed' : 'cursor-pointer'
                  }`}
                  style={{
                    backgroundImage: `url('/img/profile/${profile}@4x.png')`,
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
                <div className="w-3/4 sm:w-1/2 h-9 bg-white rounded-full px-3.5 overflow-hidden">
                  <input
                    type="text"
                    className="form-input w-full h-full px-0 rounded placeholder-gray-400 text-black tracking-wider border-none outline-none focus:ring-0 focus:ring-transparent"
                    name="nickname"
                    placeholder="名字/暱稱"
                    disabled={disabled}
                    autoComplete="off"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                  />
                </div>
                <div className="relative flex justify-between gap-1 w-full h-9 bg-white rounded-full pl-3.5 pr-0.5 overflow-hidden">
                  <div
                    className="w-full overflow-y-scroll"
                    style={{ marginTop: '0.4rem' }}
                  >
                    <textarea
                      className="form-textarea w-full h-full p-0 rounded placeholder-gray-400 text-black tracking-wider border-none outline-none focus:ring-0 focus:ring-transparent"
                      name="message"
                      autoFocus={true}
                      placeholder="輸入訊息"
                      disabled={disabled}
                      autoComplete="off"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={(e) => onMessageKeyDown(e)}
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
                      onClick={sendMessage}
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
  const { data, isFetched: isChatsFeteched, refetch } = useChats()

  useEffect(() => {
    const chatIds = getChatIds()
    const generateMessageGroup = (chat: IChat): TMessageGroup => {
      const messageGroup = {
        id: chat.id,
        name: chat.name,
        profileUrl: profileMap[chat.profile],
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

    if (isChatsFeteched) {
      const messages: TMessageGroup[] = []
      let prevMessageGroup: TMessageGroup
      data.chats.forEach((chat, index) => {
        if (index == 0) {
          prevMessageGroup = generateMessageGroup(chat)
          return
        }

        if (
          dayjs(chat.sentAt).diff(dayjs(prevMessageGroup.sentAt)) <
            5 * 60 * 1000 &&
          ((chatIds.includes(chat.id) &&
            chatIds.includes(prevMessageGroup.id)) ||
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

          if (index == data.chats.length - 1) {
            messages.push(prevMessageGroup)
          }
          return
        }

        if (index == data.chats.length - 1) {
          messages.push(prevMessageGroup)
        }
      })

      setMessageGroups(messages)
    }
  }, [isChatsFeteched, data])

  return (
    <Layout title="留言板">
      <ChatSection
        disabled={!isChatsFeteched}
        messageGroups={messageGroups}
        refetchChats={refetch}
      />
    </Layout>
  )
}
