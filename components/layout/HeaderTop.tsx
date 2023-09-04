'use client'

import Link from 'next/link'
import React, {useState} from 'react'

import {usePathname} from 'next/navigation'
import SideMenu from '../widget/SideMenu'
import Logo from '../ui/header/Logo'
import HeaderPathName from '../ui/header/HeaderPathName'
import { signOut, useSession } from 'next-auth/react'


function HeaderTop() {
    const [isLogin, setIsLogin] = useState<Boolean>(false)
    const [isOpened, setIsOpened] = useState<Boolean>(false)
    const pathname = usePathname();
    const session = useSession();

    const handleSideMenu = () => {
        setIsOpened(!isOpened)
    }



  return ( 
    <>
        <SideMenu isOpened={isOpened} setIsOpened={setIsOpened}/>
        <div className='header_top'>
            { 
                pathname === '/' 
                ? 
                <Logo url={'/'} imgUrl={'https://m.shinsegaepoint.com/img/logo_header.840b502c.gif'} imgAlt={'신세계포인트 로고'} />
                :
                <HeaderPathName pathname={pathname}/>
            }
            <ul className='gnb flex'>
                <li className='login_btn'>
                    {
                        session.status === 'authenticated'
                        ?
                        // <HeaderUserStatus />
                        <p onClick={()=>signOut(
                            {callbackUrl: 'http://localhost:3000/'}
                          )}>로그아웃 : {session.data.user.user_name}</p> 
                        :
                        <Link href='/login'>로그인</Link>
                    }
                </li>
                <li onClick={handleSideMenu} className='ml-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path d="M4 5H20" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M4 12L20 12" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M4 19H20" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
                    </svg>            
                </li>
            </ul>
        </div>
    </>
  )
}

export default HeaderTop