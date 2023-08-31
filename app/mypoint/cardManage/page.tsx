import React from 'react'
import Link from 'next/link'
import CardManagePointBox from '@/components/page/mypoint/cardManage/CardManagePointBox'
import PntCardList from '@/components/page/mypoint/cardManage/PntCardList'
import styles from '@/components/page/mypoint/cardManage/CardManage.module.css'

export default function cardMange() {
  return (
    <>
      <CardManagePointBox />
      <PntCardList />

    <div className='px-[20px] pb-[40px]'>
      <button className='bg-[#fff] box-border border-[1px] block rounded-[8px] 
      w-full h-[48px] text-[14px] leading-[24px] font-medium p-[12px] mb-[15px]'>
        신규 포인트 카드 등록하기</button>
      <button className='bg-[#fff] box-border border-[1px] block rounded-[8px] 
      w-full h-[48px] text-[14px] leading-[24px] font-medium p-[12px] mb-[15px]'>
        임시 발급 카드 인증하기</button>
      <button className={styles.button01}>
        포인트 비밀번호 변경하기</button>
    </div>

    <div>
      {/* 배너 */}
    </div>
    </>
  )
}

