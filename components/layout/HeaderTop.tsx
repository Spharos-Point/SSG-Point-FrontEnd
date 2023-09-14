'use client'

import Link from 'next/link'
import React, {useEffect, useState} from 'react'

import {usePathname} from 'next/navigation'
import SideMenu from '../widget/SideMenu'
import Logo from '../ui/header/Logo'
import HeaderPathName from '../ui/header/HeaderPathName'
import { signOut, useSession } from 'next-auth/react'
import { pageTitleData } from '@/data/pageTitleData'
import Swal from 'sweetalert2'


function HeaderTop() {
    const [isOpened, setIsOpened] = useState<Boolean>(false)
    const pathname = usePathname();
    const session = useSession();
    console.log(session.data?.user.name)

    const handleSideMenu = () => {
        setIsOpened(!isOpened)
    }

    // 헤더 경로
    const [title, setTitle] = useState<string>('');

    useEffect(() =>  {
        if(session.status === 'authenticated') {
            Swal.fire({
                text: `${session?.data.user.name}님 환영합니다.`,
                toast: true,
                position: "top",
                showConfirmButton: true,
                confirmButtonText: "확인",
                timer: 5000,
                timerProgressBar: false,
                customClass: {
                container: "mySwal-only-confirm",
                confirmButton: "mySwalConfirmButtonOnly",
                },
            });
        }
        const getTitle = () => {
            const result = pageTitleData.find((item) => item.path === pathname)?.title
            if(result === undefined) {
                return setTitle('신세계 포인트')
            }
            setTitle(result)
        }
        getTitle()
    }, [pathname, session.status])

  return ( 
    <>
        <SideMenu isOpened={isOpened} setIsOpened={setIsOpened}/>
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
                        <button className='flex items-center cursor-pointer align-middle'>
                            <span className='mr-[6px] relative w-[27px] bg-barcode bg-no-repeat bg-cover inline-block h-[15px] -indent-[999em] align-top'></span>
                            <strong className='font-bold text-[#000] text-sm leading-[24px] -mt-[2px]'>0</strong>
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