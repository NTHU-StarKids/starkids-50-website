import { useEffect, useState } from 'react'
import { Range, getTrackBackground } from 'react-range'

import { CABINETS } from '@/constants'
// import { diaries } from '@/constants/diaries'
import Container from '@/components/Container'
import posts from '@/constants/historyPosts'
import { H2, H3 } from '@/components/Headings'
import Section from '@/components/Section'
import Layout from '@/components/Layout'
import PostList from '@/components/post/PostList'
import P from '@/components/Paragraph'

const OriginSection = (): JSX.Element => {
  return (
    <Section>
      <H2>緣起</H2>
      <Container>
        <P className="mb-4">
          西元 1971 年 8
          月初，丘宏義教授帶領鄧延璋、沈采蘋、陳昱寧、徐魁森等學長姐籌備磨製 16
          吋卡式望遠鏡，至同年 11 月底 16
          吋鏡全部架設調整完畢，為當時全國口徑最大之望遠鏡。同月底 29 日晚上 7
          點於清華大學物理館舉行天文社成立大會，天文社正式宣告成立，並由物理 74
          級鄧延璋學長出任第一屆社長。
        </P>
        <P className="mb-4">
          走過五十個年頭的天文社，曾經或現任社員已累積數百數千人之多，不少學長姊仍然致力於天文相關領域，如沈采蘋學姊、秦一男學長、金升光學長、蘇裕農學長等等在天文界皆享有盛名，而現任社團指導老師
          - 賴詩萍學姊，以及前任指導老師 -
          張祥光學長，不僅是現任清大物理系教授，也分別是本社第 21 屆及第 14
          屆社長。
        </P>
        <P className="mb-4">
          社窩（社團辦公室）位置經過不斷的搬遷，從最早的舊物理館頂樓天文台，1990
          年舊物理館拆除，舊天文台夷為平地，暫遷至衛生中心二樓（即保健室樓上），後來經歷過學生活動中心
          510、507、02，到 2003 年遷進目前所在的活中 318
          社窩，經過學長姊及社員們的改造和維護，溫暖且生活機能充足的活中 318
          已成為近幾年社員的重要聚集地及回憶。
        </P>
        <P className="mb-8">
          如今，五十年的經驗傳承、溫暖的社窩、數架社員一同籌措資金的主力望遠鏡、完整的章程組織架構，以及滿櫃子的觀測資料和書籍，全都記錄著我們一同寫下的歷史篇章。期許年復一年，這份追逐星光的熱情、分享璀璨夜空的感動，能持續不斷壯大散播出去！
        </P>
      </Container>
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
        <div className="bg-purple-50 w-full md:w-3/5 h-112 lg:h-120 xl:h-136 2xl:h-144 px-0.5 py-2 rounded-xl overflow-hidden">
          <div className="bg-purple-50 w-full h-full rounded-xl px-6 md:px-10 lg:px-14 py-6 overflow-x-hidden overflow-y-scroll">
            <H3 className="text-purple-600 cursor-default select-none">
              {cabinet.name}
              <span className="ml-2 tracking-wider">
                (
                {cabinet.age
                  ? `${foundYear + cabinet.age - 1} ~ ${
                      foundYear + cabinet.age
                    }`
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
                        className={`p-2${
                          cabinet.age != 0 ? '' : ' text-right'
                        }`}
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
                className="absolute -left-3 tracking-wider text-gray-300 text-sm cursor-default select-none"
                style={{ top: '-2.3rem', paddingLeft: '0.1rem' }}
              >
                元老
              </div>
              <div
                className="absolute -right-2 tracking-wider text-gray-300 cursor-default select-none"
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

const DiarySection = (): JSX.Element => {
  return (
    <Section>
      <H2>歷年社誌</H2>
      <Container>
        <P className="mb-4">
          1980
          年起，社誌成為社員們駐足於社窩時，讓幹部、社員撰寫意見或抒發心情的紙本平台，四十餘年的時間，累積百本的社誌數量，默默記錄著這些年社團的種種稗官野史。2017
          年底新購買的掃描機加入，催生當時社員逐步掃描社誌建檔想法的實踐，電子化後的社誌，除了能永久保存外，更能讓歷屆社員們不再受限於物理距離的限制，得以在線上倒轉回每本社誌撰寫時的青澀時光～
        </P>
        <P className="mb-4">
          ※ 社誌電子檔連結清單將於 50 年社慶日前後公布，敬請期待！<br></br>
          如有需要，也可寄信與社團幹部聯絡喔！
        </P>
      </Container>

      {/*
      <P className="mb-4 font-light">【限時開放】</P>
      <div className="flex justify-center">
        <div className="bg-purple-50 w-full md:w-3/5 h-112 lg:h-120 xl:h-136 2xl:h-144 px-0.5 py-2 rounded-xl overflow-hidden">
          <div className="bg-purple-50 w-full h-full rounded-xl px-6 md:px-10 lg:px-14 py-6 overflow-x-hidden overflow-y-scroll">
            <table className="table-fixed text-purple-600 font-light tracking-wider w-full mt-4 text-sm sm:text-base">
              <thead className="mb-2 border-purple-100 border-b">
                <tr>
                  <th className="w-1/6 font-normal pb-2">編號</th>
                  <th className="w-2/3 font-normal pb-2">期間</th>
                  <th className="w-1/6 font-normal pb-2">連結</th>
                </tr>
              </thead>

              <tbody className="text-black">
                {diaries.map((diary, index) => {
                  return (
                    <tr key={`diary-${index}`}>
                      <td className="w-1/6 py-2">{diary.sn}</td>
                      <td className="w-2/3 p-2">{diary.duration}</td>
                      <td className="w-1/6">
                        <a
                          href={`https://drive.google.com/file/d/${Buffer.from(
                            diary.url,
                            'base64'
                          )}/view`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src="/img/rounded-arrow@4x.png"
                            className="w-6 mx-auto align-middle"
                          />
                        </a>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      */}
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
  const metadata: TMetadata = {
    description:
      '西元 1971 年 8 月初，丘宏義教授帶領鄧延璋、沈采蘋、陳昱寧、徐魁森等學長姐籌備磨製 16 吋卡式望遠鏡，至同年 11 月底 16 吋鏡全部架設調整完畢，為當時全國口徑最大之望遠鏡。同月底 29 日晚上 7 點於清華大學物理館舉行天文社成立大會，天文社正式宣告成立，並由物理 74 級鄧延璋學長出任第一屆社長。',
  }

  return (
    <Layout title="社團歷史" metadata={metadata}>
      <OriginSection />
      <CabinetSection />
      <DiarySection />
      <EventsSection />
    </Layout>
  )
}
