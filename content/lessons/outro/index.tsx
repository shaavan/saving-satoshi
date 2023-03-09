'use client'
import { useTranslations } from 'hooks'
import { ChapterOutro } from 'ui'

export default function Outro({ lang }) {
  const t = useTranslations(lang)
  return (
    <ChapterOutro
      title={t('transacting_one.title')}
      image="/assets/images/chapter-1-cover.jpg"
      btn_text={'Hello'}
      next={'/chapters/chapter-1/transacting-2'}
    >
      <p className="pt-2 text-lg">{t('transacting_one.paragraph_one')}</p>
      <p className="pt-2 text-lg">{t('transacting_one.paragraph_two')}</p>
      <p className="pt-2 text-lg">{t('transacting_one.paragraph_three')}</p>
    </ChapterOutro>
  )
}

export const metadata = {
  title: 'transacting_one.title',
}
