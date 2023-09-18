'use client'
import React from 'react'
import styles from './AffiliateAgreeForm.module.css'
import Swal from 'sweetalert2'

export default function AffiliateAgreeForm() {
    return (
        <>
            <div className=' bg-[#fbfbfb] p-[17px] border-b-[1px] border-b-[#e8e8e8] mb-[40px]'>
                <div className='flex relative pb-[8px]'>
                    <p className='text-[14px]  tracking-tight leading-[24px] pr-[3px] '>[필수] 제휴 멤버십 포인트 개인정보 수집 및 이용 동의
                    </p>
                    <button className='w-[24px] h-[24px]
                after:block after:mt-[2px] after:ml-[14px] after:w-[10px] after:h-[5.8px]
                after:bg-[url(../public/btn_arrow_under.png)] after:bg-contain after:rotate-[-90deg] after:opacity-40'>
                        <span className='hidden'>제휴사 멤버십 혜택 내용보기</span>
                    </button>
                </div>
                <div className='flexd align-top leading-[18px]'>
                    <input type='checkbox' className='' />
                    <span className='text-[14px] pl-[10px]'>  동의합니다.</span>
                </div>
            </div>
            <div className='px-[20px] pb-[40px]'>
                <div className='border-box pb-[16px]'>
                    <p className="text-[13px] leading-[21px] pb-[8px] after:content-['*'] after:ml-0.5 after:text-red-500">제휴 멤버십 선택</p>
                    <div className='relative w-full inline-block align-top bg-white rounded-[8px]'>
                        <select className={styles.select_box_select}>
                            <option value="">제휴사를 선택하세요</option>
                            <option value="Samsung">삼성전자 포인트</option>
                            <option value="Korean">대한항공 마일리지</option>
                            <option value="Asiana">아시아나 마일리지</option>
                        </select>
                    </div>
                </div>
                <div className='border-box pb-[16px]'>
                    <span className="text-[13px] leading-[21px] pb-[8px] after:content-['*'] after:ml-0.5 after:text-red-500">카드번호</span>
                    <div className={styles.input_cardnum_box}>
                        <div className='flex'>
                            <input className='h-[48px] w-full text-center rounded-[8px]' type="tel" maxLength={4} ></input>
                            <span className='pt-[12px] h-[48px]'>-</span>
                            <input className='h-[48px] w-full text-center rounded-[8px]' type="tel" maxLength={4} ></input>
                            <span className='pt-[12px] h-[48px]'>-</span>
                            <input className='h-[48px] w-full text-center rounded-[8px]' type="tel" maxLength={4} ></input>
                            <span className='pt-[12px] h-[48px]'>-</span>
                            <input className='h-[48px] w-full text-center rounded-[8px]' type="tel" maxLength={4} ></input>
                        </div>
                    </div>
                </div>
                <button className='pt-[30px] w-full h-[48px] box-border'
                    onClick={() => {
                        Swal.fire({
                            title: '개발 중 상태입니다.',
                            icon: 'info',
                            confirmButtonText: '확인',
                            confirmButtonColor: '#615EFF',
                        });
                    }}>
                    <a className={styles.btn_box}>등록하기</a>
                </button>
            </div>
        </>
    )
}
