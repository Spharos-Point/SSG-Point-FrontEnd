import React from 'react'

function JoinInfo() {
  return (
    <div className='box-border px-5 pb-10'>
      <p className='border-b border-solid border-[#000] pb-3 text-base font-bold leading-[26px]'>
        회원 정보
      </p>
      <div className='pt-4 pb-10'>
        <dl className='pb-4'>
          <dt className='text-[13px] leading-[21px] font-bold'>휴대폰 번호</dt>
          <dd className='text-[13px] leading-[21px] text-[#767676]'>010-****-****</dd>
        </dl>
        <dl className='pb-4'>
          <dt className='text-[13px] leading-[21px] font-bold'>주소</dt>
          <dd className='text-[13px] leading-[21px] text-[#767676]'>부산광역시 해운대구 ******</dd>
        </dl>
        <dl className='pb-4'>
          <dt className='text-[13px] leading-[21px] font-bold'>이메일</dt>
          <dd className='text-[13px] leading-[21px] text-[#767676]'>없음</dd>
        </dl>
      </div>
      <p className='border-b border-solid border-[#000] pb-3 text-base font-bold leading-[26px]'>
        광고정보 수신동의
        <em className='block pt-[2px] not-italic'>동의일자</em>
      </p>
      <div className='pt-4'>
        <dl className='pb-4'>
          <dt className='text-[13px] leading-[21px] font-bold'>동의</dt>
          <dd className='text-[13px] leading-[21px] text-[#767676]'>&nbsp;</dd>
        </dl>
        <dl className='pb-4'>
          <dt className='text-[13px] leading-[21px] font-bold'>비동의</dt>
          <dd className='text-[13px] leading-[21px] text-[#767676]'>이메일, 문자, DM, TM</dd>
        </dl>
      </div>
    </div>
  )
}

export default JoinInfo