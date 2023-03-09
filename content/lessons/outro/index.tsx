'use client'
import { useTranslations } from 'hooks'
import { TextImage } from 'ui'

export default function Outro({ lang }) {
  const t = useTranslations(lang)
  return (
    <TextImage
      lang={lang}
      imageSrc="/assets/images/copter-interior-upscaled.jpg"
      imageAlt={t('outro.title')}
      btnText={t('outro.button_text')}
      btnEnabled={true}
      next={'/chapters/chapter-1/done'}
    >
      <p className="pt-2">{t('outro.paragraph_one')}</p>
      <p className="pt-6">{t('outro.paragraph_two')}</p>
    </TextImage>
  )
}

export const metadata = {
  title: 'outro.title',
}
