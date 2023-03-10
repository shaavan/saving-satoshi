'use client'

import { chapters } from 'content'
import { introductions } from 'content'
import { redirect, usePathname } from 'next/navigation'
import { TextImage } from 'ui'

export default function Introduction({ children, lang }) {
  const chapterId = usePathname().split('/').pop()
  const chapter = chapters[chapterId]

  if (!chapter) {
    return redirect('/chapters')
  }

  const intro = introductions[chapter.metadata.intro]

  return (
    <TextImage
      title={intro.metadata.title}
      subtitle={intro.metadata.subtitle}
      imageSrc={intro.metadata.image}
      imageAlt={intro.metadata.title}
      btnText={'Start'}
      btnEnabled={chapter.metadata.lessons.length > 0}
      next={`/chapters/${chapterId}/${chapter.metadata.lessons[0]}`}
    >
      {children}
    </TextImage>
  )
}
