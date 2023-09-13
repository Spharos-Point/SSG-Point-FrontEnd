'use client'
import React, { useState } from 'react'
import styles from './MyPage.module.css'
import { sideMenuBenefitData, sideMenuLoungeData, sideMenuMyInfoData, sideMenuMypointData } from '@/data/sideMenuData'
import { sideMenuType } from '@/types/sideMenuType'
import Link from 'next/link'
import Image from 'next/image'

function MyPage() {
    const [menuClick, setMenuClick] = useState(false);

    const handleMenuOnClick = (on:boolean) => {
        setMenuClick(!on);
    }

    return (
        <div className='pt-6 px-5 pb-0'>
            <h3 className='pt-0 pr-0 pb-2 pl-0 text-base leading-[26px] border-b border-solid border-[#000] font-bold'>
                마이페이지
            </h3>
            <div>
                <div className='border-b border-solid border-[#e8e8e8]'>
                    <button className={`${menuClick === false ? `${styles.acc_btn} ${styles.on}` :`${styles.acc_btn}`} relative block w-full h-12 text-left text-[13px] leading-6 text-[#000] font-semibold`}>
                        마이 포인트
                        <span className='absolute right-0 top-5 w-3 h-2 bg-sideonoff bg-no-repeat bg-cover opacity-50 indent-[-999em] text-transparent overflow-hidden' onClick={() => handleMenuOnClick(menuClick)}></span>
                    </button>
                    {
                        menuClick === false
                        ?
                        <div className='pb-[34px] -mt-[10px]'>
                            <ul>
                                {
                                    sideMenuMypointData.map((items:sideMenuType) => (
                                        <li key={items.id} className='inline-block align-top pt-5 w-[50%]'>
                                            <Link className='flex items-center h-5 text-[12px] leading-[18px] align-top font-bold' href={items.url}>
                                                <Image
                                                    className='mr-1 w-5 h-5'
                                                    src={items.img}
                                                    alt={items.title}
                                                    width={20}
                                                    height={20}
                                                />
                                                {items.title}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        :
                        ''
                    }
                </div>
                <div className='border-b border-solid border-[#e8e8e8]'>
                    <button className={`${menuClick === true ? `${styles.acc_btn} ${styles.on}` :`${styles.acc_btn}`} relative block w-full h-12 text-left text-[13px] leading-6 text-[#000] font-semibold`}>
                        마이 혜택
                        <span className='absolute right-0 top-5 w-3 h-2 bg-sideonoff bg-no-repeat bg-cover opacity-50 indent-[-999em] text-transparent overflow-hidden' onClick={() => handleMenuOnClick(menuClick)}></span>
                    </button>
                    {
                        menuClick === true
                        ?
                        <div className='pb-[34px] -mt-[10px]'>
                            <ul>
                                {
                                    sideMenuBenefitData.map((items:sideMenuType) => (
                                        <li key={items.id} className='inline-block align-top pt-5 w-[50%]'>
                                            <Link className='flex items-center h-5 text-[12px] leading-[18px] align-top font-bold' href={items.url}>
                                                <Image
                                                    className='mr-1 w-5 h-5'
                                                    src={items.img}
                                                    alt={items.title}
                                                    width={20}
                                                    height={20}
                                                />
                                                {items.title}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        :
                        ''
                    }
                </div>
                <div className='border-b border-solid border-[#e8e8e8]'>
                    <button className={`${menuClick === true ? `${styles.acc_btn} ${styles.on}` :`${styles.acc_btn}`} relative block w-full h-12 text-left text-[13px] leading-6 text-[#000] font-semibold`}>
                        마이 라운지
                        <span className='absolute right-0 top-5 w-3 h-2 bg-sideonoff bg-no-repeat bg-cover opacity-50 indent-[-999em] text-transparent overflow-hidden' onClick={() => handleMenuOnClick(menuClick)}></span>
                    </button>
                    {
                        menuClick === true
                        ?
                        <div className='pb-[34px] -mt-[10px]'>
                            <ul>
                                {
                                    sideMenuLoungeData.map((items:sideMenuType) => (
                                        <li key={items.id} className='inline-block align-top pt-5 w-[50%]'>
                                            <Link className='flex items-center h-5 text-[12px] leading-[18px] align-top font-bold' href={items.url}>
                                                <Image
                                                    className='mr-1 w-5 h-5'
                                                    src={items.img}
                                                    alt={items.title}
                                                    width={20}
                                                    height={20}
                                                />
                                                {items.title}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        :
                        ''
                    }
                </div>
                <div className='border-b border-solid border-[#e8e8e8]'>
                    <button className={`${menuClick === true ? `${styles.acc_btn} ${styles.on}` :`${styles.acc_btn}`} relative block w-full h-12 text-left text-[13px] leading-6 text-[#000] font-semibold`}>
                        마이 회원정보
                        <span className='absolute right-0 top-5 w-3 h-2 bg-sideonoff bg-no-repeat bg-cover opacity-50 indent-[-999em] text-transparent overflow-hidden' onClick={() => handleMenuOnClick(menuClick)}></span>
                    </button>
                    {
                        menuClick === true 
                        ?
                        <div className='pb-[34px] -mt-[10px]'>
                            <ul>
                                {
                                    sideMenuMyInfoData.map((items:sideMenuType) => (
                                        <li key={items.id} className='inline-block align-top pt-5 w-[50%]'>
                                            <Link className='flex items-center h-5 text-[12px] leading-[18px] align-top font-bold' href={items.url}>
                                                <Image
                                                    className='mr-1 w-5 h-5'
                                                    src={items.img}
                                                    alt={items.title}
                                                    width={20}
                                                    height={20}
                                                />
                                                {items.title}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        :
                        ''
                    }
                </div>
            </div>
        </div>
    )
}

export default MyPage