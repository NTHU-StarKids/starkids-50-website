import { H2, H3 } from '@/components/Headings'
import Section from '@/components/Section'
import Layout from '@/components/Layout'
import P from '@/components/Paragraph'

const OriginSection = (): JSX.Element => {
  return (
    <Section>
      <H2>緣起</H2>
      <P className="mb-4">
        的是這樣的男我到的話能不能，小心那個人常感謝。演的不可當然，所以來發，可能就是到還，的感覺大概是一個，給媽媽於是：是這樣也好想的遺言。記得是給後，最近式的的衣吃了我直接你們的，以不想回家我就來出現了雖，個時候他就是本時間了。
      </P>
      <P className="mb-4">可以時間。</P>
      <P className="mb-8">
        但在的不真的是了個大小，不知道了兩難以的話說聖誕老⋯覺得我一直交給，大概手遊多還沒。
      </P>
    </Section>
  )
}

const CabinetSection = (): JSX.Element => {
  return (
    <Section>
      <H2>歷屆幹部</H2>
      <div className="flex justify-center">
        <div className="bg-purple-100 w-full md:w-3/5 rounded-xl px-6 md:px-14 py-8">
          <H3 className="text-purple-500">創社元老</H3>
          <table className="text-black font-light tracking-wider w-full mt-4 text-left">
            <tbody>
              <tr>
                <td className="p-2">北極星</td>
                <td className="p-2">系級 00</td>
                <td className="p-2 text-right">職位</td>
              </tr>
              <tr>
                <td className="p-2">北極星</td>
                <td className="p-2">系級 00</td>
                <td className="p-2 text-right">職位</td>
              </tr>
              <tr>
                <td className="p-2">北極星</td>
                <td className="p-2">系級 00</td>
                <td className="p-2 text-right">職位</td>
              </tr>
              <tr>
                <td className="p-2">北極星</td>
                <td className="p-2">系級 00</td>
                <td className="p-2 text-right">職位</td>
              </tr>
              <tr>
                <td className="p-2">北極星</td>
                <td className="p-2">系級 00</td>
                <td className="p-2 text-right">職位</td>
              </tr>
              <tr>
                <td className="p-2">北極星</td>
                <td className="p-2">系級 00</td>
                <td className="p-2 text-right">職位</td>
              </tr>
              <tr>
                <td className="p-2">北極星</td>
                <td className="p-2">系級 00</td>
                <td className="p-2 text-right">職位</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  )
}

const EventsSection = (): JSX.Element => {
  return (
    <Section>
      <H2>歷史事件</H2>
    </Section>
  )
}

export default function HistoryPage(): JSX.Element {
  return (
    <Layout title="社團歷史">
      <OriginSection />
      <CabinetSection />
      <EventsSection />
    </Layout>
  )
}
