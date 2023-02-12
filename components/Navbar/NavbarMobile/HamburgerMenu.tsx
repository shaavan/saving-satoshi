import React, { useState } from 'react'

export default function HamburgerMenu(props) {
  const styles = {
    line: {
      height: '2px',
      width: '20px',
      background: 'white',
      transition: 'all 0.2s ease',
    },
    lineTop: {
      transform: props.isOpen
        ? ' translateX(0) translateY(-1px) rotate(-45deg)'
        : 'none',
      transformOrigin: 'top right',
      marginBottom: '5px',
    },
    lineBottom: {
      transform: props.isOpen
        ? ' translateX(1px) translateY(4px) rotate(45deg)'
        : 'none',
      transformOrigin: 'top right',
      marginTop: '2px',
      width: props.isOpen ? '20px' : '15px',
    },
  }

  return (
    <div
      className="mr flex h-8 w-10 cursor-pointer flex-col items-start justify-center overflow-hidden border-r border-white/25 p-1"
      onClick={props.clicked}
    >
      <div style={{ ...styles.line, ...styles.lineTop }} />
      <div style={{ ...styles.line, ...styles.lineBottom }} />
    </div>
  )
}
