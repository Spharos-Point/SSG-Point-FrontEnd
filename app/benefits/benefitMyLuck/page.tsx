import MyLuck from '@/components/page/benefits/MyLuck'
import Note from '@/components/page/note/note'
import { luckServiceNotice } from '@/data/noticeData'
import React from 'react'

function page() {
  
  return (
    <>
      <MyLuck/>
      <Note note={luckServiceNotice}/>
    </>
  )
}

export default page