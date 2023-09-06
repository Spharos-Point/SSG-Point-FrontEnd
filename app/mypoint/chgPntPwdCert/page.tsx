import JoinAuth from '@/components/page/auth/Auth'
import FindIdBottom from '@/components/page/member/FindIdBottom'
import ChgPntPwdTop from '@/components/page/mypoint/chgPntPwdCert/ChgPntPwdTop'
import React from 'react'

export default function ChgPntPwdCert() {
  return (
    <section>
        <ChgPntPwdTop />
        <JoinAuth/>
        <FindIdBottom/>
    </section>
  )
}


