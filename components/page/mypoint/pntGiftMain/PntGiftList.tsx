import React from 'react'
import styles from './PntGiftList.module.css'

export default function PntGiftList() {
    return (
        <div className='px-[20px] pb-[40px]'>
            <p className='text-[14px] font-medium leading-[24px] pb-[12px]'>
                포인트 선물 내역을 확인하세요.
            </p>
            <div className='flex border-t-[1px] border-t-black border-b-[1px]'>
                <div>
                    <select title='정렬 항목 선택'
                        className='left-0 top-[10px] block box-border w-full h-[45px] pr-[22px] pl-[5px] text-[13px]'>
                        <option value="01">전체</option>
                        <option value="02">받은 선물</option>
                        <option value="03">보낸 선물</option>
                    </select>
                </div>
                <div className='flex-grow'>
                    <div className='flex justify-end h-full items-center '>
                        <p className={styles.PntGiftList_plus}>
                            적립
                            <strong className='text-[13px] leading-[13px] font-normal ml-[8px]'>
                                {1}P
                            </strong>
                        </p>
                        <p className={styles.PntGiftList_minus}>
                            사용
                            <strong className='text-[13px] leading-[13px] font-normal ml-[8px]'>
                                {0}P
                            </strong>
                        </p>
                    </div>
                </div>
            </div>
            {/* 컴포넌트화 작업 필요 */}
            <ul className='px-[5px]'>
                <li className='flex flex-wrap items-center min-h-[74px] py-[5px] border-b-[1px] '>
                    <p className={styles.p_accumulate}>{1}P
                        <span>{"선물적립"}</span>
                    </p>
                    <p className={styles.p_loacation}>
                        <span className='block pt-[3px] w-full text-[10px] text-[#767676] leading-[18px]'>
                            {"받은 선물: 수락"}
                        </span>
                        <span className='block text-[14px] leading-[24px]'>
                            {"양*민"}({"ID : yc*****"})
                        </span>
                    </p>
                    <div className='flex-grow'>
                        <div className="flex justify-end">
                            <div className='box-border top-[16px] items-center text-[11px] text-[#767676] min-w-62px'>
                                <p className='leading-[19px]'>
                                    2023-09-03
                                </p>
                                <button className={styles.view_btn}>
                                    메시지보기
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
