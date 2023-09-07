'use client'
import React, { useState } from 'react'
import styles from './PntGiftMainSub.module.css'

export default function PntGiftMessageForm() {
    const [isMesageUseChecked, setIsMesageUseChecked] = useState(false);
    const [isMesageNoChecked, setIsMesageNoChecked] = useState(false);
    
    // 둘 중 하나만 체크되도록 하는 함수
    const handleIsMesageUseChecked = () => {
        setIsMesageUseChecked(true);
        setIsMesageNoChecked(false);
    };
    const handleIsMesageNoChecked = () => {
        setIsMesageUseChecked(false);
        setIsMesageNoChecked(true);
    };
    return (
        <div className='px-5'>
            <p className='text-[12px] leading-[19px] mt-5'>포인트 선물 메시지</p>
                <div className={styles.Message_checkBox}>
                    <input
                        type="checkbox"
                        name="isMesageUse"
                        id="isMesageUse"
                        checked={isMesageUseChecked}
                        onChange={handleIsMesageUseChecked}
                    />
                    <label htmlFor="isMesageUse">사용</label>

                    <input
                        type="checkbox"
                        name="isMasageNo"
                        id="isMasageNo"
                        checked={isMesageNoChecked}
                        onChange={handleIsMesageNoChecked}
                    />
                    <label htmlFor="isMasageUNo">사용 안함</label>
                </div>

            {/* isMesageNoChecked 유무에 따라 표시 or null */}
            {isMesageUseChecked ? (
                <>
                    <div className='box-border my-5'>
                        <div className={styles.gift_card_paper}>
                            <div className='w-[315px] mx-auto'>
                                <div className={styles.card_cotents}>
                                    <textarea name="cardContents" id="메세지카드내용" maxLength={50} rows={3}
                                        className={styles.card_cotents_textarea} />
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
                </>
            ) : null}

        </div>
    )
}
