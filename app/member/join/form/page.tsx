import React from 'react'
import styles from './form.module.css'
import { adAgreement, formAgreements } from '@/data/agreeData'
import { Agreement } from '@/types/agreeDataType'
import JoinForm from '@/components/page/join/JoinForm'
import Link from 'next/link'

function page() {

    // const handleJoinFetch = async () => {
    //     const response = await fetch(`http://10.10.10.95:8000/api/v1/auth/signup`, {
    //       method: 'POST',
    //     //   body: {

    //     //   }
    //     });
    // }

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
                                className='left-0 top-0 w-4 h-4 rounded-full border border-black appearance-none cursor-pointer align-middle'
                                type="checkbox" 
                                id="receveAllspoint" 
                                // disabled 
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
                                            className='left-0 top-0 w-4 h-4 rounded-full border border-black appearance-none cursor-pointer align-middle'
                                            type="checkbox" 
                                            id={items.id} 
                                            // disabled 
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
            <div className='my-0 mx-5'> 
                <p className='text-[11px] leading-5 text-[#505050] break-keep'>
                    당사, 관계사, 신세계포인트 제휴사가 제공하는 상품 및 서비스 홍보, 
                    소식지 제공, 이벤트 정보 제공(할인 쿠폰, 포인트 추가 적립, 상품 할인 포함),
                    제휴행사를 안내해 드립니다. 수신동의 변경은 신세계포인트 
                    고객센터 및 홈페이지(www.shinsegaepoint.com)에서 가능합니다.
                    <br/>
                    ※ 서비스 주요 정책 및 공지사항 안내 등은 수신동의 여부와 관계없이 발송됩니다. 
                </p>
            </div>
            <div className='py-10 px-5'>
                <div className='btn_box'>
                    {/* <Link href='/member/join/success' className={styles.btn_primary}>확인</Link> */}
                    <button className='btn_primary' >확인</button>
                </div>
            </div>
        </section>
    )
}

export default page