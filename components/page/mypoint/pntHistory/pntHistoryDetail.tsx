import React from 'react'
import styles from './pntHistory.module.css'

export default function PntHistoryDetail() {
  return (
    <ul className='pr-[5px] pl-[8px]'>
      {/* 선물 사용 취소 */}
        <li className='relative border-b-[1px] flex items-center min-h-[74px] py-[5px] tracking-tight'>
            <p className={styles.p_cancel}>-1P
              <span className='pl-[23px] text-[11px] leading-[11px] font-normal break-keep'>선물사용취소</span>
            </p>
            <p className={styles.p_lacation}>
                <span className='block w-full pt-[3px] text-[10px] text-[#767676] leading-[18px]'>보낸 선물 : 거절</span>
                <span className='block text-[14px] leading-[24px]'>양*민(ID : yc*****)</span>
            </p>
            <div className='absolute top-[16px] right-[5px]'>
              <p className='text-[11px] leading-[19px] text-[#767676] min-w-[62px]'>2023-08-10</p>
            </div>
        </li>
        {/* 선물 사용 - 거절 */}
        <li className='relative border-b-[1px] flex items-center min-h-[74px] py-[5px] tracking-tight'>
            <p className={styles.p_use}>1P
              <span className='pl-[23px] text-[11px] leading-[11px] font-normal break-keep'>선물사용</span>
            </p>
            <p className={styles.p_lacation}>
                <span className='block w-full pt-[3px] text-[10px] text-[#767676] leading-[18px]'>보낸 선물 : 거절</span>
                <span className='block text-[14px] leading-[24px]'>양*민(ID : yc*****)</span>
            </p>
            <div className='absolute top-[16px] right-[5px]'>
              <p className='text-[11px] leading-[19px] text-[#767676] min-w-[62px]'>2023-08-08</p>
              {/* 선물 사용 일 경우, 보낸 메시지 기록을 팝업으로 확인가능 한 버튼*/}
              <button className={styles.view_btn}>
              메세지보기
              </button>
            </div>
        </li>
        {/* 선물 사용 - 수락 */}
        <li className='relative border-b-[1px] flex items-center min-h-[74px] py-[5px] tracking-tight'>
            <p className={styles.p_use}>10P
              <span className='pl-[23px] text-[11px] leading-[11px] font-normal break-keep'>선물사용</span>
            </p>
            <p className={styles.p_lacation}>
                <span className='block w-full pt-[3px] text-[10px] text-[#767676] leading-[18px]'>보낸 선물 : 수락</span>
                <span className='block text-[14px] leading-[24px]'>엄*규(ID : ga*****)</span>
            </p>
            <div className='absolute top-[16px] right-[5px]'>
              <p className='text-[11px] leading-[19px] text-[#767676] min-w-[62px]'>2023-08-08</p>
              {/* 선물 사용 일 경우, 보낸 메시지 기록을 팝업으로 확인가능 한 버튼*/}
              <button className={styles.view_btn}>
              메세지보기
              </button>
            </div>
        </li>
        {/* 전환 사용 */}
        <li className='relative border-b-[1px] flex items-center min-h-[74px] py-[5px] tracking-tight'>
            <p className={styles.p_use}>10P
              <span className='pl-[23px] text-[11px] leading-[11px] font-normal break-keep'>전환사용</span>
            </p>
            <p className={styles.p_lacation}>
                <span className='block text-[14px] leading-[24px]'>신세계포인트 전환</span>
                <span className='block w-full pt-[3px] text-[10px] text-[#767676] leading-[18px]'>(신세계P→OK캐시벡(신)P)</span>
            </p>
            <div className='absolute top-[16px] right-[5px]'>
              <p className='text-[11px] leading-[19px] text-[#767676] min-w-[62px]'>2023-08-01</p>
              {/* 선물 사용 일 경우, 보낸 메시지 기록을 팝업으로 확인가능 한 버튼*/}
              <button className={styles.view_btn}>
              메세지보기
              </button>
            </div>
        </li>
        {/* 전환 적립 */}
        <li className='relative border-b-[1px] flex items-center min-h-[74px] py-[5px] tracking-tight'>
            <p className={styles.p_accumulate_detail}>10P
              <span className='pl-[23px] text-[11px] leading-[11px] font-normal break-keep'>전환사용</span>
            </p>
            <p className={styles.p_lacation}>
                <span className='block text-[14px] leading-[24px]'>신세계포인트 전환</span>
                <span className='block w-full pt-[3px] text-[10px] text-[#767676] leading-[18px]'>(OK캐시벡(신)P→신세계P)</span>
            </p>
            <div className='absolute top-[16px] right-[5px]'>
              <p className='text-[11px] leading-[19px] text-[#767676] min-w-[62px]'>2023-08-01</p>
            </div>
        </li>
        {/* 이벤트 적립 */}
        <li className='relative border-b-[1px] flex items-center min-h-[74px] py-[5px] tracking-tight'>
            <p className={styles.p_accumulate_detail}>10P
              <span className='pl-[23px] text-[11px] leading-[11px] font-normal break-keep'>이벤트적립</span>
            </p>
            <p className={styles.p_lacation}>
                <span className='block text-[14px] leading-[24px]'>신세계포인트닷컴</span>
                <span className='block w-full pt-[3px] text-[10px] text-[#767676] leading-[18px]'>[APP]출석체크 포인트 지급</span>
            </p>
            <div className='absolute top-[16px] right-[5px]'>
              <p className='text-[11px] leading-[19px] text-[#767676] min-w-[62px]'>2023-08-01</p>
            </div>
        </li>
    </ul>
  )
}

