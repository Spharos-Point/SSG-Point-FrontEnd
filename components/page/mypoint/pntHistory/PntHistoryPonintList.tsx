'use client'
import React, { useEffect, useState } from 'react'
import styles from './pntHistory.module.css'
import PntHistoryDetail from './pntHistoryDetail'
import PntHistorySortDate from '@/components/ui/Date/PntHistorySortDate'

export default function PntHistoryPonintList({ }) {
  const [selectedDateRange, setSelectedDateRange] = useState(''); // 초기값을 빈 문자열로 설정
  const [selectedPointType, setSelectedPointType] = useState(''); // 초기값을 빈 문자열로 설정
  const [data, setData] = useState([]);

  const handleOptionDateRange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDateRange(event.target.value);
  };
  const handleOptionPointType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPointType(event.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8000/PntList');
        const jsonData = await response.json();

        jsonData.sort((a, b) => new Date(b.pnt_create_at) - new Date(a.pnt_create_at));
        setData(jsonData);

      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      }
    }
    fetchData();
  }, []);

  const filteredData = data.filter(item => {
    const currentDate = new Date();
    const itemDate = new Date(item.pnt_create_at);

    // 선택된 옵션 값에 따라 필터링 조건을 설정
    if (selectedDateRange === '') {
      // 빈 문자열인 경우 모든 데이터 반환
      return true;
    } else if (selectedDateRange === '7') {
      // 1주일 내의 데이터
      const oneWeekAgo = new Date(currentDate);
      oneWeekAgo.setDate(currentDate.getDate() - 7);
      return itemDate >= oneWeekAgo;
    } else if (selectedDateRange === '1') {
      // 1개월 내의 데이터
      const oneMonthAgo = new Date(currentDate);
      oneMonthAgo.setMonth(currentDate.getMonth() - 1);
      return itemDate >= oneMonthAgo;
    } else if (selectedDateRange === '3') {
      // 3개월 내의 데이터
      const threeMonthsAgo = new Date(currentDate);
      threeMonthsAgo.setMonth(currentDate.getMonth() - 3);
      return itemDate >= threeMonthsAgo;
    } else if (selectedDateRange === '6') {
      // 6개월 내의 데이터
      const sixMonthsAgo = new Date(currentDate);
      sixMonthsAgo.setMonth(currentDate.getMonth() - 6);
      return itemDate >= sixMonthsAgo;
    }

    if (selectedPointType && item.pointtype !== selectedPointType) {
      return false;
    }

    return true;
  });

  return (
    <div className='pt-[25px] pb-[60px] pr-[20px] pl-[20px] tracking-tight'>
      {/* 포인트 내역 sort 박스 */}
      <div className={styles.sort_radio_box}>
        <div className={styles.sort_box}>
          <input
            type="radio"
            value=""
            name="sortPointList"
            checked={selectedPointType === ''}
            onChange={() => setSelectedPointType('')}
          />
          <label>
            전체
          </label>
        </div>
        <div className={styles.sort_box}>
          <input
            type="radio"
            value="1"
            name="sortPointList"
            checked={selectedPointType === '1'}
            onChange={() => setSelectedPointType('1')}
          />
          <label>
            적립/사용
          </label>
        </div>
        <div className={styles.sort_box}>
          <input
            type="radio"
            value="2"
            name="sortPointList"
            checked={selectedPointType === '2'}
            onChange={() => setSelectedPointType('2')}
          />
          <label>
            선물
          </label>
        </div>
        <div className={styles.sort_box}>
          <input
            type="radio"
            value="3"
            name="sortPointList"
            checked={selectedPointType === '3'}
            onChange={() => setSelectedPointType('3')}
          />
          <label>
            전환
          </label>
        </div>
      </div>

      {/* 포인트 조회 기간 적용 */}
      <div className={styles.class_sch}>
        <div className='realtive inline-block mr-[5px] tracking-tight'>
          <select
            title='영수증 조회 기간 선택'
            className='box-border pr-[32px] pl-[6px] relateive block z-[2] w-full h-[30px] text-[13px] '
            value={selectedDateRange}
            onChange={handleOptionDateRange}>
            <option value="">전체</option>
            <option value="7">1주일</option>
            <option value="1">1개월</option>
            <option value="3">3개월</option>
            <option value="6">6개월</option>
          </select>
        </div>
        {/* 조회 기간 */}
        <div className='tracking-tight box-border text-[12px] w-[calc(100%-118px)]'>
          <PntHistorySortDate selectedOption={selectedDateRange} />
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
          <PntHistoryDetail filteredData={filteredData} selectedPointType={selectedPointType}/>
        </ul>
      </div>
    </div>
  )
}