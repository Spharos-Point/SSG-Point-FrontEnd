import React from 'react'
import Link from 'next/link'
import CardManagePointBox from '@/components/page/mypoint/cardManage/CardManagePointBox'
import PntCardList from '@/components/page/mypoint/cardManage/PntCardList'
import styles from '@/components/page/mypoint/cardManage/CardManage.module.css'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { BaseResDataType } from '@/types/baseResDataType'

//온라인 포인트 카드 리스트 조회
const cardList = async () => {
  const session = await getServerSession(options)
  const url = `${process.env.BASE_API_URL}/api/v1/myinfo/cardManage`
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${session?.user.token}`,
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function CardMange() {
  const data: BaseResDataType = await cardList();

  return (
    <>
      <CardManagePointBox
        pointCardList={data.result}
      />
      <PntCardList
        pointCardList={data.result}
      />

      <div className='px-[20px] pb-[40px]'>
        <Link href="">
          <button className='bg-[#fff] box-border border-[1px] block rounded-[8px] 
      w-full h-[48px] text-[14px] leading-[24px] font-medium p-[12px] mb-[15px]'>
            신규 포인트 카드 등록하기</button></Link>

        <Link href="">
          <button className='bg-[#fff] box-border border-[1px] block rounded-[8px] 
      w-full h-[48px] text-[14px] leading-[24px] font-medium p-[12px] mb-[15px]'>
            임시 발급 카드 인증하기</button></Link>

        <Link href="/mypoint/chgPntPwdCert">
          <button className={styles.button01}>
            포인트 비밀번호 변경하기</button>
        </Link>
      </div>

      <div className='pt-[40px] pb-[80px] px-[20px] bg-[#f5f5f5]'>
        <p className='text-[18px] leading-[26px] mb-[20px]'>
          다양한 신세계포인트
          <br />
          <strong className='text-[#ea035c]'>제휴 신용카드의 혜택</strong>
          을 확인하세요!
        </p>
        {/* 이벤트 페이지 이동 */}
        <Link href="">
          <img src='/cardManageBanner.jpg' alt="포인트 카드 관리 페이지 하단 배너 이미지" />
        </Link>
      </div>
    </>
  )
}

export default CardMange;

