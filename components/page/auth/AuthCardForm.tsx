import React from 'react'

function JoinAuthPhoneForm() {
  return (
      <div className='tab_cnt'>
        <h3 className='hidden'>카드인증</h3>
        <div className='pt-10 pr-[30px] pb-0 pl-[30px]'>
          <p className='text-center pb-10 text-[15px] leading-[26px]'>
            보유하신&nbsp;
            <span className='text-[#000] font-bold'>신용/체크카드</span>
            로
            <br/>
            본인인증이 가능합니다.
          </p>
          <div className='btn_box'>
            <button className='btn_primary'>신용/체크카드 인증</button>
          </div>
        </div>
      </div>
  )
}

export default JoinAuthPhoneForm