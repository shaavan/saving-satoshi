'use client'

import Navbar, { NavbarMobile } from 'components/Navbar'
import chapters from 'content/chapters'
import { useEffect, useState } from 'react'

function getWindowWidth() {
  const { innerWidth: width } = window
  return width
}

export default function Layout({ children, params }) {
  const isValidChapter = chapters[params.slug]

  const desktopSize = 800

  const windowWidth = getWindowWidth()
  const [isDesktopSize, setIsDesktopSize] = useState(windowWidth > desktopSize)

  const handleResize = () => setIsDesktopSize(window.innerWidth > desktopSize)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return (
    <div className="ch1-background flex flex-col">
      <div className="fix-grow-issue flex min-h-screen flex-col blur">
        {isValidChapter && isDesktopSize ? (
          <Navbar params={params} />
        ) : (
          <NavbarMobile params={params} />
        )}
        {children}
      </div>
    </div>
  )
}
