'use client'

import React from 'react'
import { useRouter } from 'next/navigation';

function HeaderPathName(props : {title: string}) {

  const {title} = props;
  const router = useRouter();

  return (
    <>
      <button className='back_btn' onClick={() => router.back()}></button>
      <div className="pt-2.5 font-bold text-base">
        {title}
      </div>
      
    </>
  )
}

export default HeaderPathName