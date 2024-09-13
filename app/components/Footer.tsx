import YellowSymbol from '~/assets/schooler_symbolonly_yellow.svg'
import BlackYellowTypography from '~/assets/schooler_typographyonly_blackyellow.svg'
import WhiteYellowTypography from '~/assets/schooler_typographyonly_whiteyellow.svg'

export default function Footer() {
  return (
    <footer className="mb-14 flex select-none items-center justify-center md:mb-12">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col items-center gap-9 md:flex-row">
          <div className="flex items-center gap-3">
            <img src={YellowSymbol} alt="Symbol" className="h-[29px] w-6" />

            <picture className="inline-flex items-center">
              <source
                srcSet={WhiteYellowTypography}
                media="(prefers-color-scheme: dark)"
              />

              <img
                src={BlackYellowTypography}
                alt="Schooler."
                className="w-24"
              />
            </picture>
          </div>
          <div className="flex items-center gap-8">
            <span className="text-sm font-bold text-schooler-black dark:text-white">
              이용약관
            </span>
            <span className="text-sm font-bold text-schooler-black dark:text-white">
              개인정보 처리방침
            </span>
          </div>
        </div>

        <div className="mx-10 mt-8 flex flex-col items-center justify-center gap-6 md:ml-[10.5rem] md:items-start md:gap-2.5">
          <p className="text-xs font-light text-schooler-black dark:text-white">
            Copyright © 2024 LUNAIZ Corp. All rights reserved.
          </p>

          <p className="text-xs font-light text-schooler-black dark:text-white">
            혹시, 서비스 도입 / 투자를 원하시나요? 👉{' '}
            <a
              href="mailto:minsu.kim@lunaiz.com"
              className="underline"
              onClick={(e) => {
                e.preventDefault()
                alert(
                  'minsu.kim@lunaiz.com로 메일을 보내주시면 감사하겠습니다.',
                )
              }}
            >
              minsu.kim@lunaiz.com
            </a>{' '}
            로 문의해주세요.
          </p>
        </div>
      </div>
    </footer>
  )
}
