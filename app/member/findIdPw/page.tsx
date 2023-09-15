import JoinAuth from '@/components/page/auth/Auth'
import FindBox from '@/components/page/member/FindBox'
import Note from '@/components/page/note/note'
import FindIdTop from '@/components/page/member/FindTop'
import React from 'react'
import { findNotice } from '@/data/noticeData'

function page() {

  return (
    <section className='mt-10' style={{marginTop: '60px'}}>
        <FindIdTop title='아이디'/>
        <JoinAuth/>
        <Note note={findNotice}/>
        <FindBox title='비밀번호'/>
    </section>
  )
}

export default page