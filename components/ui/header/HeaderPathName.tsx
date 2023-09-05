'use client'

import React from 'react'
import { useRouter } from 'next/navigation';

function HeaderPathName(props : {pathname: string}) {

  const {pathname} = props;
  const router = useRouter();

  return (
    <>
      <button className='back_btn' onClick={() => router.back()}></button>
      <div className="pt-2.5 font-bold text-base">
        {
          pathname === '/login'? '로그인' 
          : pathname === '/coupon' ? '쿠폰' 
          : pathname === '/ingevents' ? '이벤트 - 진행 이벤트' 
          : pathname === '/endevents' ? '이벤트 - 종료 이벤트'
          : pathname === '/winevents' ? '이벤트 - 당첨 확인'
          : pathname === '/member/join' ? '회원가입'
          : pathname === '/member/join/cert' ? '회원가입 본인인증'
          : pathname === '/member/join/agree' ? '회원가입 약관동의'
          : pathname === '/member/join/form' ? '회원가입 정보입력'
          : pathname === '/member/join/success' ? '회원가입 완료'
          : pathname === '/member/findIdPw' ? '아이디 찾기 본인인증'
          : pathname === '/member/findIdResult' ? '아이디 찾기'
          : pathname === '/mypoint/pntHistory' ? '마이 포인트'
          : pathname === '/mypoint/cardManage' ? '마이 포인트'
          : pathname === '/mypoint/regAffiliatePntCard' ? '마이 포인트'
          : pathname === '/mypoint/pntGiftMain' ? '마이 포인트'
          : pathname === '/mypoint/pntGiftMainsub' ? '마이 포인트'
          : pathname === '/mypoint/convertPntList' ? '마이 포인트'
          : pathname === '/mypoint/savePoint' ? '마이 포인트'
          : pathname === '/mypoint/chgPntPwdCert' ? '마이 포인트'
          :'other page'
        }
      </div>
      
    </>
  )
}

export default HeaderPathName