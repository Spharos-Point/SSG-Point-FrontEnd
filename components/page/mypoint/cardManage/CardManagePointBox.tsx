'use client'
import React, { useEffect, useState } from 'react'
import styles from './CardManage.module.css'
import BarcodeGenerator from '@/components/ui/Barcode/BarcodeGenerator'
import {useSession} from 'next-auth/react'

export default function CardManagePointBox() {
  const {data : session} = useSession();
  const [totalpoint,setTotalPoint] = useState('error');
  const [pointCardInfo, setPointCardinfo] = useState('');
  const [pointCardNumber, setPointCardNumber] = useState('0000000000000000'); // 포인트 카드 번호
  const [pointMaker, setPointMaker] = useState('신세계포인트'); // 포인트 카드 제조사
  const [pointCardDate, setPointCardDate] = useState('2021.08.31'); // 포인트 카드 발급일자

  useEffect(() => {
    async function fetchData() {
        try {
            const response = await fetch('http://localhost:8000/api/v1/pointRead/total', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session?.user.token}`,
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setPointCardinfo(data.result.pointCardinfo); //API에서 받은 카드정보를 변수로 저장
        } catch (error) {
            console.error(error);
        }
    }
    fetchData(); // fetchData 함수 호출
}, [session]);

  return (
    <div className='p-[24px] bg-[#fbfbfb] font-inter'>
      <p className='text-[14px] mb-[16px] text-center leading-[24px] font-medium'>
        <strong>총 {4}건의 신세계포인트 카드를 보유하고 있습니다.</strong>
      </p>
      <div className={styles.cardbox}>
        <div className="h-[40px] relative items-center pr-[12px] pl-[20px] flex">
          <h3 className={styles.tit_img}><span className='hidden'>신세계 포인트 로고</span></h3>
          <button className='pl-[130px]' onClick={() => { }}>
            <BarcodeGenerator height={17} width={0.4} value={pointCardNumber}/>
          </button>
        </div>
        <div className='relative bg-[#fff] rounded-[18px] h-full min-h-[160px] mx-[2px] px-[20px] pt-[73px]'>
          <p className='text-[18px] leading-[21px] tracking-tight font-bold'>
            {"0000 "}
            <span className='text-[10px] text-[#bcbcbc] inline-block font-normal align-top'>-</span>
            {" 0000 "}
            <span className='text-[10px] text-[#bcbcbc] inline-block font-normal align-top'>-</span>
            {" 0000 "}
            <span className='text-[10px] text-[#bcbcbc] inline-block font-normal align-top'>-</span>
            {" 0000"}
          </p>
          {/* 복사 기능 추가 필요 */}
          <button className={styles.copy_btn} onClick={() => { }}>복사</button>
          <div>
            <dl className='flex box-border absolute bottom-[20px] left-0 px-[20px] w-full items-center'>
              <dt className='grow shrink basis-0 text-[12px] font-normal'>사용 가능</dt>
              <dd className='flex justify-end flex-[2.5] items-center text-[16px] leading-[19px] font-medium 
                              after:ml-[7px] after:inline-block after:bg-contain after:bg-no-repeat after:w-[27px] after:h-[25px] after:bg-[url(../public/pntCell.png)]'>
                {totalpoint}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}


