'use client'

import { useState } from 'react'
import { Lesson, LessonTabs, LessonPrompt, StatusBar } from 'ui'

const tabData = [
  {
    id: 'info',
    text: 'Info',
  },
  {
    id: 'code',
    text: 'Code',
  },
]

/**
 * @numOfInputFields {number} number of input fields
 * @answer {string} correct answer to the challenge problem
 * @next {string} link to next part of chapter
 * @label {string} label on top of input field
 */
export default function InputChallenge({
  children,
  numOfInputFields,
  answer,
  next,
  label,
}) {
  const [userInput, setUserInput] = useState('')

  return (
    <Lesson>
      <LessonTabs items={tabData} classes="px-4 py-2 w-full" stretch={true} />

      {children}

      <hr className="border-1 invisible h-1 w-full border-white/25 md:visible" />

      <LessonPrompt
        className="max-w-[840px] px-4 py-8 md:items-center"
        label={label}
        amount={numOfInputFields}
        onChange={setUserInput}
      />

      <StatusBar full next={next} input={userInput} expected={answer} />
    </Lesson>
  )
}