import React from 'react'
import TabGroupMobile from 'components/Navbar/NavbarMobile/TabGroupMobile'
import clsx from 'clsx'

export default function Menu(props) {
  return (
    <div
      id="lesson-navigation-menu"
      className={clsx(
        'flex-l absolute z-10 w-full flex-col bg-back drop-shadow-3xl backdrop-blur-4xl transition-[height] duration-[400ms] ease-out',
        {
          'h-full': props.isOpen,
          'h-0 delay-200': !props.isOpen,
        }
      )}
      style={{}}
      aria-modal="true"
      aria-hidden={!props.isOpen}
      aria-label="Lesson Navigation Menu"
    >
      {
        <TabGroupMobile
          isOpen={props.isOpen}
          clicked={props.clicked}
          params={props.params}
        />
      }
    </div>
  )
}
