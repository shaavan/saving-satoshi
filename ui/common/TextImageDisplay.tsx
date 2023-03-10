'use client'

import Image from 'next/image'
import { Button } from 'shared'
import { useLang, useTranslations } from 'hooks'

export default function TextImageDisplay({
  children,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  btnText,
  btnEnabled,
  next,
}: {
  children: any
  title?: string
  subtitle?: string
  imageSrc: string
  imageAlt: string
  btnText: string
  btnEnabled: boolean
  next: string
}) {
  const lang = useLang()
  const t = useTranslations(lang)

  return (
    <div className="flex grow">
      <div className="lg:flex lg:grow">
        <div className="relative h-[375px] overflow-hidden lg:order-last lg:flex lg:h-full lg:shrink lg:basis-1/2 lg:border-l lg:border-white/25">
          <Image
            src={imageSrc}
            alt={t(imageAlt)}
            fill
            objectFit="cover"
            objectPosition="bottom"
            className="relative"
          />
        </div>
        <div className="flex shrink basis-1/2">
          <div className="flex flex-col gap-10 px-[15px] py-8 lg:px-10">
            <div className="intro text-white">
              {title && <h1 className="font-cbrush text-5xl">{t(title)}</h1>}
              {subtitle && (
                <h2 className="mb-2 pt-3 font-nunito text-xl font-black">
                  {t(subtitle)}
                </h2>
              )}
              <div className="font-nunito text-2xl">{children}</div>
            </div>
            <div>
              {btnEnabled ? (
                <Button href={next} classes="w-full md:w-auto">
                  {btnText}
                </Button>
              ) : (
                <Button classes="w-full md:w-auto" disabled>
                  Coming soon
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
