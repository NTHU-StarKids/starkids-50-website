import { useRouter } from 'next/router'

import Section from '@/components/Section'
import Layout from '@/components/Layout'

// const ComingSoonSection = (): JSX.Element => {
//   return (
//     <Section className="h-72">
//       <div className="mt-16 flex justify-center items-center">
//         <FontAwesomeIcon className="h-20 mr-6" icon={faHammer} />
//         <h1 className="text-5xl tracking-wider font-semibold">
//           Coming Soon...
//         </h1>
//       </div>
//     </Section>
//   )
// }

const NotFoundSection = (): JSX.Element => {
  const router = useRouter()

  return (
    <Section className="h-128 cursor-default select-none">
      <h1 className="font-semibold tracking-widest text-8xl ml-5">404</h1>
      <h2 className="font-semibold tracking-widest text-xl">Page Not Found</h2>
      <div className="flex justify-center">
        <div
          className="mt-4 w-72 h-3"
          style={{ backgroundColor: '#2d2d30', borderRadius: '50%' }}
        ></div>
      </div>

      <h2 className="font-normal tracking-widest text-xl mt-8">
        糟糕！頁面被黑洞吃掉了
      </h2>

      <div className="flex justify-center mt-12">
        <div
          className="flex items-center h-10 px-4 bg-purple-50 border border-purple-600 text-purple-600 rounded-lg tracking-wide cursor-pointer select-none"
          onClick={() => router.back()}
        >
          回上一頁
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <div
          className="flex items-center h-10 px-4 bg-purple-600 border border-purple-600 rounded-lg tracking-wide cursor-pointer select-none"
          onClick={() => router.push('/')}
        >
          返回首頁
        </div>
      </div>
    </Section>
  )
}

export default function AlbumPage(): JSX.Element {
  return (
    <Layout title="404 Page not found!!!">
      <NotFoundSection />
    </Layout>
  )
}
