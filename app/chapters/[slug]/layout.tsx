import Navbar, { NavbarMobile } from 'components/Navbar'
import chapters from 'content/chapters'

export default async function Layout({ children, params }) {
  const isValidChapter = chapters[params.slug]
  const isDesktopSize = false

  return (
    <div className="ch1-background flex flex-col">
      <div className="fix-grow-issue flex min-h-screen flex-col blur">
        {isValidChapter && isDesktopSize ? (
          <Navbar params={params} />
        ) : (
          <NavbarMobile />
        )}
        {children}
      </div>
    </div>
  )
}
