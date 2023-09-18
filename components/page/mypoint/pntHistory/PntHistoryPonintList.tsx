'use client'
import React, { useEffect, useState } from 'react'
import styles from './pntHistory.module.css'
import PntHistorySortDate from '@/components/ui/Date/PntHistorySortDate'
import { useSearchParams, useRouter } from 'next/navigation';
import { BaseResDataType } from '@/types/baseResDataType';
import { useSession } from 'next-auth/react';
import { UserPointListDataType } from '@/types/userPointListDataType';
import PntHistoryDetail from './pntHistoryDetail';

export default function PntHistoryPonintList({ }) {
  
  const query = useSearchParams();
  const router = useRouter();
  const {data: session} = useSession();
  const [selectedDateRange, setSelectedDateRange] = useState<string>('all'); // 초기값을 빈 문자열로 설정
  const [selectedPointType, setSelectedPointType] = useState<string>('all'); // 초기값을 빈 문자열로 설정
  const [userPointListData, setUserPointListData] = useState<UserPointListDataType[]>([] as UserPointListDataType[]);

  const handleOptionDateRange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDateRange(event.target.value);
    router.push(`/mypoint/pntHistory?pointType=${selectedPointType}&range=${event.target.value}`) // `/mypoint/pntHistory?pointType=${event.target.value}
  };
  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPointType(event.target.value);
    router.push(`/mypoint/pntHistory?pointType=${event.target.value}&range=${selectedDateRange}`) // `/mypoint/pntHistory?pointType=${event.target.value}2
  };

  const tabMenu = [
    { id: '1', name: '전체', value: 'all' },
    { id: '2', name: '적립/사용', value: 'RE,RE_USED' },
    { id: '3', name: '선물', value: 'GI' },
    { id: '4', name: '전환', value: 'TR' },
  ];

  useEffect(() => {
    setSelectedPointType(query.get('pointType') || 'all');
    
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.BASE_API_URL}/api/v1/userPointList/history?pointType=${query.get('pointType')}&range=${query.get('range')}`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.user.token}`,
          },
        });
        const jsonData: BaseResDataType = await response.json();
        setUserPointListData(jsonData.result);
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      }
    }
    fetchData();
  }, [query]);

  return (
    <div className='pt-[25px] pb-[60px] pr-[20px] pl-[20px] tracking-tight'>
      {/* 포인트 내역 sort 박스 */}
      <div className={styles.sort_radio_box}>
        {
          tabMenu.map((item) => (
            <div className={styles.sort_box} key={item.id}>
              <input
                type="radio"
                value={item.value}
                name="sortPointList"
                checked={selectedPointType === item.value}
                onChange={handleTypeChange}
              />
              <label>
                {item.name}
              </label>
            </div>
          ))
        }
      </div>

      {/* 포인트 조회 기간 적용 */}
      <div className={styles.class_sch}>
        <div className='realtive inline-block mr-[5px] tracking-tight'>
          <select
            title='영수증 조회 기간 선택'
            className='box-border pr-[32px] pl-[6px] relateive block z-[2] w-full h-[30px] text-[13px] '
            value={selectedDateRange}
            onChange={handleOptionDateRange}>
            <option value="all">전체</option>
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
            <span className='font-medium'>{0}P</span>
          </p>
          <p className={styles.p_use}>
            <span className='text-[13px] pr-[8px] font-medium'>사용</span>
            <span className='font-medium'>{0}P</span>
          </p>
        </div>
        {/* 포인트 내역 조회 결과 리스트 */}
        {
          userPointListData.length > 0 && <PntHistoryDetail data={userPointListData}/>
        }
        
      </div>
    </div>
  )
}