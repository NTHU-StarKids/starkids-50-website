import { Fragment, useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'

import CarouselSection from '@/components/CarouselSection'
import { H2 } from '@/components/Headings'
import Section from '@/components/Section'
import Layout from '@/components/Layout'
import PostList from '@/components/PostList'
import { exampleSlides } from '@/constants'
import samplePosts from '@/constants/posts'

const PostsSection = (): JSX.Element => {
  const [defaultTab, setDefaultTab] = useState<number>(-1)

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
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`mr-1 rounded-t-2xl rounded-b-none px-2 sm:px-4 md:px-5 pt-3 pb-2 tracking-wider md:tracking-widest outline-none transition-colors duration-200 ${
                  selected ? 'bg-purple-500 text-white' : 'text-gray-200'
                }`}
              >
                <span className="ml-1">1970</span>
                <span className="lg:inline hidden">年代</span>
                <span className="lg:hidden inline">'s</span>
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`mx-1 rounded-t-2xl rounded-b-none px-3 sm:px-4 md:px-6 pt-3 pb-2 tracking-wider md:tracking-widest outline-none transition-colors duration-200 ${
                  selected ? 'bg-purple-500 text-white' : 'text-gray-200'
                }`}
              >
                <span className="ml-1">1980</span>
                <span className="lg:inline hidden">年代</span>
                <span className="lg:hidden inline">'s</span>
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`mx-1 rounded-t-2xl rounded-b-none px-3 sm:px-4 md:px-6 pt-3 pb-2 tracking-wider md:tracking-widest outline-none transition-colors duration-200 ${
                  selected ? 'bg-purple-500 text-white' : 'text-gray-200'
                }`}
              >
                <span className="ml-1">1990</span>
                <span className="lg:inline hidden">年代</span>
                <span className="lg:hidden inline">'s</span>
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`mx-1 rounded-t-2xl rounded-b-none px-3 sm:px-4 md:px-6 pt-3 pb-2 tracking-wider md:tracking-widest outline-none transition-colors duration-200 ${
                  selected ? 'bg-purple-500 text-white' : 'text-gray-200'
                }`}
              >
                <span className="ml-1">2000</span>
                <span className="lg:inline hidden">年代</span>
                <span className="lg:hidden inline">'s</span>
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`ml-1 rounded-t-2xl rounded-b-none px-3 sm:px-4 md:px-6 pt-3 pb-2 tracking-wider md:tracking-widest outline-none transition-colors duration-200 ${
                  selected ? 'bg-purple-500 text-white' : 'text-gray-200'
                }`}
              >
                <span className="ml-1">2010</span>
                <span className="lg:inline hidden">年代</span>
                <span className="lg:hidden inline">'s</span>
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="outline-none">
            <PostList posts={samplePosts} />
          </Tab.Panel>
          <Tab.Panel className="outline-none">
            <PostList posts={samplePosts} />
          </Tab.Panel>
          <Tab.Panel className="outline-none">
            <PostList posts={samplePosts} />
          </Tab.Panel>
          <Tab.Panel className="outline-none">
            <PostList posts={samplePosts} />
          </Tab.Panel>
          <Tab.Panel className="outline-none">
            <PostList posts={samplePosts} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </Section>
  )
}

export default function PostsPage(): JSX.Element {
  return (
    <Layout title="社友來稿">
      <CarouselSection slides={exampleSlides} />
      <PostsSection />
    </Layout>
  )
}
