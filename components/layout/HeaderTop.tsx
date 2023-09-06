'use client'

import Link from 'next/link'
import React, {useEffect, useState} from 'react'

import {usePathname} from 'next/navigation'
import SideMenu from '../widget/SideMenu'
import Logo from '../ui/header/Logo'
import HeaderPathName from '../ui/header/HeaderPathName'
import { signOut, useSession } from 'next-auth/react'
import { pageTitleData } from '@/data/pageTitleData'


function HeaderTop() {
    const [isOpened, setIsOpened] = useState<Boolean>(false)
    const pathname = usePathname();
    const session = useSession();

    const handleSideMenu = () => {
        setIsOpened(!isOpened)
    }

    // 헤더 경로
    const [title, setTitle] = useState<string>('');

    useEffect(() =>  {
        const getTitle = () => {
            const result = pageTitleData.find((item) => item.path === pathname)?.title
            if(result === undefined) {
                return setTitle('신세계 포인트')
            }
            setTitle(result)
        }
        getTitle()
    }, [pathname])

  return ( 
    <>
        <SideMenu isOpened={isOpened} setIsOpened={setIsOpened}/>
        <div className='header_top'>
            { 
                pathname === '/' 
                ? 
                <Logo url={'/'} imgUrl={'https://m.shinsegaepoint.com/img/logo_header.840b502c.gif'} imgAlt={'신세계포인트 로고'} />
                :
                <HeaderPathName title={title}/>
            }
            <ul className='gnb flex'>
                <li className='login_btn'>
                    {
                        session.status === 'authenticated'
                        ?
                        // <HeaderUserStatus />
                        <p onClick={()=>signOut(
                            {callbackUrl: 'http://localhost:3000/'}
                            )}>로그아웃
                        </p> 
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