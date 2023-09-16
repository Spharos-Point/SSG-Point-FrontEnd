import Auth from '@/components/page/auth/Auth'
import Note from '@/components/page/note/note'
import { findNotice } from '@/data/noticeData'
import React from 'react'

function page() {
    return (
        <>
            <div className='top_cnt1 py-10 px-5'>
                <p className='text-2xl leading-9 font-bold'>본인인증</p>
                <p className='text-xs leading-5 text-gray-500 mt-2'> 개인정보 보호를 위해 본인인증을 진행하고 있습니다. 자주 사용하시는 인증수단을 선택해주세요.</p>
            </div>
            <Auth/> 
            <Note note={findNotice}/>
        </>
    )
}

export default page