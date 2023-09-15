'use client'
import React from 'react'
import styles from './convertPntList.module.css'
import ConvertPntURL from '@/components/page/mypoint/convertPntList/convertPntURL'

export default function convertPntList() {
    return(
    <section>
      <div className='px-[20px] py-[40px]'>
        <h3 className='text-[20px] leading-[30px] font-medium break-all'>
          여기저기 흩어져 있는 포인트를
          <br />
          신세계포인트로
          <strong className='text-[#ea035c]'> 한 곳에 모아보세요.</strong>
        </h3>
        <p className='text-[14px] leading-[24px] text-[#767676] break-keep pt-[8px]'>
          알뜰하게 적립한 포인트를 모두 모아
          <br />
          자주 사용하는 포인트로 전환해 보세요.
        </p>
        <div className={styles.point_switch_step}>
          <ol>
            <li>
              <span className="block text-[11px] leading-[19px] text-[#ea035c]">포인트 선택</span>
            </li>
            <li>
              <span className="block text-[11px] leading-[19px]">포인트 입력</span>
            </li>
            <li>
              <span className="block text-[11px] leading-[19px]">포인트 전환</span>
            </li>
          </ol>
        </div>
      </div>
      <ConvertPntURL />
      <div className='pr-[20px] pb-[80px] pl-[20px]'>
        <button className={styles.btn_box}>
          전환하기
        </button>

        <button className='relative text-right pt-[14px] text-[12px] text-[#767676] font-normal w-full'>
          <a className='after:bg-[url(../public/btn_arrow_under.png)] after:bg-no-repeat; 
          after:w-[8px] after:h-[5px] after:ml-[5px] after:inline-block after:opacity-[.5]
          after:rotate-[-90deg] after:bg-contain'>
            포인트 한번에 조회하기 동의 철회
          </a>
        </button>
      </div>
    </section>
  );
}


