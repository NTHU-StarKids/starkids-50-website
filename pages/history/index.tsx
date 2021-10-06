import { useEffect, useState } from 'react'
import { Range, getTrackBackground } from 'react-range'

import { CABINETS } from '@/constants'
import posts from '@/constants/historyPosts'
import { H2, H3 } from '@/components/Headings'
import Section from '@/components/Section'
import Layout from '@/components/Layout'
import PostList from '@/components/PostList'
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
  const foundYear = 1971
  const defaultAge = 0
  const [age, setAge] = useState<number[]>([defaultAge])
  const [cabinet, setCabinet] = useState<TCabinet>(CABINETS[defaultAge])

  const onAgeChange = (ages: number[]) => {
    const [newAge] = ages
    sessionStorage.setItem('defaultAge', String(newAge))
    setAge([newAge])
    setNewCabinet(newAge)
  }

  const setNewCabinet = (newAge: number) => {
    const newCabinet = CABINETS.find((record) => record.age == newAge)
    if (newCabinet) {
      setCabinet(newCabinet)
    }
  }

  useEffect(() => {
    const newAge = parseInt(
      sessionStorage.getItem('defaultAge') || String(defaultAge)
    )
    setAge([newAge])
    setNewCabinet(newAge)
  }, [])

  return (
    <Section className="pt-0">
      <H2>歷屆幹部</H2>
      <div className="flex justify-center">
        <div className="bg-purple-100 w-full md:w-3/5 h-112 lg:h-120 xl:h-136 2xl:h-144 rounded-xl px-6 md:px-10 lg:px-14 py-8 overflow-scroll">
          <H3 className="text-purple-600">
            {cabinet.name}
            <span className="ml-2 tracking-wider">
              (
              {cabinet.age
                ? `${foundYear + cabinet.age - 1} ~ ${foundYear + cabinet.age}`
                : foundYear}
              )
            </span>
          </H3>
          <table className="text-black font-light tracking-wider w-full mt-4 text-left text-sm sm:text-base">
            <tbody>
              {cabinet.positions.map((people, index) => {
                return (
                  <tr key={`cabinet-${index}`}>
                    <td className="p-2 w-20 lg:w-28 xl:w-32 2xl:w-36">
                      {people.name}
                    </td>
                    <td
                      className={`p-2${cabinet.age != 0 ? '' : ' text-right'}`}
                    >
                      {people.department}
                    </td>
                    {cabinet.age != 0 ? (
                      <td className="p-2 text-right">{people.position}</td>
                    ) : null}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-16 px-8">
        <Range
          step={1}
          min={0}
          max={CABINETS.length - 1}
          values={age}
          onChange={(values) => onAgeChange(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="relative bg-gray-600 rounded"
              style={{
                ...props.style,
                height: '6px',
                width: '100%',
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: '5px',
                  width: '100%',
                  borderRadius: '4px',
                  background: getTrackBackground({
                    values: age,
                    colors: ['#6562BF', '#4D4D4D'],
                    min: 0,
                    max: CABINETS.length - 1,
                  }),
                  alignSelf: 'center',
                }}
              ></div>
              <div
                className="absolute -left-1 w-2.5 h-2.5 rounded-lg bg-purple-600"
                style={{ top: '-0.1rem' }}
              ></div>
              <div
                className="absolute -right-1 w-2.5 h-2.5 rounded-lg bg-gray-600"
                style={{ top: '-0.1rem' }}
              ></div>

              <div
                className="absolute -left-3 tracking-wider text-gray-300 text-sm"
                style={{ top: '-2.3rem', paddingLeft: '0.1rem' }}
              >
                元老
              </div>
              <div
                className="absolute -right-2 tracking-wider text-gray-300"
                style={{ top: '-2.4rem', paddingLeft: '0.1rem' }}
              >
                {CABINETS.length - 1}
              </div>
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className="w-2.5 h-5 bg-white rounded focus:outline-none"
              style={{
                ...props.style,
                zIndex: 10,
                bottom: '-0.9rem',
              }}
            >
              <div
                className="absolute -top-8 w-10 bg-purple-600 rounded-xl tracking-wider text-center"
                style={{ left: '-0.95rem', paddingLeft: '0.1rem' }}
              >
                {age[0] == 0 ? (
                  <span className="text-sm">元老</span>
                ) : (
                  `${age[0] < 10 ? '0' : ''}${age[0]}`
                )}
              </div>
            </div>
          )}
        />
      </div>
    </Section>
  )
}

const EventsSection = (): JSX.Element => {
  return (
    <Section>
      <H2>歷史事件</H2>
      <PostList posts={posts} />
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
