import { findIdNotice } from '@/data/noticeData'
import { FindIdNotice } from '@/types/noticeDataType'
import React from 'react'

function FindIdBottom() {
  return (
    <div className='pt-8 px-5 pb-20'>
        <h3 className='pb-2 text-sm leading-[24px] font-bold'>[유의사항]</h3>
        <ul className="">
            {
                findIdNotice.map((items:FindIdNotice) => (
                    <li 
                        key={items.id} 
                        className="relative text-[11px] leading-5 text-[#767676] pl-[7px] tracking-tighter 
                        before:content-['·'] before:absolute before:left-0 before:top-0 before:leading-[20px] before:text-xs before:text-[#767676] before:font-bold"
                    >
                        {items.content}
                    </li>
                ))
            }           
        </ul>
    </div>
  )
}

export default FindIdBottom