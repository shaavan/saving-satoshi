import React from 'react'
import TabGroupMobile from 'components/Navbar/NavbarMobile/TabGroupMobile'

export default function Menu(props) {
  //props.postition
  const styles = {
    container: {
      height: props.isOpen ? `calc(100% - ${props.postition}px)` : 0,
      transition: 'height 0.3s ease',
    },
  }

  return (
    <div
      className={`absolute top-[${props.postition}px] z-10 flex w-full flex-col blur`}
      style={styles.container}
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
