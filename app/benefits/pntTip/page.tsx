import React from 'react'

function page() {
  return (
    <>
      <div className='py-10 px-5'>
        <p className='text-xl leading-[30px] font-bold break-keep tracking-tighter'>
          <strong className='text-[#EA035C] font-bold'>포인트 적립</strong>
          도 스마트하게!
        </p>
        <p className='text-sm break-keep leading-[24px] text-[#767676] pt-2'>
          보기만 해도 쌓이는 초간단 꿀팁을
          <br/>
          지금 바로 확인하세요.
        </p>
      </div>
      <div className='pt-0 px-5 pb-10'>
        <div className='btn_box'>
          <button className='btn_primary'>확인하기</button>
        </div>
      </div>
    </>
  )
}

export default page