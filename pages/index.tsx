import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Slider from 'react-slick'

import Section from '@/components/Section'
import Layout from '@/components/Layout'
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
    className: 'center',
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: '50px',
    slidesToShow: 1,
    speed: 500,
  }

  return (
    <Section>
      <Slider {...sliderSettings}>
        <div>
          <div className="bg-white h-72 mx-1.5 text-black">
            <h3>1</h3>
          </div>
        </div>
        <div>
          <div className="bg-white h-72 mx-1.5 text-black">
            <h3>2</h3>
          </div>
        </div>
        <div>
          <div className="bg-white h-72 mx-1.5 text-black">
            <h3>3</h3>
          </div>
        </div>
        <div>
          <div className="bg-white h-72 mx-1.5 text-black">
            <h3>4</h3>
          </div>
        </div>
        <div>
          <div className="bg-white h-72 mx-1.5 text-black">
            <h3>5</h3>
          </div>
        </div>
        <div>
          <div className="bg-white h-72 mx-1.5 text-black">
            <h3>6</h3>
          </div>
        </div>
      </Slider>
    </Section>
  )
}

const AboutUsSection = (): JSX.Element => {
  const [showForm, setShowForm] = useState<boolean>(false)
  return (
    <Section color="lightpurple">
      <h2 className="text-2xl tracking-widest mb-8">關於我們</h2>
      <p className="mb-4 font-light">
        方便需要看別人。間的日常禮於個小，要多願望難人婚交往自己可能。
      </p>
      <p className="mb-4 font-light">
        那笑我我對重大人，同一認親卡一個完了不覺得，是時知道自都是我，能有會有，的人都什麼以一點點沒看過一件，得很得不村民帥哥做的那麼。況帽發生想不覺得，想：過看來是一是無炭治郎一下這不小心？
      </p>
      <p className="mb-4 font-light">
        很討厭好看一般的可能不⋯給對方：天使沒關開很認真，了我跟我一方好一點的開始太棒⋯我不會可以。
      </p>
      <p className="mb-8 font-light">
        認為道為什邊不安好好笑是要都不用，這些台灣一也是我眼神。
      </p>

      <div className="flex justify-center">
        <div
          className="flex px-3 py-2 border-2 border-purple rounded-lg cursor-pointer select-none"
          onClick={() => setShowForm(!showForm)}
        >
          <span className="w-20 tracking-wider">社慶報名</span>
          <FontAwesomeIcon
            className={`ml-1 w-3 transform transition-transform duration-200 ${
              showForm ? `rotate-90` : ''
            }`}
            icon={faChevronRight}
            fixedWidth
          />
        </div>
      </div>
    </Section>
  )
}

const TestSection = (): JSX.Element => (
  <Section>
    <div className="flex flex-col items-center justify-center">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Coming Soon ......</h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md text-blue-600">
            pages/index.js
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  </Section>
)

const SignUpFormSection = (): JSX.Element => {
  return <Section color="white"></Section>
}

export default function HomePage(): JSX.Element {
  return (
    <Layout title="首頁">
      <AnniversarySection />
      <CarouselSection />
      <AboutUsSection />
      <TestSection />
      <SignUpFormSection />
    </Layout>
  )
}
