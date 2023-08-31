
'use client'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from './AffiliatePntCardDetail.module.css'

export default function AffiliatePntCardDetail() {
    const [isclicked, setIsclicked] = useState<string | null>(null);
    const handleClick = (buttonId: string) => {
        setIsclicked(buttonId);
    };

    return (
        <>
            <div className='flex text-[14px]'>
                <button id="samsung_membership"
                    className={isclicked === "samsung_membership" ? styles.membership_tab_on : styles.membership_tab}
                    onClick={() => handleClick("samsung_membership")}>
                    삼성전자<br />멤버십
                </button>
                <button id="koreanair_membership"
                    className={isclicked === "koreanair_membership" ? styles.membership_tab_on : styles.membership_tab}
                    onClick={() => handleClick("koreanair_membership")}>
                    대한한공
                </button>
                <button id="asianaair_membership"
                    className={isclicked === "asianaair_membership" ? styles.membership_tab_on : styles.membership_tab}
                    onClick={() => handleClick("asianaair_membership")}>
                    아시아나 항공
                </button>
            </div>

            <div className='p-[20px]'>
                내용
            </div>
        </>
    )
}
