'use client'

import { useSession } from 'next-auth/react'
import React from 'react'

function LeaveUsingServiceTop() {
    const session = useSession();

    return (
        <div className='py-10 px-5'>
            <p className='text-xl leading-[30px] font-medium break-keep tracking-tighter'>
                <strong className={`font-bold relative align-top z-[1] pr-1 pl-[1px] after:content[''] after:inline-block after:absolute after:w-full after:h-[13px] after:bg-[#fed6e8] after:-z-10 after:bottom-0 after:left-0`}>
                    {session.data?.user.name}
                </strong>
                님이 현재 이용 중인
                <br/>
                신세계포인트 서비스입니다.
            </p>
        </div>
    )
}

export default LeaveUsingServiceTop