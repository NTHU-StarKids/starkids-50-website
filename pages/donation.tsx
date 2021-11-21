import { Fragment, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { Dialog, Transition } from '@headlessui/react'

import Container from '@/components/Container'
import { H2, H3 } from '@/components/Headings'
import Section from '@/components/Section'
import SplitNewLine from '@/components/SplitNewLine'
import Layout from '@/components/Layout'
import P from '@/components/Paragraph'

type TProps = {
  onClickGood: (good: TGoods) => void
  good: TGoods
}

type TListProps = {
  goods: TGoods[]
}

const goods: TGoods[] = [
  {
    imageUrl: '/img/goods-1.jpg',
    imageDetailUrl: '/img/goods-2.jpg',
    title: '紀念外套',
    name: '紀念外套（750 元／件）',
    description:
      '正面為 Astro 字樣（刺繡），背面則為 NTHU 50 AC 及星球圖案（印刷），底色為深灰色，材質為 50% 的棉與 50% 的聚酯纖維（微鋪棉）。\n※圖片僅為示意圖，不代表實際顏色。',
  },
  {
    imageUrl: '/img/goods-5.jpg',
    imageDetailUrl: '/img/goods-6.jpg',
    title: '50 週年紀念社刊',
    name: '50 週年紀念社刊（250 元／本）',
    description:
      '內容收錄了歷屆許多社友們的投稿及社團現況，帶我們一探天文社半世紀以來的軌跡！',
  },
  {
    imageUrl: '/img/goods-3.jpg',
    imageDetailUrl: '/img/goods-7.jpg',
    title: '紀念酒杯組',
    name: '紀念酒杯組（350 元／組）',
    description:
      'shot 杯，有天文的注音及天文社三字。三入一組，限量 150 組\n※紀念酒杯組因圖案為貼紙，不建議以熱水大力搓洗',
  },
  {
    imageUrl: '/img/goods-4.jpg',
    imageDetailUrl: '/img/goods-4.jpg',
    title: '吊飾鑰匙圈',
    name: '吊飾鑰匙圈（100元／個）',
    description:
      '立體吊飾，為金屬材質，大小約預計為 40 x 40 x 2.5mm\n※因製作不及，預計於 12 月底陸續寄出',
  },
]

const DonationSection = (): JSX.Element => {
  return (
    <Section>
      <H2>贊助辦法</H2>
      <Container>
        <P className="mb-4">
          為了能夠在星空中看得更深更遠，我們總不畏風寒的登上高山，借助著望遠鏡和相機，一次又一次穿越令人屏息的黑暗。因此我們希望能有更好的儀器與基本設備以讓我們更接近繁星。
        </P>
        <P className="mb-4">
          下方列出的是我們預期即將採購的項目，倘若各位學長姐們有意願協助我們，則歡迎學長姐們認購這些設備，認購不代表全額負擔，每位僅需協助一小部分的錢，讓我們得以積少成多達成目標，如有意認購則請勾選下方設備。
        </P>
        <P className="mb-8">
          所有認購者皆會刊登於本次社慶網頁，認購後無論不足或有剩餘將持續用於天文社儀器之維修保養，歡迎各位學長姐為未來天文社的進步給予支持。若是認購額及捐款額達
          3000
          元整將贈送一幅我們自製，從拍攝到設計皆為社員操刀的梅西爾天體海報（僅限認購與捐款者可獲得）。
        </P>
        <img
          src="/img/messier-catalog.jpg"
          className="mb-8 rounded-xl mx-auto w-full sm:w-auto sm:max-w-screen-xs md:max-w-screen-sm sm:max-h-112"
          alt="清大天文社梅西爾海報"
        />
      </Container>

      <div className="flex justify-center">
        <a
          href="https://forms.gle/cXPhuc5uu6nt77n98"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center h-12 pl-2 pr-4 py-2 bg-purple-600 border-2 border-purple-600 rounded-lg cursor-pointer select-none">
            <p className="w-24 tracking-wider max-h-full">認購表單</p>
            <FontAwesomeIcon
              className="max-h-full w-4"
              icon={faExternalLinkAlt}
              fixedWidth
            />
          </div>
        </a>
      </div>
    </Section>
  )
}

const Goods = ({ good, onClickGood }: TProps): JSX.Element => {
  return (
    <div
      className="flex flex-col bg-white text-purple-600 border-2 border-purple-600 rounded-2xl h-96 w-full overflow-hidden cursor-pointer"
      onClick={() => onClickGood(good)}
    >
      <div
        className="w-full bg-center bg-cover h-60"
        style={{ backgroundImage: `url('${good.imageUrl}')` }}
      ></div>
      <div className="w-full px-4 lg:px-8 py-4 text-left select-none">
        <H3 className="mb-1 text-center truncate">{good.title}</H3>
        <p
          className="text-center font-light tracking-wider overflow-hidden w-full h-20 leading-7"
          style={{ textOverflow: 'ellipsis' }}
        >
          {good.description}
        </p>
      </div>
    </div>
  )
}

const GoodsSection = ({ goods }: TListProps): JSX.Element => {
  const initGood: TGoods = {
    imageUrl: '',
    imageDetailUrl: '',
    name: '',
    title: '',
    description: '',
  }
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [good, setGood] = useState<TGoods>(initGood)
  const onClickGood = (good: TGoods) => {
    setGood(good)
    setIsOpen(true)
    console.log('onClickGood', good.description)
  }

  return (
    <>
      <Section className="pt-8">
        <H2>紀念品</H2>
        <Container>
          <P className="mb-4">
            為了紀念這難得的 50
            週年，我們特別設計了以下數個紀念品，將於社慶當天在活動現場進行販售，也歡迎各位社友們事先訂購～
          </P>
          <P className="mb-4">
            我們也提供郵寄到府的方案，無論社慶當天是否有空到場皆可訂購，國內國外皆可～
            <br></br>我們將於社慶結束後陸續寄出
          </P>
          <P className="mb-8">
            ※由於成品製作中，以下圖片皆為示意圖，可能與成品有細微差異，還請見諒
          </P>
        </Container>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:px-16 outline-none">
          {goods.map((good, index) => (
            <Goods
              key={`good-${index}`}
              good={good}
              onClickGood={onClickGood}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <a
            href="https://forms.gle/5YM8UP3HQ8YdbN916"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center h-12 pl-2 pr-4 py-2 bg-purple-600 border-2 border-purple-600 rounded-lg cursor-pointer select-none">
              <p className="w-24 tracking-wider max-h-full">預購表單</p>
              <FontAwesomeIcon
                className="max-h-full w-4"
                icon={faExternalLinkAlt}
                fixedWidth
              />
            </div>
          </a>
        </div>
      </Section>
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed z-50 inset-0 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-90"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-90"
            >
              <div
                className={`relative bg-gray-700 text-white rounded-2xl w-5/6 mx-auto my-20 px-4 pt-4 ${
                  good.name ? 'pb-12' : ''
                } tracking-wider`}
              >
                <button
                  className="hamburger-btn open float-right outline-none focus:outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>

                <p className="text-xl text-center mb-6 px-12 tracking-wider cursor-default select-none">
                  {good.name}
                </p>
                <div className="w-full sm:w-5/6 md:w-4/5 lg:w-2/3 mx-auto">
                  <img
                    src={good.imageDetailUrl}
                    alt={good.name}
                    className="mb-4 mx-auto rounded-2xl"
                  />
                  <p className="text-lg font-light text-center mb-4 md:px-12">
                    <SplitNewLine text={good.description} />
                  </p>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default function DonationPage(): JSX.Element {
  const metadata: TMetadata = {
    description:
      '為了能夠在星空中看得更深更遠，我們總不畏風寒的登上高山，借助著望遠鏡和相機，一次又一次穿越令人屏息的黑暗。因此我們希望能有更好的儀器與基本設備以讓我們更接近繁星。',
  }

  return (
    <Layout title="贊助我們" metadata={metadata}>
      <DonationSection />
      <GoodsSection goods={goods} />
    </Layout>
  )
}
