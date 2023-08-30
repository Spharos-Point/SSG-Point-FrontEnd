'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './JoinAuth.module.css'
import JoinAuthPhoneForm from './joinAuthPhoneForm';
import JoinAuthCardForm from './joinAuthCardForm';

function JoinAuth() {

  const [activeTab, setActiveTab] = useState('phone');

  const handleTabClick = (tab:string) => {
    setActiveTab(tab);
  }
  
  return (
    <>
        <ul className={`${styles.auth_tab_menu} flex relative h-20 my-0 mx-5`}>
            <li 
              role='tablist' 
              aria-selected='true' 
              className={`${activeTab === 'phone' ? `${styles.on}`:''} flex grow shrink basis-0 p-0.5 rounded-lg h-full z-1 items-center justify-center`}
              onClick={() => handleTabClick('phone')}
            >
              <Link href='' className={`${styles.phone} relative block w-full h-full rounded-md pt-14 bg-white box-border text-xs leading-4 text-gray-500 text-center`}>휴대폰인증</Link>
            </li>
            <li 
              role='tab' 
              aria-selected='false' 
              className={`${activeTab === 'card' ? `${styles.on}`:''} flex grow shrink basis-0 p-0.5 rounded-lg h-full z-1 items-center justify-center`}
              onClick={() => handleTabClick('card')}
            >
              <Link href='' className={`${styles.card} relative block w-full h-full rounded-md pt-14 bg-white box-border text-xs leading-4 text-gray-500 text-center`}>카드인증</Link>  
            </li>
        </ul>
        {
            activeTab === 'phone'? <JoinAuthPhoneForm/> : <JoinAuthCardForm/>
        }
    </>
  )
}

export default JoinAuth