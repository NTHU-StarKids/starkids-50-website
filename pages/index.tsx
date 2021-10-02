import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'
import Slider from 'react-slick'

import { H2, H3 } from '@/components/Headings'
import Section from '@/components/Section'
import Layout from '@/components/Layout'
import P from '@/components/Paragraph'
import { useState } from 'react'

const AnniversarySection = (): JSX.Element => {
  return (
    <Section>
      <h1 className="font-semibold tracking-widest text-3xl mb-2">
        清大天文社
      </h1>
      <h1 className="font-semibold tracking-widest text-5xl">50週年</h1>
      <div className="flex justify-center">
        <div
          className="mt-4 w-48 h-2.5"
          style={{ backgroundColor: '#2d2d30', borderRadius: '50%' }}
        ></div>
      </div>
    </Section>
  )
}

const CarouselSection = (): JSX.Element => {
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 6000,
    className: 'center',
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: '16%',
    slidesToShow: 1,
    speed: 500,
  }

  return (
    <Section className="pt-6 pb-4">
      <Slider {...sliderSettings}>
        <div className="w-2/3 outline-none">
          <div
            className="relative bg-center bg-cover h-80 mx-1.5 text-black"
            style={{ backgroundImage: "url('https://imgur.com/rzVcfp4.jpg')" }}
          >
            <div className="absolute bottom-0 w-full px-6 pb-10 py-4 bg-gray-900 bg-opacity-40 text-white">
              <H3 className="mb-1 truncate">聖誕樹星雲</H3>
              <P className="truncate">清大天文社</P>
            </div>
          </div>
        </div>
        <div className="w-2/3 outline-none">
          <div
            className="relative bg-center bg-cover h-80 mx-1.5 text-black"
            style={{ backgroundImage: "url('https://imgur.com/daiczNk.jpg')" }}
          >
            <div className="absolute bottom-0 w-full px-6 pb-10 py-4 bg-gray-900 bg-opacity-40 text-white">
              <H3 className="mb-1 truncate">玫瑰星雲</H3>
              <P className="truncate">王立宇</P>
            </div>
          </div>
        </div>
        <div className="w-2/3 outline-none">
          <div
            className="relative bg-center bg-cover h-80 mx-1.5 text-black"
            style={{ backgroundImage: "url('https://imgur.com/wTWsNlJ.jpg')" }}
          >
            <div className="absolute bottom-0 w-full px-6 pb-10 py-4 bg-gray-900 bg-opacity-40 text-white">
              <H3 className="mb-1 truncate">北美洲星雲</H3>
              <P className="truncate">吳家頡、王立宇</P>
            </div>
          </div>
        </div>
        <div className="w-2/3 outline-none">
          <div
            className="relative bg-center bg-cover h-80 mx-1.5 text-black"
            style={{ backgroundImage: "url('https://imgur.com/zAVoLcR.jpg')" }}
          >
            <div className="absolute bottom-0 w-full px-6 pb-10 py-4 bg-gray-900 bg-opacity-40 text-white">
              <H3 className="mb-1 truncate">歐米茄星雲</H3>
              <P className="truncate">王立宇</P>
            </div>
          </div>
        </div>
        <div className="w-2/3 outline-none">
          <div
            className="relative bg-center bg-cover h-80 mx-1.5 text-black"
            style={{ backgroundImage: "url('https://imgur.com/IwetuAv.jpg')" }}
          >
            <div className="absolute bottom-0 w-full px-6 pb-10 py-4 bg-gray-900 bg-opacity-40 text-white">
              <H3 className="mb-1 truncate">環狀星雲</H3>
              <P className="truncate">張瓊尹</P>
            </div>
          </div>
        </div>
      </Slider>
    </Section>
  )
}

const AboutUsSection = (): JSX.Element => {
  const [showForm, setShowForm] = useState<boolean>(false)
  return (
    <Section color="purple-100">
      <H2>關於我們</H2>
      <P className="mb-4">
        方便需要看別人。間的日常禮於個小，要多願望難人婚交往自己可能。
      </P>
      <P className="mb-4">
        那笑我我對重大人，同一認親卡一個完了不覺得，是時知道自都是我，能有會有，的人都什麼以一點點沒看過一件，得很得不村民帥哥做的那麼。況帽發生想不覺得，想：過看來是一是無炭治郎一下這不小心？
      </P>
      <P className="mb-4">
        很討厭好看一般的可能不⋯給對方：天使沒關開很認真，了我跟我一方好一點的開始太棒⋯我不會可以。
      </P>
      <P className="mb-8">
        認為道為什邊不安好好笑是要都不用，這些台灣一也是我眼神。
      </P>

      <div className="flex justify-center">
        <div
          className="flex items-center h-12 pl-2 pr-4 py-2 border-2 border-purple-500 rounded-lg cursor-pointer select-none pulse-button"
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
            國立清華大學 名人堂
            <FontAwesomeIcon
              className="w-4 inline mb-1.5 ml-2 text-purple-500"
              icon={faMapMarkerAlt}
            />
          </H3>
          <H3 className="mb-8">2021年11月27日 下午</H3>
          <P className="mb-4">
            安排社友短講、文物展覽、攝影作品、紀念品販售、社窩參觀、茶點。
            <br></br>
            （以上規劃將視疫情波動調整）
          </P>

          <div className="flex justify-center mt-12">
            <div className="w-72">
              <form>
                <input
                  type="text"
                  name="name"
                  className="w-full my-2 px-4 py-2 font-light tracking-wide ring-offset-2 border-2 border-purple-500 rounded text-black focus:outline-none focus:ring-2 ring-offset-2 ring-purple-500 ring-opacity-60"
                  placeholder="姓名"
                />

                <input
                  type="text"
                  name="department"
                  className="w-full my-2 px-4 py-2 font-light tracking-wide ring-offset-2 border-2 border-purple-500 rounded text-black focus:outline-none focus:ring-2 ring-offset-2 ring-purple-500 ring-opacity-60"
                  placeholder="系級（請填寫校系全名）"
                />

                <input
                  type="email"
                  name="email"
                  className="w-full my-2 px-4 py-2 font-light tracking-wide ring-offset-2 border-2 border-purple-500 rounded text-black focus:outline-none focus:ring-2 ring-offset-2 ring-purple-500 ring-opacity-60"
                  placeholder="電子信箱"
                />

                <P className="mt-4 my-2">是否攜帶家庭成員？</P>

                <div className="my-2">
                  <div className="flex items-center my-2">
                    <input
                      type="radio"
                      name="member"
                      className="form-radio p-2 bg-white border-2 border-purple-500 checked:bg-purple-500 checked:bg-none focus:ring-0 focus:ring-transparent"
                    />
                    <P className="mx-2">是，</P>
                    <input
                      type="text"
                      name="memberAge"
                      className="w-full my-2 px-4 py-2 font-light tracking-wide ring-offset-2 border-2 border-purple-500 rounded text-black focus:outline-none focus:ring-2 ring-offset-2 ring-purple-500 ring-opacity-60"
                      placeholder="成員年齡"
                    />
                  </div>
                  <div className="flex items-center my-2">
                    <input
                      type="radio"
                      name="member"
                      className="form-radio p-2 bg-white border-2 border-purple-500 checked:bg-purple-500 checked:bg-none focus:ring-0 focus:ring-transparent"
                    />
                    <P className="mx-2">否</P>
                  </div>
                </div>

                <div className="flex justify-center mt-12">
                  <div
                    className="px-3 py-2 w-28 border-2 border-purple-500 bg-purple-500 text-white rounded-lg cursor-pointer select-none tracking-wider"
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
  return (
    <Layout title="首頁">
      <AnniversarySection />
      <CarouselSection />
      <AboutUsSection />
    </Layout>
  )
}
