'use client'
import React, { useEffect, useState } from 'react';
import styles from './CardManage.module.css';
import BarcodeGenerator from '@/components/ui/Barcode/BarcodeGenerator';
import { PointCardType } from '@/data/pointCardType';
import { useSession } from 'next-auth/react';
import Swal from 'sweetalert2';

export default function CardManagePointBox({ pointCardList }: { pointCardList: PointCardType[] }) {
  const session = useSession();
  console.log(session.status);

  console.log("pointCardList[0]:", pointCardList[0]);
  const firstCardNum = pointCardList[0].cardNumber;

  //카드넘버 형식 변환
  function formatCardNumber(firstCardNum: string) {
    if (!firstCardNum) {
      return '0000-0000-0000-0000';
    }
    return firstCardNum.replace(/(\d{4})/g, '$1-').slice(0, -1);
  }

  //카드넘버 복사
  function copyCardNumberToClipboard() {
    const cardNumber = formatCardNumber(firstCardNum);
    const tempInput = document.createElement('input');
    tempInput.value = cardNumber;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    Swal.fire({
      text: '카드 번호가 클립보드에 복사되었습니다.',
      timer: 1000,
      showConfirmButton: false,
      timerProgressBar: false,
    });
  }

  return (
    <div className='p-[24px] bg-[#fbfbfb] font-inter'>
      <p className='text-[14px] mb-[16px] text-center leading-[24px] font-medium'>
        <strong>총 {pointCardList.length}건의 카드를 보유하고 있습니다.</strong>
      </p>
      <div className={styles.cardbox}>
        <div className="h-[40px] relative items-center pr-[12px] pl-[20px] flex">
          <h3 className={styles.tit_img}><span className='hidden'> 포인트 로고</span></h3>
          <button className='pl-[130px]' onClick={() => { }}>
            <BarcodeGenerator height={17} width={0.4} value={firstCardNum} />
          </button>
        </div>
        <div className='relative bg-[#fff] rounded-[18px] h-full min-h-[160px] mx-[2px] px-[20px] pt-[73px]'>
          <p className='text-[18px] leading-[21px] tracking-tight font-bold'>
            {formatCardNumber(firstCardNum)}
          </p>
          <button className={styles.copy_btn} onClick={copyCardNumberToClipboard}>복사</button>
          <dl className='absolute flex box-border bottom-[20px] left-0 px-[20px] w-full items-center'>
            <dt className='grow shrink basis-0 text-[12px] font-normal'>사용 가능</dt>
            <dd className='flex justify-end flex-[2.5] items-center text-[16px] leading-[19px] font-medium 
                              after:ml-[7px] after:inline-block after:bg-contain after:bg-no-repeat after:w-[27px] after:h-[25px] after:bg-[url(../public/pntCell.png)]'>
              {session.status === 'authenticated' ? session.data?.user.userPoint : 0}
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}