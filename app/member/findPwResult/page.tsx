import FindPwResultInput from '@/components/page/member/FindPwResultInput'
import FindPwResultTop from '@/components/page/member/FindPwResultTop'
import Note from '@/components/page/note/note'
import { findPwNotice } from '@/data/noticeData'
import React from 'react'

function page() {
  return (
    <section className='mt-10' style={{marginTop: '60px'}}>
        <FindPwResultTop/>
        <FindPwResultInput/>
        <Note note={findPwNotice}/>
    </section>
  )
}

export default page