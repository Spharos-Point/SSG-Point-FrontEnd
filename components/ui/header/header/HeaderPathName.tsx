'use client'

import React from 'react'
import { useRouter } from 'next/navigation';


function HeaderPathName(props : {pathname: string}) {

  const {pathname} = props;
  const router = useRouter();


  return (
    <div>
      <button className='tx-5' onClick={() => router.back()}>버튼</button>
      <span>
        {
          pathname === '/login'? '로그인' : pathname === '/coupon' ? '쿠폰' : 'other page'
        }
      </span>
    </div>
  )
}

export default HeaderPathName