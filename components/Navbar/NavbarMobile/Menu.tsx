import React from 'react'
// import MenuItems from './MenuItems'
import TabGroupMobile from 'components/Navbar/NavbarMobile/TabGroupMobile'

export default function Menu(props) {
  //props.isOpen
  const styles = {
    container: {
      height: props.isOpen ? '100%' : 0,
      width: '100vw',
      display: 'flex',
      flexDirection: 'column' as 'column',
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
      className="blur"
      style={{
        ...styles.container,
        position: 'absolute',
        left: '0',
        top: '67px',
      }}
    >
      {<TabGroupMobile isOpen={props.isOpen} params={props.params} />}
    </div>
  )
}
