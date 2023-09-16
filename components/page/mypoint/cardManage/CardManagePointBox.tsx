'use client'
import React, { useEffect, useState } from 'react';
import styles from './CardManage.module.css';
import BarcodeGenerator from '@/components/ui/Barcode/BarcodeGenerator';
import { PointCardType } from '@/data/pointCardType';
import { useSession } from 'next-auth/react';

export default function CardManagePointBox() {
  const [totalCardnum, setTotalCardNum] = useState(0);
  const [totalPoint, setTotalPoint] = useState(0); // 총 포인트 [수정: 변수명 변경
  const [pointCardInfo, setPointCardInfo] = useState<PointCardType[]>([] as PointCardType[]);
  const [pointCardNumber, setPointCardNumber] = useState('0000-0000-0000-0000'); // 포인트 카드 번호
  const [pointMaker, setPointMaker] = useState('신세계포인트'); // 포인트 카드 제조사
  const [pointCardDate, setPointCardDate] = useState('2021.08.31'); // 포인트 카드 발급일자

  const { data: session } = useSession();
  useEffect(() => {
    async function fetchData() {
      try {
        if (session && session.user.token) {
          console.log(session.user.token);
          const response = await fetch(`${process.env.BASE_API_URL}/api/v1/myinfo/cardManage`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${session.user.token}`,
            },
          });
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }

          const data = await response.json();
          const cardInfo = data.result;

          // 업데이트된 코드: 카드 정보 리스트를 state로 설정
          setPointCardInfo(cardInfo);

          if (cardInfo.length > 0) {
            const firstCardInfo = cardInfo[totalCardnum - 1];

            // 업데이트된 코드: 첫 번째 카드 정보에서 필요한 정보를 추출하여 state로 설정
            if (firstCardInfo && firstCardInfo.cardNumber) {
              const formattedCardNumber = formatCardNumber(firstCardInfo.cardNumber || '0000000000000000');
              setPointCardNumber(formattedCardNumber);
              setPointMaker(firstCardInfo.brandName || '신세계포인트');
              setPointCardDate(firstCardInfo.createAt || '2023.09.17');
            } else {
              console.error('cardNumber가 없습니다.');
            }
          }
        
        // 업데이트된 코드: 총 카드 수 설정
        setTotalCardNum(cardInfo.length);}

      } catch (error) {
        console.error(error);
      }
    }
  }, [session]);

  function formatCardNumber(cardNumber: string) {
    if (!cardNumber) {
      return '0000-0000-0000-0000'
    }
    return cardNumber.replace(/(\d{4})/g, '$1-').slice(0, -1);
  }
  return (
    <div className='p-[24px] bg-[#fbfbfb] font-inter'>
      <p className='text-[14px] mb-[16px] text-center leading-[24px] font-medium'>
        <strong>총 {totalCardnum}건의 카드를 보유하고 있습니다.</strong> {/* 수정: totalCardnum 변수 사용 */}
      </p>
      <div className={styles.cardbox}>
        <div className="h-[40px] relative items-center pr-[12px] pl-[20px] flex">
          <h3 className={styles.tit_img}><span className='hidden'>{pointMaker} 포인트 로고</span></h3>
          <button className='pl-[130px]' onClick={() => { }}>
            <BarcodeGenerator height={17} width={0.4} value={pointCardInfo[0].cardNumber} />
          </button>
        </div>
        <div className='relative bg-[#fff] rounded-[18px] h-full min-h-[160px] mx-[2px] px-[20px] pt-[73px]'>
          <p className='text-[18px] leading-[21px] tracking-tight font-bold'>
            {pointCardNumber}
          </p>
          {/* 복사 기능 추가 필요 */}
          <button className={styles.copy_btn} onClick={() => { }}>복사</button>
          <div>
            <dl className='flex box-border absolute bottom-[20px] left-0 px-[20px] w-full items-center'>
              <dt className='grow shrink basis-0 text-[12px] font-normal'>사용 가능</dt>
              <dd className='flex justify-end flex-[2.5] items-center text-[16px] leading-[19px] font-medium 
                              after:ml-[7px] after:inline-block after:bg-contain after:bg-no-repeat after:w-[27px] after:h-[25px] after:bg-[url(../public/pntCell.png)]'>
                {totalPoint} {/* 수정: totalpoint 변수 사용 */}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
