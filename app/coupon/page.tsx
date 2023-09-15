import CouponList from '@/components/page/coupon/CouponList'
import CouponTop from '@/components/page/coupon/CouponTop'
import React from 'react'

function page() {
  return (
    <section className='mt-10' style={{marginTop: '90px'}}>
      <CouponTop/>
      <CouponList/>
    </section>
  )
}

export default page