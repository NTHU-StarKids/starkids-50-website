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
    name: '商品名稱商品名稱',
    description: '商品說明商品說明商品說明商品說明商品說明商品說明商品說明',
  },
  {
    imageUrl: '/img/sample-good-2@4x.png',
    name: '商品名稱商品名稱',
    description: '商品說明商品說明商品說明商品說明商品說明商品說明商品說明',
  },
  {
    imageUrl: '/img/sample-good-3@4x.png',
    name: '商品名稱商品名稱',
    description: '商品說明商品說明商品說明商品說明商品說明商品說明商品說明',
  },
]

const DonationSection = (): JSX.Element => {
  return (
    <Section>
      <H2>贊助辦法</H2>
      <P className="mb-4">
        漂亮不是這裡也不知：所以也是不，一下作者努基真的超，太次的就覺得不到，希望真的好貓樣的，我吃認不小心也。個開玩笑⋯很好笑是什麼換了也好由。
      </P>
      <P className="mb-8">
        手只會二次元：我看到想說好要是我們⋯的關多就很係會不會，的世多好望的貝辦法清楚的大大⋯禮不過會很以於自己⋯反而看起色的設計。出來麼東西有這，推特很大造成家裡悲傷⋯紅色，的人生不是在，你知道愛的研可以⋯超級不一樣不小後明顯行留言。
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
      <div className="w-full px-4 lg:px-8 py-4 text-left">
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
