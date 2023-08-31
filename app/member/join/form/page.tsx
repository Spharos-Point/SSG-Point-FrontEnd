import React from 'react'
import styles from './form.module.css'
import { adAgreement, formAgreements } from '@/data/agreeData'
import { Agreement } from '@/types/agreeDataType'
import JoinForm from '@/components/page/join/JoinForm'

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
                <JoinForm/>
            </div>
            <div className='py-10 px-5 pt-0'>
                <div>
                    <ul>
                        {
                            formAgreements.map((items:Agreement) => (
                                <li key={items.id} className='relative pr-[22px] mb-4'>
                                    <div className={styles.chk_box}>
                                        <input
                                            className='absolute left-0 top-0 w-5 h-5 rounded-full border border-black appearance-none cursor-pointer align-middle'
                                            id={items.id}
                                            type='checkbox'
                                        />
                                        <label htmlFor={items.id} className='block min-h-5 pt-px pl-7 text-[11px] leading-4 break-keep font-bold'>
                                            {items.label}
                                        </label>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='mt-2 ml-[11px] pt-2 pb-2 pl-5 border-l border-solid border-[#000]'>
                        <p className='text-sm leading-6 mb-4 font-bold'>신세계포인트 광고정보 수신동의</p>
                        <div className={styles.chk_box}>
                            <input 
                                className='left-0 top-0 w-3.5 h-3.5 rounded-full border border-black appearance-none cursor-pointer align-middle'
                                type="checkbox" 
                                id="receveAllspoint" 
                                disabled 
                            />
                            <label htmlFor="receveAllspoint" className='min-h-5 pt-px pl-2 text-[11px] leading-4 break-keep font-bold'>
                                전체동의
                            </label>
                        </div>
                        <div className='flex'>
                            {
                                adAgreement.map((items:Agreement) => (
                                    <div className={styles.chk_box}>
                                        <input 
                                            className='left-0 top-0 w-3.5 h-3.5 rounded-full border border-black appearance-none cursor-pointer align-middle'
                                            type="checkbox" 
                                            id={items.id} 
                                            disabled 
                                        />
                                        <label htmlFor="receveAllspoint" className='min-h-5 pt-px pl-2 pr-3 text-[11px] leading-4 break-keep font-bold'>
                                            {items.label}
                                        </label>
                                    </div>
                                ))
                            } 
                        </div>
                    </div>    
                </div>
            </div>
        </section>
    )
}

export default page