import React from 'react'
import MenuItems from './MenuItems'
import TabGroupMobile from 'components/Navbar/TabGroupMobile'

export default function Menu(props) {
  //props.isOpen
  //props.titleIndex
  //props.title
  //props.lessons => Array of lessons
  const styles = {
    container: {
      // position: 'absolute',
      // left:     0,
      // top:      0,
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
      {props.isOpen && (
        // <div style={styles.menuList}>
        //   <MenuItems
        //     index={props.titleIndex}
        //     title={props.title}
        //     lessons={props.lessons}
        //   />
        // </div>
        <TabGroupMobile params={props.params} />
      )}
    </div>
  )
}
