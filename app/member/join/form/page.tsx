import React, { useState } from 'react'
import styles from './form.module.css'
import { adAgreement, formAgreements } from '@/data/agreeData'
import { Agreement } from '@/types/agreeDataType'
import JoinForm from '@/components/page/join/JoinForm'
import AdConsent from '@/components/page/agree/AdConsent'

function page() {


    return (
        <section className='mt-10' style={{marginTop: '60px'}}>
            <div className='top_cnt1 py-10 px-5'>
                <div className={`${styles.join_step} relative`}>
                    <ol className='flex relative mb-4'>
                        <li className={`relative bg-orange-400 box-border rounded-full w-5 h-5 mr-2.5`}></li>
                        <li className={`relative bg-orange-400 box-border rounded-full w-5 h-5 mr-2.5`}></li>
                        <li className={`relative bg-gray-300 box-border rounded-full w-5 h-5 mr-2.5 bg-tabindex bg-contain`}></li>
                        <li className='relative bg-gray-300 box-border rounded-full w-5 h-5 mr-0'></li>
                    </ol>
                    <p className='text-2xl leading-9 font-bold'>정보입력</p>
                    <p className='text-[13px] leading-[21px] mt-2 text-[#767676]'>필수 정보를 정확하게 입력해주세요</p>
                </div>
            </div>
            <div className='px-5 pb-10'>
                <JoinForm />
            </div>
        </section>
    )
}

export default page