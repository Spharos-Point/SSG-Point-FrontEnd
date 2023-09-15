import React from 'react'

export default function Samsung() {
  return (
    <>
      <p className='pb-[14px]'>
        <img className='h-[32px]' src='/samsungMembership.png' alt='삼성전자 멤버십 아이콘' />
      </p>
      <dl className='flex'>
        <dt className='text-[13px] leading-[21px] align-baseline font-normal min-w-[64px]'>적용상품</dt>
        <dd className='text-[13px] leading-[21px] align-baseline tracking-tight'>삼성전자가 공급한 제품<br />(이마트 내 삼성전자 매장)</dd>
      </dl>
      <dl className='flex'>
        <dt className='text-[13px] leading-[21px] align-baseline font-normal min-w-[64px]'>적립</dt>
        <dd className='text-[13px] leading-[21px] align-baseline tracking-tight'>구매 금액의 0.2% 신세계포인트와 동시적립</dd>
      </dl>
    </>
  )
}

