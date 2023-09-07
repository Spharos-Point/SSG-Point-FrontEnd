'use client'
import React, { useState } from 'react'
import styles from './pntHistory.module.css'
import PntHistoryDetail from './pntHistoryDetail'
import PntHistorySortDate from '@/components/ui/Date/PntHistorySortDate'

export default function PntHistoryPonintList() {
  const [selectedOption, setSelectedOption] = useState('1');
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='pt-[25px] pb-[60px] pr-[20px] pl-[20px] tracking-tight'>
      {/* 포인트 내역 sort 박스 */}
      <div className={styles.sort_radio_box}>
        <div className={styles.sort_box} >
          <input type="radio" id='' name='sortPointList'>
          </input>
          <label>
            전체
          </label>
        </div>
        <div className={styles.sort_box} >
          <input type="radio" id='' name='sortPointList'>
          </input>
          <label>
            적립/사용
          </label>
        </div>
        <div className={styles.sort_box} >
          <input type="radio" id='' name='sortPointList'>
          </input>
          <label>
            선물
          </label>
        </div>
        <div className={styles.sort_box} >
          <input type="radio" id='' name='sortPointList'>
          </input>
          <label>
            전환
          </label>
        </div>
      </div>

      {/* 포인트 조회 기간 적용 */}
      <div className={styles.class_sch}>
        <div className='realtive inline-block mr-[5px] tracking-tight'>
          <select title='영수증 조회 기간 선택' className=
            'box-border pr-[32px] pl-[6px] relateive block z-[2] w-full h-[30px] text-[13px] '
            value={selectedOption} onChange={handleOptionChange}>
            <option value="7">1주일</option>
            <option value="1">1개월</option>
            <option value="3">3개월</option>
            <option value="6">6개월</option>
            {/* <option disabled='disabled' value="0">직접입력</option> */}
          </select>
        </div>
        {/* 조회 기간 */}
        <div className='tracking-tight box-border text-[12px] w-[calc(100%-118px)]'>
          <PntHistorySortDate selectedOption={selectedOption} />
        </div>
        <button className={styles.point_control} />
      </div>

      {/* 포인트 내역 리스트 */}
      <div className='felx-wrap tracking-tight'>
        <div className='flex items-center bg-[#f8f8f8] h-[36px] box-border mr-[16px] px-[8px] w-full'>
          <p className={styles.p_accumulate}>
            <span className='text-[13px] pr-[8px] font-medium'>적립</span>
            <span className='font-medium'>{110}P</span>
          </p>
          <p className={styles.p_use}>
            <span className='text-[13px] pr-[8px] font-medium'>사용</span>
            <span className='font-medium'>{620}P</span>
          </p>
        </div>
        {/* 포인트 내역 조회 결과 리스트 */}
        <ul className='pr-[5px] pl-[8px]'>
          <PntHistoryDetail />
        </ul>
      </div>
    </div>
  )
}