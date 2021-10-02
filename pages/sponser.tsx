import Section from '@/components/Section'
import Layout from '@/components/Layout'

const ComingSoonSection = (): JSX.Element => {
  return (
    <Section className="h-72">
      <h1 className="mt-16 text-5xl tracking-wider font-semibold">
        Coming Soon...
      </h1>
    </Section>
  )
}

export default function SponserPage(): JSX.Element {
  return (
    <Layout title="贊助我們">
      <ComingSoonSection />
    </Layout>
  )
}
