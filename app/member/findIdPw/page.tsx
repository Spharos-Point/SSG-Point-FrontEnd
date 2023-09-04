import JoinAuth from '@/components/page/auth/Auth'
import FindBox from '@/components/page/member/FindBox'
import FindIdBottom from '@/components/page/member/FindIdBottom'
import FindIdTop from '@/components/page/member/FindIdTop'
import React from 'react'

function page() {
  return (
    <section className='mt-10' style={{marginTop: '60px'}}>
        <FindIdTop />
        <JoinAuth/>
        <FindIdBottom/>
        <FindBox title='비밀번호'/>
    </section>
  )
}

export default page