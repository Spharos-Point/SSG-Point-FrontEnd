import React from 'react'
import styles from './pntHistory.module.css'

export default function PntHistoryDetail() {
  return (
    <ul className='pr-[5px] pl-[8px]'>
        <li className='flex flex-wrap item-center min-h-[74px] py-[5px] relative border-b-[1px]'>
            <p className={styles.p_cancel}>-1P<span className='pl-[23px] text-[11px] leading-[11px] font-normal break-keep'>선물사용취소</span></p>
            <p className='flex items-center text-[14px] leading-[24px] px-[8px]'>
                <span >보낸 선물 : 거절</span>
                <span>양*민(ID : yc*****)</span>
            </p>
            <div>2023-08-10</div>
        </li>        
    </ul>
  )
}

