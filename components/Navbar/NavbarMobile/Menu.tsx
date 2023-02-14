import React from 'react'
import TabGroupMobile from 'components/Navbar/NavbarMobile/TabGroupMobile'
import clsx from 'clsx'

export default function Menu(props) {
  let heightClass = props.isOpen
    ? `h-[calc(100%_-_${props.position}px)]`
    : 'h-0'

  ;('w-[calc(100%-${divWidth}px)]')

  console.log(heightClass)

  return (
    <div
      className={`absolute top-[${props.position}px] blur-opaque z-10 flex w-full flex-col transition-[height] ${heightClass}`}
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
