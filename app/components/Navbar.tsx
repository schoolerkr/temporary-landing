import YellowSymbol from '~/assets/schooler_symbolonly_yellow.svg'
import BlackYellowTypography from '~/assets/schooler_typographyonly_blackyellow.svg'
import WhiteYellowTypography from '~/assets/schooler_typographyonly_whiteyellow.svg'

import NavButton from './NavButton'

export default function Navbar() {
  return (
    <header className="flex justify-between px-8 py-[18px] md:px-[100px]">
      <div className="inline-flex items-center gap-3">
        <img src={YellowSymbol} alt="Symbol" className="h-[34px] w-7" />

        <picture className="inline-flex items-center">
          <source
            srcSet={WhiteYellowTypography}
            media="(prefers-color-scheme: dark)"
          />

          <img
            src={BlackYellowTypography}
            alt="Schooler."
            className="w-[100px]"
          />
        </picture>
      </div>

      <NavButton title="지금 문의하기" onClick={() => {}} />
    </header>
  )
}
