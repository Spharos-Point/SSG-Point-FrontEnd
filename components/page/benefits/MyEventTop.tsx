'use client'

import React from 'react'
import styles from './MyEventTop.module.css'
import { usePathname } from 'next/navigation';
import Link from 'next/link';


function MyEventTop({attendCount}: {attendCount:number | undefined}) {

    const pathName = usePathname();
    
    return (
        <div className='p-0'>
            <ul className='flex'>
                <li className={`${pathName === "/benefits/myEvent" ? styles.tab_on : styles.tab} flex-[1] table relative`}>
                    <Link href="/benefits/myEvent">참여한 이벤트({attendCount})</Link>
                </li>
                <li className={`${pathName === "/benefits/winEvent" ? styles.tab_on : styles.tab} flex-[1] table relative`}>
                    <Link href="/benefits/winEvent">당첨 확인(0)</Link>
                </li>
            </ul>
        </div>
    )
}

export default MyEventTop