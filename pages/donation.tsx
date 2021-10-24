import { H2, H3 } from '@/components/Headings'
import Section from '@/components/Section'
import Layout from '@/components/Layout'
import P from '@/components/Paragraph'

type TProps = {
  good: TGoods
}

type TListProps = {
  goods: TGoods[]
}

const sampleGoods = [
  {
    imageUrl: '/img/sample-good-1@4x.png',
    name: '紀念外套',
    description:
      '正面為Astro字樣（刺繡），背面則為NTHU 50 AC及星球圖案（印刷）',
  },
  {
    imageUrl: '/img/sample-good-2@4x.png',
    name: '紀念酒杯組',
    description: '三入一組，限量150組',
  },
  {
    imageUrl: '/img/sample-good-3@4x.png',
    name: '50週年紀念社刊',
    description:
      '內容收錄了歷屆許多社友們的投稿及社團現況，帶我們一探天文社半世紀以來的軌跡！',
  },
]

const DonationSection = (): JSX.Element => {
  return (
    <Section>
      <H2>贊助辦法</H2>
      <P className="mb-4">
        為了能夠在星空中看得更深更遠，我們總不畏風寒的登上高山，借助著望遠鏡和相機，一次又一次穿越令人屏息的黑暗。因此我們希望能有更好的儀器與基本設備以讓我們更接近繁星。
      </P>
      <P className="mb-4">
        下方列出的是我們預期即將採購的項目，倘若各位學長姐們有意願協助我們，則歡迎學長姐們認購這些設備，認購不代表全額負擔，每位僅需協助一小部分的錢，讓我們得以積少成多達成目標，如有意認購則請勾選下方設備。
      </P>
      <P className="mb-8">
        所有認購者皆會刊登於本次社慶網頁，認購後無論不足或有剩餘將持續用於天文社儀器之維修保養，歡迎各位學長姐為未來天文社的進步給予支持。若是認購額及捐款額達3000元整將贈送一幅我們自製，從拍攝到設計皆為社員操刀的梅西爾天體海報（僅限認購與捐款者可獲得）。
      </P>
    </Section>
  )
}

const Goods = ({ good }: TProps): JSX.Element => {
  return (
    <div className="flex flex-col bg-white text-purple-600 border-2 border-purple-600 rounded-2xl h-96 w-full overflow-hidden transition-colors duration-200">
      <div
        className="w-full bg-center bg-cover h-60"
        style={{ backgroundImage: `url('${good.imageUrl}')` }}
      ></div>
      <div className="w-full px-4 lg:px-8 py-4 text-left cursor-default select-none">
        <H3 className="mb-1 text-center truncate">{good.name}</H3>
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
  return (
    <Section className="pt-0">
      <H2>回饋商品</H2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:px-16 outline-none">
        {goods.map((good, index) => (
          <Goods key={`good-${index}`} good={good} />
        ))}
      </div>
    </Section>
  )
}

export default function DonationPage(): JSX.Element {
  return (
    <Layout title="贊助我們">
      <DonationSection />
      <GoodsSection goods={sampleGoods} />
    </Layout>
  )
}
