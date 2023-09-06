import JoinAuth from '@/components/page/auth/Auth'
import ChgPntPwdTop from '@/components/page/mypoint/chgPntPwdCert/ChgPntPwdTop'
import Note from '@/components/page/note/note'
import { signupNotice } from '@/data/noticeData'
import React from 'react'


export default function ChgPntPwdCert() {
  return (
    <section>
        <ChgPntPwdTop />
        <JoinAuth/>
        <Note note={signupNotice}/>
    </section>
  )
}


