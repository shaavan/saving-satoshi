import clsx from 'clsx'
import React, { useState } from 'react'

export default function HamburgerMenu(props) {
  const className =
    'h-0.5 w-5 bg-white transition-all ease-in-out origin-top-right'

  const aria_label = props.isOpen ? 'Close Menu' : 'Open Menu'

  return (
    <div
      className="mr flex h-full w-10 cursor-pointer flex-col items-start justify-center overflow-hidden border-r border-white/25 p-1"
      onClick={props.clicked}
      role="button"
      aria-label={aria_label}
      aria-expanded={props.isOpen}
      aria-controls="lesson-navigation-menu"
    >
      <div
        className={clsx(className, 'mb-[5px]', {
          'transform-none': !props.isOpen,
          'translate-x-0 -translate-y-[1.8px] -rotate-45': props.isOpen,
        })}
        aria-hidden="true"
      />

      <div
        className={clsx(className, 'mt-[2px]', {
          'w-[15px] transform-none': !props.isOpen,
          'w-[20px] translate-x-[1.2px] translate-y-[3px] rotate-45':
            props.isOpen,
        })}
        aria-hidden="true"
      />
    </div>
  )
}
