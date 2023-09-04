import Link from 'next/link'
import React from 'react'

function FindIdResultInfo() {
  return (
    <div className='pt-0 px-5 pb-[60px]'>  
        <div className='border-t border-solid border-[#000] pt-6 px-0 pb-10'>
            <dl className='flex items-center'>
                <dt className='mt-[2px] mr-3 text-xs leading-[20px]'>아이디</dt>
                <dd className='text-base leading-[26px] font-bold'>
                    hnso1010
                </dd>
            </dl>
        </div>
        <div className='btn_box'>
            <Link href='/login' className='btn_primary'>로그인</Link>
        </div>
    </div>
  )
}

export default FindIdResultInfo