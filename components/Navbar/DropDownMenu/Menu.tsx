import React from 'react'
// import MenuItems from './MenuItems'
import TabGroupMobile from 'components/Navbar/TabGroupMobile'

export default function Menu(props) {
  //props.isOpen
  const styles = {
    container: {
      height: props.isOpen ? '100%' : 0,
      width: '100vw',
      display: 'flex',
      flexDirection: 'column' as 'column',
      background: 'black',
      opacity: 0.95,
      color: '#fafafa',
      transition: 'height 0.3s ease',
      zIndex: 2,
    },
    menuList: {
      paddingTop: '3rem',
    },
  }

  return (
    <div
      style={{
        ...styles.container,
        position: 'absolute',
        left: '0',
        top: '67px',
      }}
    >
      {props.isOpen && <TabGroupMobile params={props.params} />}
    </div>
  )
}
