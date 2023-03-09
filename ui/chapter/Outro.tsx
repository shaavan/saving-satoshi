'use client'

import Image from 'next/image'
import { Button } from 'shared'
import { useLang, useTranslations } from 'hooks'

export default function Outro({
  title,
  image,
  children,
  btn_text,
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
          <div className="flex flex-col gap-10 px-[15px] py-8 lg:px-10">
            <div className="intro font-nunito text-xl text-white">
              {children}
            </div>
            <div>
              <Button href={next}>{btn_text}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
