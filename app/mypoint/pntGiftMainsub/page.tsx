'use client'
import React from 'react'
import styles from './pntGiftMainsub.module.css'
import Link from 'next/link'

export default function PntGiftMainsubpage() {
  return (
    <section>
      <div className='px-[20px] py-[40px]'>
        <h3 className='text-[23px] leading-[30px] font-normal break-all'>
          <strong> 선물하기 </strong>
        </h3>
        <p className='text-[14px] leading-[24px] text-[#767676] break-all pt-[8px]'>
          신세계포인트를 선물 받으실 분의
          <br />
          정보를 정확하게 입력해 주세요.
        </p>
      </div>
      <div className='box-bording px-5'>
        <label htmlFor="phoneNumber" className="hidden">휴대폰 번호</label>
        <input type="text" id="phoneNumber" className={styles.input_box1} placeholder="-없이 휴대폰 번호를 입력해 주세요." />
        <label htmlFor="userName" className="hidden">사용자 이름</label>
        <input type="text" id="userName" className={styles.input_box1} placeholder='실명을 정확하게 입력해 주세요.' />
        <button className='mt-10 mb-20 box-border bg-black text-[14px] text-white text-center p-[12px] w-full rounded-[8px]'>
          조회하기
        </button>

        {/* 받을 사람 조회 결과 일치하는 유저 정보가 있고, 그 정보를 선택하는 버튼을 누르면 'box-border': 'hidden' */}
        {/* 조회 결과 받아온 유저의 이름, ID 정보를 아래에 삽입 */}
        <div className='box-border'>
          <p className='text-[14px] text-[#ea035c] font-bold pb-[15px]'>포인트 선물 받으실 분을 확인하세요.</p>
          <div className='box-border border-[2px] border-[#ea035c] shadow-xl rounded-[8px] p-[20px]'>
            <div className='flex justify-between box-border leading-[19px]'>
              <p className={'text-[11px] text-[#767676]'}>선물 받을 분 :
                <strong className='block text-[14px] leading-[24px] pt-[2px] text-black'>
                  {"양*민"}(ID: {"yc****"})
                </strong>
              </p>
            </div>
          </div>

          <div className='box-border pt-10'>
            <p className='text-[14px] font-bold'>선물가능 포인트</p>
            <div className='h-[50px] pt-[5px]'>
              <p className={styles.p_accumulate}>
                {9999999}
              </p>
            </div>
          </div>

          <label htmlFor="phoneNumber" className="after:content-['*'] after:ml-0.5 after:text-red-500 block 
          text-sm font-bold text-slate-700 pb-2">
            선물할 포인트
          </label>
          <input type="text" id="phoneNumber" className={styles.input_box2} />

          <label htmlFor="phoneNumber" className="after:content-['*'] after:ml-0.5 after:text-red-500 block 
          text-sm font-bold text-slate-700 pb-2">
            포인트 비밀번호
          </label>
          <input type="text" id="userName" className={styles.input_box3} />
          <button className={styles.Link_btn}>
            <Link href={'/mypoint/chgPntPwdCert'}>
              포인트 비밀번호가 기억나지 않으세요?
            </Link>
          </button>

          <div>
            <p className='text-[12px] leading-[19px] mt-5'>포인트 선물 메시지</p>
            <div >
              <div className={styles.Message_checkBox}>
                <input
                  type="checkbox"
                  name="isMesageUse"
                  id="isMesageUse"
                />
                <label htmlFor="isMesageUse">사용</label>

                <input
                  type="checkbox"
                  name="isMasageNo"
                  id="isMasageNo"
                />
                <label htmlFor="isMasageUNo">사용 안함</label>
              </div>
              {/* 상위 버튼의 클릭 여부에 따라  className='box-border my-[20px] flex justify-center' 또는 classname = 'hidden' */}
              <div className='box-border my-[20px] flex justify-center'>
                <div className={styles.gift_card_paper}>
                <div className='w-[315px] mx-auto'>
                  <div className={styles.card_cotents}>
                    <textarea name="cardContents" id="메세지카드내용" maxLength={50} rows={3}
                    className={styles.card_cotents_textarea}/>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center pb-[20px]'>
            <button className='mr-[5px] box-border border-[1px] rounded-[8px] px-[15px] py-[11px] text-[#767676] w-full'>
              미리보기
            </button>
            <button className='ml-[5px] box-border btn_primary rounded-[9px] w-full'>
              선물하기
            </button>
          </div>
        </div>
      </div>
      <div className='box-bording px-5'>
        유의사항 컴포넌트
      </div>
    </section>
  )
}
