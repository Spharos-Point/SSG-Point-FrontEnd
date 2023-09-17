import ModifyInfo from '@/components/page/myinfo/ModifyInfo'
import React from 'react'

function page() {
    return (
        <>
            <div className='top_cnt1 py-10 px-5'>
                <p className='text-2xl leading-9 font-bold'>회원정보 수정</p>
                <p className='text-xs leading-5 text-gray-500 mt-2'> 정확한 회원정보를 입력해주세요.</p>
            </div>
            <ModifyInfo/>
        </>
    )
}

export default page