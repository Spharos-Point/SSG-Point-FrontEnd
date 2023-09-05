
'use client'
import React from 'react'
import { useState } from 'react'
import styles from './AffiliateCompany.module.css'
import Samsung from './samsung'
import Koreanair from './koreanair'
import Asianaair from './asianaair'


export default function AffiliatePntCardDetail() {

    const [selectedCompany, setSelectedCompany] = useState<string | null>("samsung_membership");

    // 제휴사 버튼 클릭 시, 해당 제휴사의 버튼에 on 스타일 적용
    const handleButtonClick = (buttonId: string) => {
        setSelectedCompany(buttonId);
    };
    // 선택된 제휴사에 따라서 해당 제휴사의 컴포넌트를 렌더링
    const isSelectedCompanyComponent = () => {
        if (selectedCompany === "samsung_membership") {
            return <Samsung />
        } else if (selectedCompany === "koreanair_membership") {
            return <Koreanair />
        } else if (selectedCompany === "asianaair_membership") {
            return <Asianaair />
        }
    };

    return (
        <>
            <div className='flex text-[14px]'>
                <button id="samsung_membership"
                    className={selectedCompany === "samsung_membership" ? styles.membership_tab_on : styles.membership_tab}
                    onClick={() => handleButtonClick("samsung_membership")}>
                    삼성전자<br />멤버십
                </button>
                <button id="koreanair_membership"
                    className={selectedCompany === "koreanair_membership" ? styles.membership_tab_on : styles.membership_tab}
                    onClick={() => handleButtonClick("koreanair_membership")}>
                    대한한공
                </button>
                <button id="asianaair_membership"
                    className={selectedCompany === "asianaair_membership" ? styles.membership_tab_on : styles.membership_tab}
                    onClick={() => handleButtonClick("asianaair_membership")}>
                    아시아나 항공
                </button>
            </div>

            <div className='p-[20px]'>
                {isSelectedCompanyComponent()}
            </div>
        </>
    )
}
