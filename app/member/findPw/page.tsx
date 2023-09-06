import JoinAuth from '@/components/page/auth/Auth'
import FindBox from '@/components/page/member/FindBox'
import FindTop from '@/components/page/member/FindTop'
import Note from '@/components/page/note/note'
import { findNotice } from '@/data/noticeData'
import React from 'react'

function page() {
  return (
    <section className='mt-10' style={{marginTop: '60px'}}>
        <FindTop title='비밀번호'/>
        <JoinAuth/>
        <Note note={findNotice}/>
        <FindBox title='아이디'/>
    </section>
  )
}

export default page