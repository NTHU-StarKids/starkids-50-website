import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from 'react-slick'

import { H3 } from '@/components/Headings'
import Section from '@/components/Section'
import P from '@/components/Paragraph'

type TProps = {
  slides: TSlide[]
}

const CarouselSection = ({ slides }: TProps): JSX.Element => {
  const sliderSettings = {
    autoplay: false,
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
        {slides &&
          slides.map((slide, index) => {
            return (
              <div key={`slide-${index}`} className="w-2/3 outline-none">
                <div
                  className="relative bg-center bg-cover h-80 mx-1.5 text-black"
                  style={{
                    backgroundImage: `url('${slide.imageUrl}')`,
                  }}
                >
                  <div className="absolute bottom-0 w-full px-6 pb-10 py-4 bg-gray-900 bg-opacity-40 text-white">
                    <H3 className="mb-1 truncate">{slide.title}</H3>
                    <P className="truncate">{slide.description}</P>
                  </div>
                </div>
              </div>
            )
          })}
      </Slider>
    </Section>
  )
}

export default CarouselSection
