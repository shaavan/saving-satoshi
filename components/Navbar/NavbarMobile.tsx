'use client'

import { useRouter } from 'next/navigation'
import Address from 'components/Navbar/Address'
import TabGroup from 'components/Navbar/TabGroup'
import ArrowLeftIcon from 'public/assets/icons/arrow-left.svg'
import UserButton from './UserButton'
import HamburgerMenu from './DropDownMenu/HamburgerMenu'
import DropDown from './DropDownMenu/DropDown'
import { useState } from 'react'
import Menu from './DropDownMenu/Menu'

export default function Navbar() {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)

  function handleButtonClick() {
    setIsOpen(!isOpen)
  }

  //Temp
  const tempVals = {
    titleIndex: '2',
    title: '51% Attack',
    lessons: [
      '1,000 blocks',
      'You vs. Amestris',
      'Together we are strong(er)',
      'The winning strategy',
    ],
  }

  console.log(tempVals.lessons)

  return (
    <div className="left-0 top-0 w-full">
      <div className="flex items-stretch justify-between border-b border-white/80 text-white">
        <div className="flex items-stretch">
          <button
            title="Back"
            className="group items-center border-r border-white/25 p-5 text-sm text-white transition duration-100 ease-in-out hover:bg-black/20"
            onClick={() => router.back()}
          >
            <ArrowLeftIcon className="h-6 w-6 opacity-50 transition duration-100 ease-in-out group-hover:opacity-100" />
          </button>

          <Address />
        </div>
        {/* <nav className="flex items-center">
          <TabGroup params={params} />
          <UserButton />
        </nav> */}
        {/* <DropDown titleIndex={tempVals.titleIndex} title={tempVals.title} lessons={tempVals.lessons} /> */}
        <HamburgerMenu isOpen={isOpen} clicked={handleButtonClick} />
        <UserButton />
      </div>
      <Menu
        isOpen={isOpen}
        titleIndex={tempVals.titleIndex}
        title={tempVals.title}
        lessons={tempVals.lessons}
      />
    </div>
  )
}
