'use client'
import { useTranslations } from 'hooks'
import { ChapterOutro } from 'ui'

export default function Outro({ lang }) {
  const t = useTranslations(lang)
  return (
    <ChapterOutro
      title={t('outro.title')}
      image="/assets/images/chapter-1-outro.jpg"
      btn_text={t('outro.button_text')}
      next={'/chapters/chapter-1/done'}
    >
      <p className="pt-2">{t('outro.paragraph_one')}</p>
      <p className="pt-6">{t('outro.paragraph_two')}</p>
    </ChapterOutro>
  )
}

export const metadata = {
  title: 'outro.title',
}
