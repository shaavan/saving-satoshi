import TabMobile from './TabMobile'
import chapters from 'content/chapters'
import lessons from 'content/lessons'

// import { Transition } from '@headlessui/react'
import clsx from 'clsx'

export default function TabGroup({ isOpen, clicked, params }) {
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
      <div
        className={clsx(
          'py-[8px] text-[27px] text-white/50',
          'duration-800 transform transition ease-in-out',
          {
            '-translate-x-[110%]': !isOpen,
            'translate-x-0': isOpen,
          }
        )}
      >
        Chapter {chapterMeta.position + 1}.{' '}
        <span className="ml-1 text-white">{chapterMeta.title}</span>
      </div>

      {challenges.map((challenge, index) => (
        <div
          key={index}
          className={clsx('duration-800 transform transition ease-in-out', {
            '-translate-x-[110%]': !isOpen,
            'translate-x-0': isOpen,
          })}
          style={{ transitionDelay: `${120 * (index + 1)}ms` }}
        >
          <TabMobile
            key={index}
            count={challenges.length}
            index={index}
            challenge={challenge}
            params={params}
            clicked={clicked}
          />
        </div>
      ))}
    </div>
  )
}
