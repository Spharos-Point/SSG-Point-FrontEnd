import React from 'react'
import styles from './pntHistory.module.css'
import LaterOneMonth from './LaterOneMonth'
import LaterTwoMonth from './LaterTwoMonth'

export default function PntHistoryPointBox({userTotalpoint}: {userTotalpoint: number}){
  return(
        <div className='p-[24px] bg-[#fbfbfb]'>
        <div className={styles.cardbox}>

          <div className="h-[40px] relative items-center pr-[12px] pl-[20px] flex">
            <h3 className={styles.tit_img}><span className='hidden'>신세계 포인트 로고</span></h3>
            <button className={styles.btn_info}><span className='hidden'>신세계포인트 상세 안내</span></button>
          </div>

            <div className={styles.item_cnt}>
                <dl className={styles.total_point}>
                    {/* 보유포인트 */}
                    <div className='text-[13px] font-bold leading-6 grow shrink basis-0'>사용 가능</div>
                    <div className='flex item-center justify-end text-[24px] leading-[29px] font-bold'>
                      {userTotalpoint}
                      <div className={styles.total_point_dd_icon}>
                        <span className='hidden'>아이콘</span>
                      </div>
                    </div>
                </dl>
                <dl className='flex text-[12px] '>
                  {/* 적립예정 포인트 */}
                  <dt className={styles.item_cnt_dt}>적립 예정</dt>
                  <dd className='not-italic'>{0}p</dd>
                </dl>
                <dl className='flex text-[12px]'>
                  <dt className={styles.item_cnt_dt}>소멸 예정</dt>
                  <dd>
                    <span className='flex text-left'>
                        {/* 다음달 1일 소멸 예정 포인트 */}
                        <em className={styles.date}><LaterOneMonth/></em>
                        <em className='not-italic'>{0}p</em>
                    </span>
                    <span className='flex text-left'>
                        {/* 다다음달 1일 소멸 예정 포인트 */}
                        <em className={styles.date}><LaterTwoMonth/></em>
                        <em className='not-italic'>{0}p</em>
                    </span>
                  </dd>
                </dl>
            </div>
        </div>
      </div>

    )
}
