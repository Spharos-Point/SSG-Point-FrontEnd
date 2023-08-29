'use client'
import React from 'react'
import styles from './pntHistory.module.css'

export default function PntHistoryPonintList() {
  return (
    <>
    <div className='pt-[25px] pb-[60px] pr-[20px] pl-[20px]'>
      <div className={styles.sort_radio_box}>
        <div className={styles.sort_box}><input type="radio" className='hidden'>
          </input><label>
            전체</label></div>
        <div className={styles.sort_box}><input type="radio" className='hidden'>
          </input><label>
            적립/사용</label></div>
        <div className={styles.sort_box}><input type="radio" className='hidden'>
          </input><label>
            선물</label></div>
        <div className={styles.sort_box}><input type="radio" className='hidden'>
          </input><label>
            전환</label></div>
      </div>

      <div className={styles.class_sch}>
        <div className='realtive inline-block mr-[5px]'>
            <select title='영수증 조회 기간 선택' className=
            'box-border pr-[32px] pl-[6px] relateive block z-[2] w-full h-[30px] text-[13px] '>
              <option value="7">1주일</option>
              <option value="1">1개월</option>
              <option value="3">3개월</option>
              <option value="6">6개월</option>
              {/* <option disabled='disabled' value="0">직접입력</option> */}
            </select></div>
        <div className='box-border text-[12px] w-[calc(100%-118px)]'>
          <p className='ff_lato'>2023-02-28 ~ 2023-08-29</p>
        </div>
        <button className={styles.point_control}>
          <span className='text-[0px]'>필터</span>
        </button>
      </div>
      <div className='felx-wrap'>
        <div className='flex items-center mr-[16px] w-full h-[36px] box-border px-[8px] bg-[#f8f8f8]'>
          <p className={styles.p_accumulate}>
            <span className='text-[13px]'>적립</span>
            <span className={styles.ff_lato}>110p</span>
          </p>
          <p className={styles.p_use}>
            <span className='text-[13px]'>사용</span>
            <span className={styles.ff_lato}>620p</span>
          </p>
        </div>
        <div></div>
      </div>
    </div>
    </>
  )
}
