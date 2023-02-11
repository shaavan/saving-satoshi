import TabMobile from './TabMobile'
import chapters from 'content/chapters'
import lessons from 'content/lessons'
import Address from './Address'

export default function TabGroup({ params }) {
  const { slug } = params

  const chapter = chapters[slug]

  if (!chapter) {
    return null
  }

  const chapterMeta = chapter.metadata

  const challenges = chapter.metadata.challenges.map((lessonId) => {
    const { title } = lessons[lessonId].metadata

    return { lessonId, title }
  })

  return (
    <div className="mx-4 flex h-full flex-col items-stretch">
      <div className="px-2 py-3 text-2xl text-white/50">
        Chapter {chapterMeta.position + 1}.{' '}
        <span className="ml-1 text-white">{chapterMeta.title}</span>
      </div>
      {challenges.map((challenge, index) => (
        <TabMobile
          key={index}
          count={challenges.length}
          index={index}
          challenge={challenge}
          params={params}
        />
      ))}
    </div>
  )
}
