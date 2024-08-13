import type { MetaFunction } from '@remix-run/node'

import WhiteSymbol from '~/assets/schooler_symbolonly_white.svg'
import LandingHeroGradient from '~/assets/landing_hero_gradient.svg'

import HeroMockup from '~/assets/mockup/hero.svg'

import Button from '~/components/Button'
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'

export const meta: MetaFunction = () => {
  return [
    { title: 'Schooler - 모두를 위한 학교 SIS/MIS 솔루션' },
    { name: 'description', content: '모두를 위한 학교 SIS/MIS 솔루션' },
  ]
}

export default function Index() {
  return (
    <main>
      <Navbar />

      <section className="relative flex flex-col items-center">
        <h1 className="pt-[125px] text-center text-3xl font-extrabold leading-[50px] md:text-5xl md:leading-[70px]">
          <span className="dark:text-white">스마트한 학교 정보 관리</span>
          <br />
          <span className="text-schooler-deepyellow">
            모두를 위한 SIS/MIS 솔루션
          </span>
        </h1>

        <div className="flex gap-4 pt-14 md:pt-[105px]">
          <Button
            icon={
              <svg
                className="size-6 text-schooler-black md:size-7"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.992 1.992 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983V5.983Zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Zm2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414Zm5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Z"
                  clipRule="evenodd"
                />
              </svg>
            }
            title="문의하기"
            color="#ffffff"
            textColor="#222222"
          />

          <Button
            icon={<img src={WhiteSymbol} alt="Symbol" className="h-6 md:h-7" />}
            title="무료로 시작하기"
            color="#000000"
            textColor="#ffffff"
          />
        </div>

        <img
          src={LandingHeroGradient}
          alt=""
          className="absolute bottom-0 -z-50 h-full w-auto md:h-auto md:w-full"
        />

        <img src={HeroMockup} alt="" className="w-2/3 pt-20 md:pt-8" />
      </section>

      <section>section2</section>
      <section>section3</section>
      <section>section4</section>

      <section>cta</section>

      <Footer />
    </main>
  )
}
