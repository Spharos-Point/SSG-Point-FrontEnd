'use client'

import React from 'react'
import styles from './MyCouponTop.module.css'
import { usePathname } from 'next/navigation';
import Link from 'next/link';


function ServiceAgreeTop() {

    const pathName = usePathname();
    
    return (
        <div className='p-0'>
            <ul className='flex'>
                <li className={`${pathName === "/myinfo/serviceAgree" ? styles.tab_on : styles.tab} flex-[1] table relative`}>
                    <Link href="/myinfo/serviceAgree">서비스 동의</Link>
                </li>
                <li className={`${pathName === "/myinfo/clubAgree" ? styles.tab_on : styles.tab} flex-[1] table relative`}>
                    <Link href="/myinfo/clubAgree">클럽 동의</Link>
                </li>
            </ul>
        </div>
    )
}

export default ServiceAgreeTop