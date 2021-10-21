import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'

import CarouselSection from '@/components/CarouselSection'
import Container from '@/components/Container'
import { H2, H3 } from '@/components/Headings'
import Section from '@/components/Section'
import Layout from '@/components/Layout'
import P from '@/components/Paragraph'
import { getPostFirstParagraph, getRecommendedHistoryPosts } from '@/utils'

const AnniversarySection = (): JSX.Element => {
  return (
    <Section className="cursor-default select-none">
      <h1
        className="font-semibold tracking-widest text-3xl mb-3"
        style={{ fontFamily: 'GenYoMin' }}
      >
        清大天文社
      </h1>
      <h1
        className="font-semibold tracking-widest text-5xl"
        style={{ fontFamily: 'GenYoMin' }}
      >
        50週年
      </h1>
      <div className="flex justify-center">
        <div
          className="mt-4 w-48 h-2.5"
          style={{ backgroundColor: '#2d2d30', borderRadius: '50%' }}
        ></div>
      </div>
    </Section>
  )
}

const AboutUsSection = (): JSX.Element => {
  const [showForm, setShowForm] = useState<boolean>(false)
  return (
    <Section color="purple-100">
      <Container>
        <H2>關於我們</H2>
        <P className="mb-4">
          動手做　要有中國的科學自信！<br></br>用腦想　培育蒼穹的浩瀚心胸！
        </P>
        <P className="mb-8">
          歲月如白駒過隙，倏然即逝，今年終於來到了我們清大天文社創立的50周年，我們將於臺灣時間11/27（六）擴大舉辦50周年社慶，並與美國連線同步直播，在此敬邀各位海內外的社友們回來共襄盛舉，一同歡慶這值得紀念的一刻。
        </P>
      </Container>

      <div className="flex justify-center">
        <div
          className="flex items-center h-12 pl-2 pr-4 py-2 border-2 border-purple-600 rounded-lg cursor-pointer select-none pulse-button"
          onClick={() => setShowForm(!showForm)}
        >
          <p className="w-24 tracking-wider max-h-full">社慶報名</p>
          <FontAwesomeIcon
            className={`max-h-full w-3 transform transition-transform duration-500 ${
              showForm ? `rotate-90` : ''
            }`}
            icon={faChevronRight}
            fixedWidth
          />
        </div>
      </div>

      <div
        className={`transition-max-height duration-500 overflow-hidden ${
          showForm ? 'max-h-2x-screen' : 'max-h-0 delay-400'
        }`}
      >
        <div
          className={`transition duration-500 ease-in-out mt-16 ${
            showForm ? 'opacity-100' : 'opacity-0 delay-500'
          }`}
        >
          <H3 className="mb-2">
            國立清華大學 物理館1樓中庭
            <FontAwesomeIcon
              className="w-4 inline mb-1.5 ml-2 text-purple-600"
              icon={faMapMarkerAlt}
            />
          </H3>
          <H3 className="mb-8">2021年11月27日 (六) 13:30~17:00</H3>
          <P className="mb-4">
            安排社友短講、文物展覽、攝影作品、紀念品販售、社窩參觀、茶點。
            <br></br>
            （以上規劃將視疫情波動調整）
          </P>

          <div className="flex justify-center mt-12">
            <div className="w-72">
              <form autoComplete="off">
                <input
                  type="text"
                  name="name"
                  className="w-full my-2 px-4 py-2 font-light tracking-wide ring-offset-2 border-2 border-purple-600 rounded text-black focus:outline-none focus:ring-2 ring-offset-2 ring-purple-600 ring-opacity-60"
                  placeholder="姓名"
                  autoComplete="off"
                />

                <input
                  type="text"
                  name="department"
                  className="w-full my-2 px-4 py-2 font-light tracking-wide ring-offset-2 border-2 border-purple-600 rounded text-black focus:outline-none focus:ring-2 ring-offset-2 ring-purple-600 ring-opacity-60"
                  placeholder="系級（xx系xx級）"
                  autoComplete="off"
                />

                <input
                  type="text"
                  name="identity"
                  className="w-full my-2 px-4 py-2 font-light tracking-wide ring-offset-2 border-2 border-purple-600 rounded text-black focus:outline-none focus:ring-2 ring-offset-2 ring-purple-600 ring-opacity-60"
                  placeholder="社內身份"
                  autoComplete="off"
                />

                <input
                  type="email"
                  name="email"
                  className="w-full my-2 px-4 py-2 font-light tracking-wide ring-offset-2 border-2 border-purple-600 rounded text-black focus:outline-none focus:ring-2 ring-offset-2 ring-purple-600 ring-opacity-60"
                  placeholder="電子信箱"
                  autoComplete="off"
                />

                <input
                  type="text"
                  name="phone"
                  className="w-full my-2 px-4 py-2 font-light tracking-wide ring-offset-2 border-2 border-purple-600 rounded text-black focus:outline-none focus:ring-2 ring-offset-2 ring-purple-600 ring-opacity-60"
                  placeholder="聯絡電話"
                  autoComplete="off"
                />

                <P className="mt-4 my-2">社慶當天是否到場？</P>

                <div className="my-2">
                  <div className="flex items-center my-2">
                    <input
                      type="radio"
                      name="attendence"
                      className="form-radio p-2 bg-white border-2 border-purple-600 focus:ring-0 focus:ring-transparent"
                    />
                    <P className="mx-2">參加（臺灣）</P>
                  </div>
                  <div className="flex items-center my-2">
                    <input
                      type="radio"
                      name="attendence"
                      className="form-radio p-2 bg-white border-2 border-purple-600 focus:ring-0 focus:ring-transparent"
                    />
                    <P className="mx-2">參加（美國）</P>
                  </div>
                  <div className="flex items-center my-2">
                    <input
                      type="radio"
                      name="attendence"
                      className="form-radio p-2 bg-white border-2 border-purple-600 focus:ring-0 focus:ring-transparent"
                    />
                    <P className="mx-2">不克前來</P>
                  </div>
                </div>

                <div className="flex justify-center mt-12">
                  <div
                    className="px-3 py-2 w-28 border-2 border-purple-600 bg-purple-600 text-white rounded-lg cursor-pointer select-none tracking-wider"
                    onClick={() => console.log('submit form')}
                  >
                    確認送出
                  </div>
                </div>
              </form>
            </div>
          </div>

          <P className="mt-6 text-gray-600">
            詳細辦理規劃將於11月初以電子郵件寄發。<br></br>
            任何問題請聯絡天文社信箱：nthu.astro@gmail.com
          </P>
        </div>
      </div>
    </Section>
  )
}

export default function HomePage(): JSX.Element {
  const recommendedPosts = getRecommendedHistoryPosts()
  const slides = recommendedPosts.map((post) => {
    const slide: TSlide = {
      imageUrl: post.coverUrl,
      title: post.title,
      description: getPostFirstParagraph(post),
      slug: post.slug,
    }
    return slide
  })

  return (
    <Layout title="首頁">
      <AnniversarySection />
      <CarouselSection slides={slides} link="history" />
      <AboutUsSection />
    </Layout>
  )
}
