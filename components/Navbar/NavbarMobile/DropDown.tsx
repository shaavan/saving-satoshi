'use client'

import { useState } from 'react'
import HamburgerMenu from './HamburgerMenu'
import Menu from './Menu'

export default function DropDown(props) {
  // The plain text divs need to be changed to tabs. Then create a prop for tabClicked.

  //props.titleIndex
  //props.title
  //props.lessons => Array of lessons

  const [isOpen, setIsOpen] = useState(false)

  function handleButtonClick() {
    setIsOpen(!isOpen)
  }

  // function handleLinkClick() {
  //     setIsOpen(false);
  // }

  return (
    <div>
      <HamburgerMenu clicked={handleButtonClick} isOpen={isOpen} />
      <Menu
        isOpen={isOpen}
        titleIndex={props.titleIndex}
        title={props.title}
        lessons={props.lessons}
      />
    </div>
  )
}
