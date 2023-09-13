'use client'
import React, { useState } from 'react'
import styles from './AffiliateAgreeNotice.module.css'
import Note from '@/components/page/note/note'
import { regAffiliatePntCardNotice } from '@/data/noticeData';

export default function AffiliateAgreeNotice() {
    const [isclicked, setIsclicked] = useState(true);

    const handleButtonClick = () => {
        setIsclicked(!isclicked);
    }
    const buttonClasses = isclicked ? styles.membership_button_active : styles.membership_button_default;
    const displayClasses = isclicked ? styles.hidden : "";
    return (
        <div className='pt-[32px] px-[20px] pb-[40px]'>
            <div className='flex align-middle w-full'>
                <h3 className='flex-auto text-[14px] leading-[24px] font-medium'>유의사항</h3>
                <button className={buttonClasses} onClick={handleButtonClick}>
                    <span className='hidden'>상세보기</span>
                </button>
            </div>
            <div className={displayClasses}>
                <Note note={regAffiliatePntCardNotice} />
            </div>
        </div>
    )
}
