import Section from '@/components/Section'
import Layout from '@/components/Layout'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
      <TestSection />
      <SignUpFormSection />
    </Layout>
  )
}
