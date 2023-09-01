import JoinAuth from '@/components/page/join/JoinAuth'
import FindIdBottom from '@/components/page/member/FindIdBottom'
import FindIdTop from '@/components/page/member/FindIdTop'
import React from 'react'

function page() {
  return (
    <section className='mt-10' style={{marginTop: '60px'}}>
        <FindIdTop />
        <JoinAuth/>
        <FindIdBottom/>
    </section>
  )
}

export default page