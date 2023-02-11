import React, { useState } from 'react'

export default function HamburgerMenu(props) {
  const styles = {
    container: {
      height: '32px',
      width: '32px',
      display: 'flex',
      flexDirection: 'column' as 'column',
      justifyContent: 'center',
      alignItems: 'left',
      cursor: 'pointer',
      padding: '4px',
      backgroundColor: 'blur',
      overflow: 'hidden',
    },

    line: {
      height: '2px',
      width: '20px',
      background: 'white',
      transition: 'all 0.2s ease',
    },
    lineTop: {
      transform: props.isOpen
        ? ' translateX(0) translateY(-3px) rotate(-45deg)'
        : 'none',
      transformOrigin: 'top right',
      marginBottom: '5px',
    },
    lineMiddle: {
      opacity: props.isOpen ? 0 : 1,
      transform: props.isOpen ? 'translateX(+16px)' : 'none',
    },
    lineBottom: {
      transform: props.isOpen
        ? ' translateX(1px) translateY(2px) rotate(45deg)'
        : 'none',
      transformOrigin: 'top right',
      marginTop: '2px',
      width: props.isOpen ? '20px' : '15px',
    },
  }

  return (
    <div
      className="mr-5"
      onClick={props.clicked}
      style={{ ...styles.container }}
    >
      <div style={{ ...styles.line, ...styles.lineTop }} />
      {/* <div style={{ ...styles.line, ...styles.lineMiddle }} /> */}
      <div style={{ ...styles.line, ...styles.lineBottom }} />
    </div>
  )
}
