import TabMobile from './TabMobile'
import chapters from 'content/chapters'
import lessons from 'content/lessons'

import { Transition } from '@headlessui/react'

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
      <Transition
        show={isOpen}
        enter="transition-opacity ease-linear duration-600"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-800"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="px-2 py-3 text-2xl text-white/50">
          Chapter {chapterMeta.position + 1}.{' '}
          <span className="ml-1 text-white">{chapterMeta.title}</span>
        </div>

        <Transition.Child
          enter="transition ease-in-out duration-600 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-800 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          {challenges.map((challenge, index) => (
            <TabMobile
              key={index}
              count={challenges.length}
              index={index}
              challenge={challenge}
              params={params}
              clicked={clicked}
            />
          ))}
        </Transition.Child>
      </Transition>
    </div>
  )
}
