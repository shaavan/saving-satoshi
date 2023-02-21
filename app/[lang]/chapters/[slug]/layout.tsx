'use client'

import Navbar, { NavbarMobile } from 'components/Navbar'
import { chapters } from 'content'
import useMediaQuery from 'hooks/useMediaQuery'

export default function Layout({ children, params }) {
  const isValidChapter = chapters[params.slug]
  const isSmallScreen = useMediaQuery('(max-width: 767px)')

  return (
    <div className="ch1-background flex flex-col">
      <div className="fix-grow-issue flex min-h-screen flex-col bg-back/75 drop-shadow-3xl backdrop-blur-4xl">
        {isValidChapter ? (
          isSmallScreen ? (
            <NavbarMobile params={params} />
          ) : (
            <Navbar params={params} />
          )
        ) : null}
        {children}
      </div>
    </div>
  )
}
