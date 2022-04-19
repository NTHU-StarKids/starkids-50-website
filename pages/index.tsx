import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faExternalLinkAlt,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'
import { Dialog, Transition } from '@headlessui/react'

import CarouselSection from '@/components/CarouselSection'
import Container from '@/components/Container'
import { H2, H3 } from '@/components/Headings'
import Section from '@/components/Section'
import Layout from '@/components/Layout'
import P from '@/components/Paragraph'
import { getPostFirstParagraph, getRecommendedMagazinePosts } from '@/utils'

const AnniversarySection = (): JSX.Element => {
  return (
    <Section className="cursor-default select-none">
      <h1
        className="font-semibold tracking-widest text-3xl mb-3"
        style={{ fontFamily: 'GenYoMin' }}
      >
        清大天文社
      </h1>
      <h1
        className="font-semibold tracking-widest text-5xl"
        style={{ fontFamily: 'GenYoMin' }}
      >
        50週年
      </h1>
      <div className="flex justify-center">
        <div
          className="mt-4 w-48 h-2.5"
          style={{ backgroundColor: '#2d2d30', borderRadius: '50%' }}
        ></div>
      </div>
    </Section>
  )
}

const AboutUsSection = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [showForm, setShowForm] = useState<boolean>(false)
  const formDisabled = true

  // form variables
  type TSignupForm = {
    name: string
    department: string
    identity: string
    email: string
    phone: string
    attendence: string
    familyMember: string
    suggestion: string
  }

  const initSignupForm: TSignupForm = {
    name: '',
    department: '',
    identity: '',
    email: '',
    phone: '',
    attendence: '參加（臺灣）',
    familyMember: '',
    suggestion: '',
  }

  const [checked, setChecked] = useState<boolean>(false)
  const [signupForm, setSignupForm] = useState<TSignupForm>(initSignupForm)

  const validateForm = () => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (
      signupForm.name &&
      signupForm.department &&
      signupForm.identity &&
      signupForm.email &&
      emailRegex.test(signupForm.email) &&
      signupForm.attendence &&
      signupForm.familyMember != undefined &&
      signupForm.familyMember != ''
    ) {
      setChecked(true)
    } else {
      setChecked(false)
    }
  }

  const onInputChange = (key: string, value: string) => {
    setSignupForm((prev) => ({ ...prev, [key]: value }))
  }

  useEffect(() => {
    validateForm()
  }, [signupForm])

  return (
    <>
      <Section color="purple-50">
        <Container>
          <H2>關於我們</H2>
          <P className="mb-4">
            動手做　要有中國的科學自信！<br></br>用腦想　培育蒼穹的浩瀚心胸！
          </P>
          <P className="mb-8">
            歲月如白駒過隙，倏然即逝，今年終於來到了我們清大天文社創立的 50
            週年，我們將於臺灣時間 11/27（六）擴大舉辦 50
            週年社慶，並與美國連線同步視訊，在此敬邀各位海內外的社友們回來共襄盛舉，一同歡慶這值得紀念的一刻。
          </P>
        </Container>

        <div className="flex justify-center">
          <div
            className="flex items-center h-12 pl-2 pr-4 py-2 border-2 border-purple-600 rounded-lg cursor-pointer select-none pulse-button"
            onClick={() => setShowForm(!showForm)}
          >
            <p className="w-24 tracking-wider max-h-full">社慶報名</p>
            <FontAwesomeIcon
              className={`max-h-full w-3 transform transition-transform duration-500 ${
                showForm ? `rotate-90` : ''
              }`}
              icon={faChevronRight}
              fixedWidth
            />
          </div>
        </div>

        <div
          className={`transition-max-height duration-500 overflow-hidden ${
            showForm ? 'max-h-2x-screen' : 'max-h-0 delay-400'
          }`}
        >
          <div
            className={`transition duration-500 ease-in-out mt-16 ${
              showForm ? 'opacity-100' : 'opacity-0 delay-500'
            }`}
          >
            <H3 className="mb-2">
              國立清華大學 物理館1樓中庭
              <FontAwesomeIcon
                className="w-4 inline mb-1.5 ml-2 text-purple-600"
                icon={faMapMarkerAlt}
              />
            </H3>
            <H3 className="mb-8">2021年11月27日 (六) 13:30~17:00</H3>
            <P className="mb-4">
              安排社友短講、文物展覽、攝影作品、紀念品販售、社窩參觀、茶點。
              <br></br>
              （以上規劃將視疫情滾動調整）
            </P>

            <div className="flex justify-center mt-12">
              <div className="w-72">
                <form autoComplete="off">
                  <input
                    type="text"
                    name="name"
                    value={signupForm.name}
                    className="w-full my-2 px-4 py-2 font-light tracking-wide ring-offset-2 border-2 border-purple-600 rounded text-black focus:outline-none focus:ring-2 ring-offset-2 ring-purple-600 ring-opacity-60"
                    placeholder="姓名"
                    autoComplete="off"
                    onChange={(e) => onInputChange('name', e.target.value)}
                    disabled={formDisabled}
                  />

                  <input
                    type="text"
                    name="department"
                    value={signupForm.department}
                    className="w-full my-2 px-4 py-2 font-light tracking-wide ring-offset-2 border-2 border-purple-600 rounded text-black focus:outline-none focus:ring-2 ring-offset-2 ring-purple-600 ring-opacity-60"
                    placeholder="系級（xx系xx級）"
                    autoComplete="off"
                    onChange={(e) =>
                      onInputChange('department', e.target.value)
                    }
                    disabled={formDisabled}
                  />

                  <input
                    type="text"
                    name="identity"
                    value={signupForm.identity}
                    className="w-full my-2 px-4 py-2 font-light tracking-wide ring-offset-2 border-2 border-purple-600 rounded text-black focus:outline-none focus:ring-2 ring-offset-2 ring-purple-600 ring-opacity-60"
                    placeholder="社內身份"
                    autoComplete="off"
                    onChange={(e) => onInputChange('identity', e.target.value)}
                    disabled={formDisabled}
                  />

                  <input
                    type="email"
                    name="email"
                    value={signupForm.email}
                    className="w-full my-2 px-4 py-2 font-light tracking-wide ring-offset-2 border-2 border-purple-600 rounded text-black focus:outline-none focus:ring-2 ring-offset-2 ring-purple-600 ring-opacity-60"
                    placeholder="電子信箱"
                    autoComplete="off"
                    onChange={(e) => onInputChange('email', e.target.value)}
                    disabled={formDisabled}
                  />

                  <input
                    type="text"
                    name="phone"
                    value={signupForm.phone}
                    className="w-full my-2 px-4 py-2 font-light tracking-wide ring-offset-2 border-2 border-purple-600 rounded text-black focus:outline-none focus:ring-2 ring-offset-2 ring-purple-600 ring-opacity-60"
                    placeholder="聯絡電話"
                    autoComplete="off"
                    onChange={(e) => onInputChange('phone', e.target.value)}
                    disabled={formDisabled}
                  />

                  <P className="mt-4 my-2">社慶當天是否到場？</P>

                  <div className="mt-2 mb-4">
                    <div className="flex items-center my-2">
                      <input
                        type="radio"
                        name="attendence"
                        value="參加（臺灣）"
                        className="form-radio p-2 bg-white border-2 border-purple-600 focus:ring-0 focus:ring-transparent"
                        checked={
                          !formDisabled &&
                          signupForm.attendence == '參加（臺灣）'
                        }
                        onChange={(e) =>
                          onInputChange('attendence', e.target.value)
                        }
                        disabled={formDisabled}
                      />
                      <P className="mx-2">參加（臺灣）</P>
                    </div>
                    <div className="flex items-center my-2">
                      <input
                        type="radio"
                        name="attendence"
                        value="參加（線上）"
                        className="form-radio p-2 bg-transparent border-2 border-purple-600 focus:ring-0 focus:ring-transparent"
                        checked={
                          !formDisabled &&
                          signupForm.attendence == '參加（線上）'
                        }
                        onChange={(e) =>
                          onInputChange('attendence', e.target.value)
                        }
                        disabled={formDisabled}
                      />
                      <P className="mx-2">參加（線上）</P>
                    </div>
                    <div className="flex items-center my-2">
                      <input
                        type="radio"
                        name="attendence"
                        value="不克前來"
                        className="form-radio p-2 bg-white border-2 border-purple-600 focus:ring-0 focus:ring-transparent"
                        checked={
                          !formDisabled && signupForm.attendence == '不克前來'
                        }
                        onChange={(e) =>
                          onInputChange('attendence', e.target.value)
                        }
                        disabled={formDisabled}
                      />
                      <P className="mx-2">不克前來</P>
                    </div>
                  </div>

                  <input
                    type="number"
                    name="familyMember"
                    value={signupForm.familyMember}
                    className="w-full my-2 px-4 py-2 font-light tracking-wide ring-offset-2 border-2 border-purple-600 rounded text-black focus:outline-none focus:ring-2 ring-offset-2 ring-purple-600 ring-opacity-60"
                    min={0}
                    max={15}
                    placeholder="同行家屬人數"
                    autoComplete="off"
                    onChange={(e) =>
                      onInputChange('familyMember', e.target.value)
                    }
                    disabled={formDisabled}
                  />

                  <textarea
                    name="suggestion"
                    value={signupForm.suggestion}
                    className="w-full my-2 px-4 py-2 font-light tracking-wide ring-offset-2 border-2 border-purple-600 rounded text-black focus:outline-none focus:ring-2 ring-offset-2 ring-purple-600 ring-opacity-60"
                    placeholder="任何想對現在的天文社說的話"
                    autoComplete="off"
                    rows={5}
                    onChange={(e) =>
                      onInputChange('suggestion', e.target.value)
                    }
                    disabled={formDisabled}
                  />

                  <div className="flex justify-center mt-12">
                    <div
                      className={`px-3 py-2 ${
                        formDisabled ? 'w-44' : 'w-28'
                      } border-2 ${
                        checked
                          ? 'border-purple-600 bg-purple-600 cursor-pointer'
                          : 'border-gray-400 bg-gray-400 cursor-not-allowed'
                      } text-white rounded-lg select-none tracking-wider`}
                    >
                      確認送出 (已截止)
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <P className="mt-6 text-gray-600">
              詳細辦理規劃將於11月中前以電子郵件寄送。<br></br>
              任何問題請聯絡天文社信箱：nthu.astro@gmail.com
            </P>
          </div>
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
                className={`relative bg-gray-700 text-white rounded-2xl w-11/12 sm:w-5/6 md:w-7/12 lg:w-5/12 mx-auto my-20 px-4 pt-4 tracking-wider`}
              >
                <button
                  className="hamburger-btn open float-right outline-none focus:outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>

                <p className="text-lg text-center my-8 px-6 sm:px-12 tracking-wider">
                  報名成功！我們已經收到您的回覆囉，詳細辦理規劃將於 11
                  月中前以電子郵件寄送，願星空燦爛！
                </p>
                <p className="text-lg text-center my-6 px-6 sm:px-12 tracking-wider">
                  另外，這次 50
                  年社慶同樣有設計幾項專屬紀念品，同時也歡迎各位學長姊隨意樂捐，繼續支持天文社的成長～
                </p>

                <div className="flex justify-center gap-2 sm:gap-4 mt-8 mb-6">
                  <div
                    className="flex items-center h-10 sm:h-12 px-2 sm:px-4 sm:py-2 bg-purple-50 border border-purple-600 text-purple-600 rounded-lg cursor-pointer select-none"
                    onClick={() => setIsOpen(false)}
                  >
                    <p className="tracking-wider max-h-full">再考慮一下</p>
                  </div>

                  <Link href="/donation" passHref>
                    <div className="flex items-center h-10 sm:h-12 px-2 sm:px-4 sm:py-2 bg-purple-600 border-2 border-purple-600 rounded-lg cursor-pointer select-none">
                      <p className="tracking-wider max-h-full mr-2">前去看看</p>
                      <FontAwesomeIcon
                        className="max-h-full w-4"
                        icon={faExternalLinkAlt}
                        fixedWidth
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default function HomePage(): JSX.Element {
  // const recommendedPosts = getRecommendedHistoryPosts()
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

  const metadata: TMetadata = {
    description:
      '動手做 要有中國的科學自信！用腦想 培育蒼穹的浩瀚心胸！歲月如白駒過隙，倏然即逝，今年終於來到了我們清大天文社創立的 50 週年，我們將於臺灣時間 11/27（六）擴大舉辦 50 週年社慶，並與美國連線同步視訊，在此敬邀各位海內外的社友們回來共襄盛舉，一同歡慶這值得紀念的一刻。',
  }

  return (
    <Layout metadata={metadata}>
      <AnniversarySection />
      <CarouselSection slides={slides} link="posts" />
      <AboutUsSection />
    </Layout>
  )
}
