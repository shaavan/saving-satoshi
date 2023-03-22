import Navbar from 'components/Navbar'
import { lessons } from 'content'

export default function Layout({ children, params }) {
  const { slug, lesson: lessonId } = params

  const defaultTheme = 'bg-back'
  const { theme = defaultTheme } = lessons[slug][lessonId].metadata

  return (
    <div className={`${theme} flex flex-col`}>
      <div className="fix-grow-issue flex min-h-screen flex-col overflow-hidden bg-back/75 drop-shadow-3xl backdrop-blur-4xl">
        <Navbar params={params} />
        {children}
      </div>
    </div>
  )
}
