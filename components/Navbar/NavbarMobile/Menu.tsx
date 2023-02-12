import React from 'react'
import TabGroupMobile from 'components/Navbar/NavbarMobile/TabGroupMobile'

export default function Menu(props) {
  const styles = {
    container: {
      height: props.isOpen ? 'calc(100% - 67px)' : 0,
      transition: 'height 0.3s ease',
    },
  }

  return (
    <div
      className="absolute top-[67px] z-10 flex w-full flex-col blur"
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
