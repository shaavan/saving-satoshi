import React from 'react'
import TabGroupMobile from 'components/Navbar/NavbarMobile/TabGroupMobile'
import clsx from 'clsx'

export default function Menu(props) {
  return (
    <div
      id="lesson-navigation-menu"
      className={clsx(
        'top-[${props.position}px] blur-opaque absolute z-10 flex w-full flex-col transition-[height] duration-[400ms] ease-out',
        {
          'delay-200': !props.isOpen,
        }
      )}
      style={{
        height: `${props.isOpen ? `calc(100% - ${props.position}px)` : `0px`}`,
      }}
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
