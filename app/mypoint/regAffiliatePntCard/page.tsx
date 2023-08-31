import React from 'react'
import { useEffect } from 'react'
import AffiliatePntCardDetail from '@/components/page/mypoint/regAffiliatePntCard/AffiliatePntCardDetail'

export default function regAffiliatePntCard() {
  return (
    <>
      <div className='px-[20px] py-[40px]'>
        <h3 className='text-[20px] leading-[30px] font-normal break-all'>신세계 포인트에
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
      {/* 멤버십 안내 */}
      </div>
      <AffiliatePntCardDetail />
      {/* 동의 여부 확인 및 제휴 멤버쉽 카드 번호 입력 */}
      <div>
        <div className=' bg-[#fbfbfb] p-[20px] border-b-[1px] border-b-[#e8e8e8] mb-[39px]'>
          <div>
            <p></p>
          </div>
          <div>
            <input type='checkbox'></input>동의합니다
          </div>
        </div>
      </div>
    </>
  )
}
