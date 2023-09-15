'use client'

import React from 'react'
import styles from './MyCouponTop.module.css'
import { usePathname } from 'next/navigation';
import Link from 'next/link';


function MyCouponTop({attendCount}: {attendCount:number | undefined}) {

    const pathName = usePathname();
    
    return (
        <div className='p-0'>
            <ul className='flex'>
                <li className={`${pathName === "/benefits/myCoupon" ? styles.tab_on : styles.tab} flex-[1] table relative`}>
                    <Link href="/benefits/myCoupon">사용가능 쿠폰({attendCount})</Link>
                </li>
                <li className={`${pathName === "/benefits/endCoupon" ? styles.tab_on : styles.tab} flex-[1] table relative`}>
                    <Link href="/benefits/endCoupon">사용완료/기간만료 쿠폰(0)</Link>
                </li>
            </ul>
        </div>
    )
}

export default MyCouponTop