'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function FindIdResultInfo() {

  const [loginId, setLoginId] = useState();

  useEffect(() => {
    if(typeof window !== 'undefined') {
      const jsonLoginid = sessionStorage.getItem('loginId') || '';
      const loginId = JSON.parse(jsonLoginid);
      
        setLoginId(loginId);
    }    
  }, [])
  
  return (
    <div className='pt-0 px-5 pb-[60px]'>  
        <div className='border-t border-solid border-[#000] pt-6 px-0 pb-10'>
            <dl className='flex items-center'>
                <dt className='mt-[2px] mr-3 text-xs leading-[20px]'>아이디</dt>
                <dd className='text-base leading-[26px] font-bold'>
                  {loginId}
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