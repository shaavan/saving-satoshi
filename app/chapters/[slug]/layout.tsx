'use client'

import Navbar, { NavbarMobile } from 'components/Navbar'
import chapters from 'content/chapters'
import { useEffect, useState } from 'react'

//TODO:
// This function is async in nature. But you can't use functional components with async function.
// For now remove the async but later introduce them back and seperate functional component part.
export default function Layout({ children, params }) {
  const isValidChapter = chapters[params.slug]
  // const isDesktopSize = false

  const [isDesktopSize, setIsDesktopSize] = useState(false)
  const handleResize = () => setIsDesktopSize(window.innerWidth > 1500)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  console.log(isDesktopSize)

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
