// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHammer } from '@fortawesome/free-solid-svg-icons'

import { H2 } from '@/components/Headings'
import Section from '@/components/Section'
import Layout from '@/components/Layout'

const ChatSection = (): JSX.Element => {
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
        <div className="absolute left-0 bottom-0 w-full h-20 border-t-2 border-gray-500"></div>
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
