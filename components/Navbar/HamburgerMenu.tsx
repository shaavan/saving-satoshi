import React, { useState } from 'react'

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    setIsOpen(!isOpen)
  }

  const styles = {
    container: {
      height: '32px',
      width: '32px',
      display: 'flex',
      flexDirection: 'column' as 'column',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      padding: '4px',
      backgroundColor: 'red',
      overflow: 'hidden',
    },

    line: {
      height: '2px',
      width: '20px',
      background: 'black',
      transition: 'all 0.2s ease',
    },
    lineTop: {
      transform: isOpen ? ' translateX(-3px) rotate(-45deg)' : 'none',
      transformOrigin: 'top right',
      marginBottom: '5px',
    },
    lineMiddle: {
      opacity: isOpen ? 0 : 1,
      transform: isOpen ? 'translateX(+16px)' : 'none',
    },
    lineBottom: {
      transform: isOpen ? ' translateX(-1px) rotate(45deg)' : 'none',
      transformOrigin: 'top right',
      marginTop: '5px',
    },
  }

  return (
    <div onClick={handleClick} style={{ ...styles.container }}>
      <div style={{ ...styles.line, ...styles.lineTop }} />
      <div style={{ ...styles.line, ...styles.lineMiddle }} />
      <div style={{ ...styles.line, ...styles.lineBottom }} />
    </div>
  )
}
