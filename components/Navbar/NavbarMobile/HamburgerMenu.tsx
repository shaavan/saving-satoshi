import clsx from 'clsx'
import React, { useState } from 'react'

export default function HamburgerMenu(props) {
  const className =
    'h-0.5 w-5 bg-white transition-all ease-in-out origin-top-right'

  return (
    <div
      className="mr flex h-8 w-10 cursor-pointer flex-col items-start justify-center overflow-hidden border-r border-white/25 p-1"
      onClick={props.clicked}
    >
      <div
        className={clsx(className, 'mb-[5px]', {
          'transform-none': !props.isOpen,
          'translate-x-0 -translate-y-[1.8px] -rotate-45': props.isOpen,
        })}
      />

      <div
        className={clsx(className, 'mt-[2px]', {
          'w-[15px] transform-none': !props.isOpen,
          'w-[20px] translate-x-[1.2px] translate-y-[3px] rotate-45':
            props.isOpen,
        })}
      />
    </div>
  )
}
