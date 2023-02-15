'use client'

import { useRouter } from 'next/navigation'
import Address from 'components/Navbar/Address'
import ArrowLeftIcon from 'public/assets/icons/arrow-left.svg'
import UserButton from '../UserButton'
import HamburgerMenu from './HamburgerMenu'
import { useEffect, useRef, useState } from 'react'
import Menu from './Menu'
import clsx from 'clsx'

export default function Navbar({ params }) {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)
  const [menuPosition, setMenuPosition] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setMenuPosition(ref.current.clientHeight), []
  })

  function handleButtonClick() {
    setIsOpen(!isOpen)
  }

  function handleTabClick() {
    setIsOpen(false)
  }

  return (
    <div className="left-0 top-0 w-full">
      <div
        className="flex items-stretch border-b border-white/80 text-white"
        ref={ref}
      >
        <div>
          <button
            title="Back"
            className="group items-center border-r border-white/25 p-5 text-sm text-white transition duration-100 ease-in-out hover:bg-black/20"
            onClick={() => router.back()}
          >
            <ArrowLeftIcon className="h-6 w-6 opacity-50 transition duration-100 ease-in-out group-hover:opacity-100" />
          </button>
        </div>
        <div
          className={clsx('flex', 'items-stretch', {
            'bg-black': isOpen,
            'bg-opacity-20': isOpen,
          })}
        >
          <Address />
        </div>
        <div
          className={clsx('flex', 'flex-1', 'items-center', 'justify-end', {
            'bg-black': isOpen,
            'bg-opacity-20': isOpen,
          })}
        >
          <HamburgerMenu isOpen={isOpen} clicked={handleButtonClick} />
        </div>
        <div className="flex items-center">
          <UserButton />
        </div>
      </div>
      <Menu
        isOpen={isOpen}
        params={params}
        clicked={handleTabClick}
        position={menuPosition}
      />
    </div>
  )
}
