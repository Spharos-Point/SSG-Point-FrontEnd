import React from 'react'
import styles from './InfoRcvAgreeMiddle.module.css'

function InfoRcvAgreeMiddle() {
    return (
        <div className='box-border pt-0 px-5 pb-10'>
            <p className='border-b border-solid border-[#000] pt-0 pr-0 pb-3 pl-0 text-[16px] font-bold leading-[26px]'>
                등록된 연락처 정보를 확인하세요. 
            </p>
            <div className={styles.user_info}>
                <dl className='pb-4'>
                    <dt className='text-[13px] leading-[21px] font-bold'>휴대폰 번호</dt>
                    <dd className='text-[13px] leading-[21px] text-[#767676]'>010-****-****</dd>
                </dl>
                <dl className='pb-4'>
                    <dt className='text-[13px] leading-[21px] font-bold'>이메일</dt>
                    <dd className='text-[13px] leading-[21px] text-[#767676]'>******@naver.com</dd>
                </dl>
                <dl className='pb-4'>
                    <dt className='text-[13px] leading-[21px] font-bold'>주소</dt>
                    <dd className='text-[13px] leading-[21px] text-[#767676]'>*********, *****</dd>
                </dl>
            </div>
        </div>
    )
}

export default InfoRcvAgreeMiddle