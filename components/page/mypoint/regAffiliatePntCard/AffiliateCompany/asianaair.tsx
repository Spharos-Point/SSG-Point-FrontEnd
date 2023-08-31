import React from 'react'

export default function Asianaair() {
  return (
    <>
      <p className='pb-[14px]'>
        <img className='h-[32px]' src='/asiana_membership.png' alt='대한항공 멤버십 아이콘' />
      </p>
      <dl className='flex'>
        <dt className='text-[13px] leading-[21px] align-baseline font-normal min-w-[64px]'>적립</dt>
        <dd className='text-[13px] leading-[21px] align-baseline tracking-tight'>최종 7만원 이상 결제 시 3,000원당<br />1마일 신세계포인트와 동시 적립<br />
          <span className='text-[11px] text-[#666] leading-[23px]'>※ 항공사 마일리지간 선택 적립/월 1,000마일 한도</span>
        </dd>
      </dl>
    </>
  )
}
