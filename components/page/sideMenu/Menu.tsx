import { sideMenuCustomerData, sideMenuMembershipData, sideMenuPointData } from '@/data/sideMenuData'
import { sideMenuType } from '@/types/sideMenuType'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from './Menu.module.css'

function Menu() {
    return (
        <div className='pt-10 px-5 pb-0'>
            <h3 className='pt-0 pr-0 pb-2 pl-0 text-base leading-[26px] border-b border-solid border-[#000] font-bold'>
                신세계포인트
            </h3>
            <ul>
                {
                    sideMenuPointData.map((items:sideMenuType) => (
                        <li  key={items.id} className='inline-block align-top pt-5 w-[50%]'>
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
            <h3 className='pt-0 pr-0 pb-2 pl-0 text-base leading-[26px] border-b border-solid border-[#000] font-bold mt-[50px]'>
                멤버십 서비스
            </h3>
            <ul className={styles.menu_list} >
                {
                    sideMenuMembershipData.map((items:sideMenuType) => (
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
            <h3 className='pt-0 pr-0 pb-2 pl-0 text-base leading-[26px] border-b border-solid border-[#000] font-bold mt-[50px]'>
                고객센터
            </h3>
            <ul>
                {
                    sideMenuCustomerData.map((items:sideMenuType) => (
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
    )
}

export default Menu