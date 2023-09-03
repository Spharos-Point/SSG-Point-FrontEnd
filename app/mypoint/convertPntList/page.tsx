import React from 'react'
import styles from './ConvertPntList.module.css'
import ConvertPntURL from '@/components/page/mypoint/convertPntList/convertPntURL'


export default function convertPntList() {
  return (
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
        <ConvertPntURL />
        <button>
          전환하기
        </button>
      </div>
    </section>
  )
}

