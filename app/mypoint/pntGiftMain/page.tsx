'use client'
import Link from 'next/link'
import React from 'react'
import styles from './pntGiftMain.module.css'
import PntGiftList from '@/components/page/mypoint/pntGiftMain/PntGiftList'
import PntAcceptBox from '@/components/page/mypoint/pntGiftMain/PntAcceptBox'

export default function pntGiftMain() {
  return (
    <>
      <section className='px-[20px] py-[40px]'>
        <h3 className='text-[20px] leading-[30px] font-medium break-all'>
          마음을 담아<br />
          <strong className='font-bold text-[#ea035c]'>신세계포인트를 선물</strong>하세요.
        </h3>
        <p className='text-[14px] leading-[24px] text-[#767676] break-all pt-[8px]'>
          신세계포인트 회원끼리 주고받는
          <br />
          가장 실속있는 마음의 선물!
          <br />
          친구나 가족, 소중한 사람에게 선물해 보세요.
        </p>

        <div className='pt-[40px]'>
          <Link href='./pntGiftMainsub'>
          <button className={styles.btn_primary}>
            선물하기
          </button>
          </Link>
        </div>
      <PntAcceptBox />
      </section>
      {/* 포인트 선물 내역 리스트 */}
      <PntGiftList />
    </>
  )
}
