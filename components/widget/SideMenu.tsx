'use client'

import React from 'react'
import styles from './SideMenu.module.css'
import { signOut, useSession } from 'next-auth/react';
import Logo from '../ui/header/Logo';
import Link from 'next/link';


function SideMenu(props : {isOpened: Boolean, setIsOpened: React.Dispatch<React.SetStateAction<Boolean>>}) {

    const {isOpened, setIsOpened} = props;
    const session = useSession();

  return (
    <>  
      <div className={isOpened ? `${styles.sidemenuwrap} ${styles.open}` : `${styles.sidemenuwrap}`}>
          <div className='fixed top-0 w-[85%] min-w-[320px] h-full transition-all duration-200'>
            <div className='h-[60px] pt-4 pl-[20px] box-border'>
              <div className='inline-block w-[57px] h-9 pt-2 pl-7'>
                <Logo 
                  url={'/'} 
                  imgUrl={'https://m.shinsegaepoint.com/img/logo_header.840b502c.gif'} 
                  imgAlt={'신세계포인트 로고'} 
                />
              </div>
            </div>  
            <div className='relative box-border'>
              {
                session.status === 'authenticated'
                ?
                <div className='pt-[18px] px-5 pb-6'>
                  <div className='flex items-center justify-between'>
                    <p className='text-lg leading-[26px]'>
                      <strong className={`relative align-top z-[1] pr-1 pl-[1px] after:content[''] after:inline-block after:absolute after:w-full after:h-[13px] after:bg-[#ffdfb5] after:-z-10 after:bottom-0 after:left-0`}>
                        {session.data.user.name}&nbsp;
                      </strong>
                        님&nbsp;반갑습니다.
                    </p>
                  </div>
                  <p className={`mt-4 text-xl leading-[24px] flex items-center text-[#000] font-bold after:content[''] after:inline-block after:ml-[7px] after:w-[27px] after:h-6 after:bg-sidePoint after:bg-no-repeat after:bg-cover`}>
                    0
                  </p>
                  <div className={styles.btn_box}>
                      <p 
                        className={styles.btn0}
                        onClick={()=>signOut({callbackUrl: 'http://localhost:3000/'})}
                      >로그아웃</p> 
                    <Link href='' className={styles.btn}>마이페이지</Link>
                  </div>
                </div>
                :
                <div className='pt-[18px] px-[20px] pb-6'>
                  <div className='flex items-center justify-between'>
                    <p className='text-lg leading-[26px] font-bold'>로그인해 주세요</p>
                  </div>
                  <div className={styles.btn_box}>
                    <Link href='/login' className={styles.btn_primary}>로그인</Link>
                    <Link href='/member/join' className={styles.btn}>회원가입</Link>
                  </div>
                </div>
              }
            </div>
          </div>
      </div>
      <div className={isOpened ? styles.overlay : ''} onClick={() => setIsOpened(false)}></div>
    </>   
  )
}

export default SideMenu;