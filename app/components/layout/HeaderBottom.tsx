'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function HeaderBottom() {

    const pathname = usePathname();

    return (
        <div className='header_bottom p-4'>
            <nav>
                <ul className='flex gap-4 justify-center items-center'>
                    <li className={ pathname === '/coupon' ? `text-sm font-medium active` : `text-sm font-medium`}>
                        <Link href='/coupon'>쿠폰</Link>
                    </li>
                    <li className={ pathname === '/' ? `text-sm font-medium active` : `text-sm font-medium`}>
                        <Link href='/'>홈</Link>
                    </li>

                </ul>
            </nav>    
        </div>
    )
}

export default HeaderBottom