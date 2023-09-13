import React from 'react'
import styles from './pntHistory.module.css'

export default function PntHistoryDetail() {
  return (
      <ul className='pr-[5px] pl-[8px]'>
        {/* 선물 사용 취소 */}
          <li className='relative border-b-[1px] flex items-center min-h-[74px] py-[5px] tracking-tight'>
              <p className={styles.p_cancel}>-1P
                <span className='pl-[23px] text-[11px] leading-[11px] font-normal break-keep'>선물사용취소</span>
              </p>
              <p className={styles.p_lacation}>
                  <span className='block w-full pt-[3px] text-[10px] text-[#767676] leading-[18px]'>보낸 선물 : 거절</span>
                  <span className='block text-[14px] leading-[24px]'>양*민(ID : yc*****)</span>
              </p>
              <div className='absolute top-[16px] right-[5px]'>
                <p className='text-[11px] leading-[19px] text-[#767676] min-w-[62px]'>2023-08-10</p>
              </div>
          </li>
      </ul>
  )
}

