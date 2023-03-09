'use client'

import Image from 'next/image'
import { Button } from 'shared'
import { chapters } from 'content'
import { introductions } from 'content'
import { redirect, usePathname } from 'next/navigation'
import { useLang, useTranslations } from 'hooks'

export default function Outro({
  // title implies title in navbar
  title,
  image,
  children,
  btn_text,
  // next implies next page
  next,
}: {
  title: string
  image: string
  children: any
  btn_text: string
  next: string
}) {
  const lang = useLang()
  const t = useTranslations(lang)
  // const chapterId = usePathname().split('/').pop()
  // const chapter = chapters[chapterId]

  // if (!chapter) {
  //   return redirect('/chapters')
  // }

  // const intro = introductions[chapter.metadata.intro]

  // image: '/assets/images/chapter-1-cover.jpg',

  return (
    <div className="flex grow">
      <div className="lg:flex lg:grow">
        <div className="relative h-[375px] overflow-hidden lg:order-last lg:flex lg:h-full lg:shrink lg:basis-1/2 lg:border-l lg:border-white/25">
          <Image
            src={image}
            alt={t(title)}
            fill
            objectFit="cover"
            objectPosition="bottom"
            className="relative"
          />
        </div>
        <div className="flex shrink basis-1/2">
          <div className="flex flex-col gap-10 px-[15px] py-10 lg:px-10">
            <div className="intro text-white">
              <h1 className="font-cbrush text-5xl">{t(title)}</h1>
              {/* <h2 className="pt-3 font-nunito text-xl font-black">
                {t(intro.metadata.subtitle)}
              </h2> */}
              <div className="pt-3 font-nunito text-2xl">{children}</div>
            </div>
            <div>
              {/* {chapter.metadata.lessons.length > 0 ? ( */}
              <Button
                href={next}
                // href={`/chapters/${chapterId}/${chapter.metadata.lessons[0]}`}
                // classes="w-full md:w-auto"
              >
                {btn_text}
              </Button>
              {/* ) : ( */}
              {/* <Button classes="w-full md:w-auto" disabled> */}
              {/* Coming soon */}
              {/* </Button> */}
              {/* )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
