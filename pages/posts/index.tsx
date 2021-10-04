import { Fragment, useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'

import CarouselSection from '@/components/CarouselSection'
import { H2 } from '@/components/Headings'
import Section from '@/components/Section'
import Layout from '@/components/Layout'
import PostList from '@/components/PostList'
import posts from '@/constants/magazinePosts'
import { getPostFirstParagraph, getRecommendedMagazinePosts } from '@/utils'

const PostsSection = (): JSX.Element => {
  const [defaultTab, setDefaultTab] = useState<number>(-1)
  const decades = [1970, 1980, 1990, 2000, 2010]

  const onTabChange = (index: number) => {
    window.sessionStorage.setItem('defaultTag', String(index))
  }

  useEffect(() => {
    setDefaultTab(parseInt(window.sessionStorage.getItem('defaultTag') || '0'))
  }, [])

  return (
    <Section>
      <H2 className="mt-4 mb-12">社友來稿</H2>
      <Tab.Group defaultIndex={defaultTab} onChange={onTabChange}>
        <Tab.List className="border-b-4 border-purple-500 mb-10 flex justify-between overflow-x-scroll">
          {decades.map((year, index) => {
            const margin =
              index == 0
                ? 'mr-1'
                : index == decades.length - 1
                ? 'ml-1'
                : 'mx-1'
            return (
              <Tab as={Fragment} key={`tab-${year}`}>
                {({ selected }) => (
                  <button
                    className={`${margin} rounded-t-2xl rounded-b-none px-2 sm:px-4 md:px-5 pt-3 pb-2 tracking-wider md:tracking-widest outline-none transition-colors duration-200 ${
                      selected ? 'bg-purple-500 text-white' : 'text-gray-200'
                    }`}
                  >
                    <span className="ml-1">{year}</span>
                    <span className="lg:inline hidden">年代</span>
                    <span className="lg:hidden inline">'s</span>
                  </button>
                )}
              </Tab>
            )
          })}
        </Tab.List>
        <Tab.Panels>
          {decades.map((decade) => {
            const decadePosts = posts.filter((post) => post.decade == decade)
            return (
              <Tab.Panel key={`panel-${decade}`} className="outline-none">
                <PostList posts={decadePosts} />
              </Tab.Panel>
            )
          })}
        </Tab.Panels>
      </Tab.Group>
    </Section>
  )
}

export default function PostsPage(): JSX.Element {
  const recommendedPosts = getRecommendedMagazinePosts()
  const slides = recommendedPosts.map((post) => {
    const slide: TSlide = {
      imageUrl: post.coverUrl,
      title: post.title,
      description: getPostFirstParagraph(post),
      slug: post.slug,
    }
    return slide
  })

  return (
    <Layout title="社友來稿">
      <CarouselSection slides={slides} link="posts" />
      <PostsSection />
    </Layout>
  )
}
