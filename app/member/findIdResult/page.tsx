import FindBox from '@/components/page/member/FindBox'
import FindIdResultInfo from '@/components/page/member/FindIdResultInfo'
import FindResultTop from '@/components/page/member/FindResultTop'
import React from 'react'

function page() {
  return (
    <section className='mt-10' style={{marginTop: '60px'}}>
        <FindResultTop />
        <FindIdResultInfo/>
        <FindBox title='비밀번호'/>
    </section>
  )
}

export default page