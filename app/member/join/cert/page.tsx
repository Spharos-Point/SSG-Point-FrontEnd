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
        <div className='pt-8 px-5 pb-20'>
            <h3 className='pb-2 text-sm leading-[24px] font-medium'>[유의사항]</h3>
            <ul className={styles.list_cnt}>
                <li className='relative text-[11px] leading-5 text-[#767676] pl-[7px] tracking-tighter'>
                    본인 명의의 인증 수단 정보를 정확히 입력해 주세요.
                </li>
                <li className='relative text-[11px] leading-5 text-[#767676] pl-[7px] tracking-tighter'>
                    법인명의 휴대전화(법인폰)는 통신사에서 본인인증 서비스 신청 후 휴대폰 인증을 하실 수 있습니다.
                </li>
                <li className='relative text-[11px] leading-5 text-[#767676] pl-[7px] tracking-tighter'>
                    개명하신 회원님의 경우 통신사 등에 등록된 본인인증 정보가 개명하신 이름으로 바뀐 이후부터 자동으로 변경됩니다.
                </li>
                <li className='relative text-[11px] leading-5 text-[#767676] pl-[7px] tracking-tighter'>
                    인증 오류 시 코리아크레딧뷰로 고객센터 02-708-1000에 문의해 주세요.
                </li>
            </ul>
        </div>
    </section>
  )
}

export default page