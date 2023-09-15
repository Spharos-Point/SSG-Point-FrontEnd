'use client'
import React from 'react'

import PntGiftMainsubHeader from '@/components/page/mypoint/pntGiftMainSub/PntGiftMainsubHeader'
import SearchUserFormSet from '@/components/page/mypoint/pntGiftMainSub/SearchUserFormSet'
import { giftpntNotice } from '@/data/noticeData'
import Note from '@/components/page/note/note'


export default function PntGiftMainsubpage() {
  return (
    <section>
      <PntGiftMainsubHeader />
      <SearchUserFormSet/>
      <Note note={giftpntNotice}/>
    </section>
  )
}
