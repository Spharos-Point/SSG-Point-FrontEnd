'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Cscenter_HeaderBottom() {

    const pathname = usePathname();

    return (
    <div className='gnb_depth2 on customer'>
        <ul>
            <li role='presentation' className={'on'}><Link href={"/cscenter/notice"} role='tab' aria-selected={"true"}>공지사항</Link></li>
            <li role='presentation' className={''}><Link href={"/cscenter/faq"} role='tab' aria-selected={"false"}>FAQ</Link></li>
            <li role='presentation' className={''}><Link href={"/cscenter/consult/write"} role='tab' aria-selected={"false"}>1:1상담</Link></li>
        </ul>
    </div>
    )
}

export default Cscenter_HeaderBottom