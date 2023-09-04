import React from 'react'
import styles from './success.module.css'
import JoinInfo from '@/components/page/join/JoinInfo'
import Integrated from '@/components/page/join/Integrated'

function page() {
  return (
    <section className='mt-10' style={{marginTop: '60px'}}>
        <div className='top_cnt1 py-10 px-5'>
            <div className={`${styles.join_step} relative`}>
                <ol className='flex relative mb-4'>
                    <li className={`relative bg-orange-400 box-border rounded-full w-5 h-5 mr-2.5`}></li>
                    <li className={`relative bg-orange-400 box-border rounded-full w-5 h-5 mr-2.5`}></li>
                    <li className={`relative bg-orange-400 box-border rounded-full w-5 h-5 mr-2.5`}></li>
                    <li className={`relative bg-gray-300 box-border rounded-full w-5 h-5 mr-2.5 bg-tabindex bg-contain`}></li>
                </ol>
                <p className='text-2xl leading-9 font-bold'>가입완료</p>
                <p className='text-xl leading-[30px] font-medium break-keep mt-4'>
                    <strong className={`${styles.txt_line0} font-extrabold relative align-top z-[1] pr-1 pl-[1px]`}>***</strong>
                    &nbsp;님,&nbsp;
                    <span className='font-semibold'>53165&nbsp;ID</span>
                    로
                    <br/>
                    신세계포인트&nbsp;
                    <strong className='font-bold'>통합 회원 가입</strong>
                    이
                    <br/>
                    완료되었습니다.
                </p>
            </div>
        </div>
        <JoinInfo/>
        <Integrated/>
    </section>
  )
}

export default page