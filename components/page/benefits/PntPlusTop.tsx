'use client'

import React from 'react'
import styles from './PntPlusTop.module.css'
import { usePathname } from 'next/navigation';
import Link from 'next/link';


function PntPlusTop() {

    const pathName = usePathname();
    
    return (
        <div className='p-0'>
            <ul className='flex'>
                <li className={`${pathName === "/benefits/pntPlus/attend" ? styles.tab_on : styles.tab} flex-[1] table relative`}>
                    <Link href="/benefits/pntPlus/attend">출석체크</Link>
                </li>
                <li className={`${pathName === "/benefits/pntPlus/roulette" ? styles.tab_on : styles.tab} flex-[1] table relative`}>
                    <Link href="/benefits/pntPlus/roulette">럭키룰렛</Link>
                </li>
            </ul>
        </div>
    )
}

export default PntPlusTop