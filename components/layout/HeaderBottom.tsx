'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function HeaderBottom() {

    const pathname = usePathname();

    return (
        <div className="main_page_btn">
            <ul>
                <li className={ pathname === '/coupon' ? `text-sm font-medium active` : `text-base font-medium`}>
                    <Link href='/coupon'>쿠폰</Link>
                </li>
                <li className={ pathname === '/' ? `text-sm font-medium active` : `text-base font-medium`}>
                    <Link href='/'>홈</Link>
                </li>

            </ul>
        </div>
    )
}

export default HeaderBottom