'use client'

import React from 'react'
import styles from './SideMenu.module.css'


function SideMenu(props : {isOpened: Boolean, setIsOpened: React.Dispatch<React.SetStateAction<Boolean>>}) {

    const {isOpened, setIsOpened} = props;

  return (
    <>  
        <div className={isOpened ? `${styles.sidemenuwrap} ${styles.open}` : `${styles.sidemenuwrap}`}></div>
        <div className={isOpened ? styles.overlay : ''} onClick={() => setIsOpened(false)}></div>
    </>   
  )
}

export default SideMenu;