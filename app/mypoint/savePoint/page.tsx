import React from 'react'
import SavePointInfo from '@/components/page/mypoint/savePoint/SavePointInfo'

export default function SavePoint() {
  return (
    <section>
      <div className='py-[40px] px-[20px]'>
        <h3 className='text-[20px] leading-[30px] font-normal break-all'>
          포인트 적립을 깜빡하셨나요?
          <br />
          <strong className='text-[#ea035c]'>
            영수증 정보만 입력해 주세요.
          </strong>
        </h3>
        <p className='text-[14px] leading-[24px] text-[#767676] break-keep pt-[9px]'>
          이마트, 신세계백화점, 이마트 에브리데이에서
          <br />
          구매하신 영수증 정보로 포인트 적립이 가능합니다.
        </p>
      </div>
      <SavePointInfo />
    </section>
  )
}
