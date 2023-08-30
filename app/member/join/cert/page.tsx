import JoinAuth from '@/components/page/join/JoinAuth'
import React from 'react'
import styles from './cert.module.css'

function page() {
  return (
    <section className='mt-10' style={{marginTop: '60px'}}>
        <div className='top_cnt1 py-10 px-5'>
            <div className={`${styles.join_step} relative`}>
                <ol className='flex relative mb-4'>
                    <li className={`relative bg-gray-300 box-border rounded-full w-5 h-5 mr-2.5 bg-tabindex bg-contain`}></li>
                    <li className='relative bg-gray-300 box-border rounded-full w-5 h-5 mr-2.5'></li>
                    <li className='relative bg-gray-300 box-border rounded-full w-5 h-5 mr-2.5'></li>
                    <li className='relative bg-gray-300 box-border rounded-full w-5 h-5 mr-0'></li>
                </ol>
                <p className='text-2xl leading-9 font-bold'>본인인증</p>
                <p className='text-xs leading-5 text-gray-500 mt-2'>본인인증 수단을 선택해주세요.</p>
            </div>
        </div>
        <div className='auth_tab'>
            <JoinAuth/>
        </div>
        <div className='notice_box'>

        </div>
    </section>
  )
}

export default page