'use client'

import React from 'react'
import { useRouter } from 'next/navigation';


function HeaderPathName(props : {pathname: string}) {

  const {pathname} = props;
  const router = useRouter();


  return (
    <>
      <button className='back_btn' onClick={() => router.back()}></button>
      <div className="pl-8 pb-3.5 font-bold text-base">
        {
          pathname === '/login'? '로그인' : pathname === '/coupon' ? '쿠폰' : 'other page'
        }
      </div>
      
    </>
  )
}

export default HeaderPathName