import type { MetaFunction } from '@remix-run/node'

import YellowSymbol from '~/assets/schooler_symbolonly_yellow.svg'
import BlackYellowTypography from '~/assets/schooler_typographyonly_blackyellow.svg'

export const meta: MetaFunction = () => {
  return [
    { title: 'Schooler - 모두를 위한 학교 SIS/MIS 솔루션' },
    { name: 'description', content: '모두를 위한 학교 SIS/MIS 솔루션' },
  ]
}

export default function Index() {
  return (
    <main className="flex min-h-screen justify-center">
      <div className="flex w-full flex-col">
        <section
          className="relative flex h-screen flex-col items-center justify-center bg-white"
          style={{
            backgroundImage:
              'linear-gradient(120deg, rgba(246, 211, 101, 0.2) 0%, rgba(253, 160, 133, 0.5) 100%)',
          }}
        >
          <div className="flex flex-col items-center gap-9">
            <h1 className="relative flex items-center gap-5 text-5xl font-bold text-gray-800">
              <img
                src={YellowSymbol}
                alt="Symbol"
                className="h-[52px] sm:h-[60px]"
              />

              <img
                src={BlackYellowTypography}
                alt="Schooler."
                className="h-7 sm:h-9"
              />
            </h1>

            <div className="z-10 flex items-center gap-4">
              {/* 브로쉐어 작업 완료 후 추가 */}
              {/* <span className="inline-flex flex-col gap-2 text-sm text-center">
                <span className="text-base font-semibold">
                  혹시, 서비스 도입 / 투자를 원하시나요?
                </span>

                <span>
                  <a
                    href="https://sclu.io/share/bulk/file/"
                    className="text-blue-400 underline"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    서비스 브로쉐어
                  </a>
                  를 확인해보세요.
                </span>
              </span> */}

              {/* 브로쉐어 작업 완료 전 */}
              <span className="inline-flex flex-col gap-2 text-center text-sm">
                <span className="text-base font-semibold">
                  혹시, 서비스 도입 / 투자를 원하시나요?
                </span>

                <span className="mb-4">
                  스쿨러 영업팀에 문의하시면 상세히 안내해 드리겠습니다.
                </span>

                <span>
                  <a
                    href="mailto:minsu.kim@hanarin.uk"
                    className="text-blue-400 underline"
                    onClick={(e) => {
                      e.preventDefault()
                      alert(
                        'minsu.kim@hanarin.uk로 메일을 보내주시면 감사하겠습니다.',
                      )
                    }}
                  >
                    이메일로 문의 (추천)
                  </a>
                  {' | '}
                  <a
                    href="tel:07041552227"
                    className="text-blue-400 underline"
                    onClick={(e) => {
                      e.preventDefault()

                      if (
                        /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
                      ) {
                        window.location.href = 'tel:07041552227'
                      } else {
                        alert(
                          '070-4155-2227로 전화를 걸어주시면 감사하겠습니다.',
                        )
                      }
                    }}
                  >
                    전화로 문의
                  </a>
                </span>
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
