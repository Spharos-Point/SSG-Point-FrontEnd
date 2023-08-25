'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Cscenter_HeaderBottom() {

    const pathname = usePathname();

    return (
            <div className='flex justify-items-stretch justify-around text-[#767676] leading-5 border-b-[1px]'>
                <button className='text-[15px] w-full py-[12px]'><Link href={"/cscenter/notice"}>공지사항</Link></button>
                <button className='text-[15px] w-full py-[12px]'><Link href={"/cscenter/faq"}>FAQ</Link></button>
                <button className='text-[15px] w-full py-[12px]'><Link href={"/cscenter/consult/write"}>1:1 상담</Link></button>
            </div>

    )
}

export default Cscenter_HeaderBottom
