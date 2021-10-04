import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHammer } from '@fortawesome/free-solid-svg-icons'

import Section from '@/components/Section'
import Layout from '@/components/Layout'

const ComingSoonSection = (): JSX.Element => {
  return (
    <Section className="h-72">
      <div className="mt-16 flex justify-center items-center">
        <FontAwesomeIcon className="h-20 mr-6" icon={faHammer} />
        <h1 className="text-5xl tracking-wider font-semibold">
          Coming Soon...
        </h1>
      </div>
    </Section>
  )
}

export default function GalleryPage(): JSX.Element {
  return (
    <Layout title="藝廊">
      <ComingSoonSection />
    </Layout>
  )
}
