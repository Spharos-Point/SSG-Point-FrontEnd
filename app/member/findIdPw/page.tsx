import JoinAuth from '@/components/page/auth/Auth'
import FindBox from '@/components/page/member/FindBox'
import FindIdBottom from '@/components/page/note/note'
import FindIdTop from '@/components/page/member/FindIdTop'
import React from 'react'
import { findIdNotice } from '@/data/noticeData'

function page() {
  return (
    <section className='mt-10' style={{marginTop: '60px'}}>
        <FindIdTop />
        <JoinAuth/>
        <FindIdBottom note={findIdNotice}/>
        <FindBox title='비밀번호'/>
    </section>
  )
}

export default page