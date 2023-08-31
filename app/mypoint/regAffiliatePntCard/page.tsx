import React from 'react'
import AffiliatePntCardDetail from '@/components/page/mypoint/regAffiliatePntCard/AffiliateCompany/AffiliateCompany'
import AffiliateAgreeForm from '@/components/page/mypoint/regAffiliatePntCard/AffiliateAgreeForm/AffiliateAgreeForm'

export default function regAffiliatePntCard() {
  return (
    <>
      <div className='px-[20px] py-[40px]'>
        <h3 className='text-[20px] leading-[30px] font-normal break-all'>신세계포인트에
          <strong className='text-[#ea035c]'> 제휴사 포인트 </strong>
          더하기!
        </h3>
        <p className='text-[14px] leading-[24px] text-[#767676] break-all pt-[8px]'>
          이마트 제휴 멤버십 포인트 카드를 등록하면
          <br />
          신세계포인트와 제휴사 포인트를
          <br />
          모두 적립할 수 있어요.
        </p>
      </div>

      {/*제휴사별 멤버십 안내 */}
      <AffiliatePntCardDetail />

      {/* 동의 여부 확인 및 제휴 멤버쉽 카드 번호 입력 */}
      <AffiliateAgreeForm />
    </>
  )
}
