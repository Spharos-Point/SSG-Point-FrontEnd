'use client'

import React, { useEffect, useState } from 'react'

function JoinInfo() {

  
  const [signupData, setSignupData] = useState({
    phone: '',
    address:'',
    email:''
  });

  const [phone, setPhone] = useState<string>('없음');

  useEffect(() => {
    if(typeof window !== 'undefined') {
      const jsonSignup = sessionStorage.getItem('signup') || '';
      const signup = JSON.parse(jsonSignup);
      
      setSignupData(signup);

      var regex = /^(\d{3})(\d{2})\d{2}(\d{2})\d{2}/;
      const match = regex.exec(signup.phone);

      if(match) {
        setPhone(match[1] + "-" + match[2] + "**-" + match[3] +"**")
      } 
    }    
    
  }, [])
  

  return (
    <div className='box-border px-5 pb-10'>
      <p className='border-b border-solid border-[#000] pb-3 text-base font-bold leading-[26px]'>
        회원 정보
      </p>
      <div className='pt-4 pb-10'>
        <dl className='pb-4'>
          <dt className='text-[13px] leading-[21px] font-bold'>휴대폰 번호</dt>
          <dd className='text-[13px] leading-[21px] text-[#767676]'>{phone}</dd>
        </dl>
        <dl className='pb-4'>
          <dt className='text-[13px] leading-[21px] font-bold'>주소</dt>
          <dd className='text-[13px] leading-[21px] text-[#767676]'>{signupData.address}, *****</dd>
        </dl>
        <dl className='pb-4'>
          <dt className='text-[13px] leading-[21px] font-bold'>이메일</dt>
          <dd className='text-[13px] leading-[21px] text-[#767676]'>
            {
              signupData.email === ''
              ?
              '없음'
              :
              signupData.email
            }
          </dd>
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