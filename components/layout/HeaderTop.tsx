'use client'

import Link from 'next/link'
import React, {useEffect, useState} from 'react'

import {usePathname} from 'next/navigation'
import SideMenu from '../widget/SideMenu'
import Logo from '../ui/header/Logo'
import HeaderPathName from '../ui/header/HeaderPathName'
import { useSession } from 'next-auth/react'
import { pageTitleData } from '@/data/pageTitleData'
import Barcode from './Barcode'

function HeaderTop() {
    const [isOpened, setIsOpened] = useState<Boolean>(false)
    const [showBarcode, setShowBarcode] = useState<boolean>(false)
    const pathname = usePathname();
    const session = useSession();
    const handleSideMenu = () => {
        setIsOpened(!isOpened)
    }

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
        { session.status === 'authenticated' && <Barcode showBarcode={showBarcode} setShowBarcode={setShowBarcode} cardNumber={session.data?.user.barcode}/> }
        <div className='header_top'>
            { 
                pathname === '/' 
                ? 
                <Logo url={'/'} imgUrl={'https://storage.googleapis.com/team3_spharos_bucket/img/logo/logo_ssgont.gif'} imgAlt={'신세계포인트 로고'} />
                :
                <HeaderPathName title={title}/>
            }
            <ul className='gnb flex'>
                <li className='login_btn'>
                    {
                        session.status === 'authenticated'
                        ?
                        <button className='flex items-center cursor-pointer align-middle' onClick={()=>setShowBarcode(!showBarcode)}>
                            <span className='mr-[6px] relative w-[27px] bg-barcode bg-no-repeat bg-cover inline-block h-[15px] -indent-[999em] align-top'></span>
                            <strong className='font-bold text-[#000] text-sm leading-[24px] -mt-[2px]'>{session.data?.user.userPoint??0}</strong>
                            <span className='w-6 h-6 -indent-[999em] ml-1 bg-point bg-cover'></span>
                        </button>
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