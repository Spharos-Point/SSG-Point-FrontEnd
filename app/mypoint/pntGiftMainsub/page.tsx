'use client'
import React from 'react'

import PntGiftMainsubHeader from '@/components/page/mypoint/pntGiftMainSub/PntGiftMainsubHeader'
import SearchUser from '@/components/page/mypoint/pntGiftMainSub/SearchUser'
import PntGiftMessageForm from '@/components/page/mypoint/pntGiftMainSub/PntGiftMessageForm'
import { giftpntNotice } from '@/data/noticeData'
import Note from '@/components/page/note/note'

export default function PntGiftMainsubpage() {
  return (
    <section>
      <PntGiftMainsubHeader />
      <SearchUser />
      <PntGiftMessageForm />
      <Note note={giftpntNotice}/>
    </section>
  )
}
