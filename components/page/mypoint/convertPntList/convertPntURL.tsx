'use client'
import React from 'react'
import Link from 'next/link'
import styles from './ConvertPntURL.module.css'

export default function ConvertPntURL() {
  const handleButtonClick = () => {
    window.open('https://open.standardchartered.co.kr/bc/bc_common?menuid=OBC04020100000000&langCode=KR', '_blank')
  }
  return (
    <div className='pb-[40px]'>
      <ul>
        {/* 삼성카드 보유 포인트 조회 */}
        <li className='relative border-b-[1px] border-t-[1px] border-b-[#e8e8e8] border-t-[#e8e8e8] mt-[-1px] bg-white'>
          <div className='block w-full h-[75px]'>
            {/* <input type="radio" id="switchPointList0" name='switchPointList' className={styles.point_switch_input}/> */}
            <label htmlFor="switchpointList0" className={styles.point_switch_samsung}>
              <span className='text-[16px] leading-[26px] table-cell align-middle text-left'>
                삼성카드 포인트
              </span>
              {/* 비회원일 경우 */}
              <span className='text-[16px] text-[#767676] leading-[26px] table-cell align-middle text-right'>
                비회원
              </span>
            </label>
          </div>
        </li>
        {/* ok캐시백 보유 포인트 조회 */}
        <li className='relative border-b-[1px] border-t-[1px] border-b-[#e8e8e8] border-t-[#e8e8e8] mt-[-1px] bg-white'>
          <div className='block w-full h-[75px]'>
            {/* <input type="radio" id="switchPointList0" name='switchPointList' className={styles.point_switch_input}/> */}
            <label htmlFor="switchpointList0" className={styles.point_switch_ok}>
              <span className='text-[16px] leading-[26px] table-cell align-middle text-left'>
                OK캐시백 포인트
              </span>
              {/* 회원일 경우 */}
              <span className="text-[16px] text-[#ea035c] font-bold leading-[26px] table-cell align-middle text-right
              after:bg-[url(../public/pntCell2.png)] after:bg-no-repeat; after:w-[8px] after:h-[15px] after:mt-[7px] after:ml-[5px] after:bg-contain after:inline-block">
                {20}
              </span>
            </label>
          </div>
        </li>
        {/* sc제일은행 포인트 바로가기 */}
        <li className='relative border-b-[1px] border-t-[1px] border-b-[#e8e8e8] border-t-[#e8e8e8] mt-[-1px] bg-white'>
          <div className='block w-full h-[75px]'>
            {/* <input type="radio" id="switchPointList0" name='switchPointList' className={styles.point_switch_input}/> */}
            <label htmlFor="switchpointList0" className={styles.point_switch_scbank}>
              <span className='text-[16px] leading-[26px] table-cell align-middle text-left'>
                360 리워드 포인트
              </span>
              {/* 회원일 경우 */}
              <button className={styles.point_switch_button} onClick={handleButtonClick}>
                  <span className='hidden'>sc제일은행 포인트 페이지로 이동 </span>
              </button>
            </label>
          </div>
        </li>
      </ul>
    </div>
  )
}
