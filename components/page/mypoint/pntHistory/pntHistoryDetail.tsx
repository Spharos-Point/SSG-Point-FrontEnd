'use client'
import React, {useState, useEffect}from 'react'
import styles from './pntHistory.module.css'

export default function PntHistoryDetail(  ) {
  // const filteredByPointType = selectedPointType
  // ? filteredData.filter(item => item.pointtype === selectedPointType)
  // : filteredData;

  return (
    <ul className='pr-[5px] pl-[8px]'>
      {/* {filteredByPointType.map((item) => (
        <li
          key={item.point_ID}
          className='relative border-b-[1px] flex items-center min-h-[74px] py-[5px] tracking-tight'
        >
          <p className={styles.p_cancel}>
            {item.point}P
            <span className='pl-[23px] text-[11px] leading-[11px] font-normal break-keep'>
              {item.pointtype === '1' ? '적립/사용' : item.pointtype === '2' ? '선물' : '전환'}
            </span>
          </p>

          <p className={styles.p_lacation}>
            <span className='block w-full pt-[3px] text-[10px] text-[#767676] leading-[18px]'>
              포인트 사용 타입 : {item.pointused === '1' ? '적립' : '사용'}
            </span>

            <span className='block text-[14px] leading-[24px]'>
              포인트 타입 : {item.pointtype}
            </span>
          </p>
          <div className='absolute top-[16px] right-[5px]'>
            <p className='text-[11px] leading-[19px] text-[#767676] min-w-[62px]'>
              {item.pnt_create_at}
            </p>
          </div>
        </li>
      ))} */}
    </ul>
  );
}

