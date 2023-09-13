'use client'
import React, { useState } from 'react'
import styles from './AffiliateAgreeNotice.module.css'

export default function AffiliateAgreeNotice() {
    const [isclicked, setIsclicked] = useState(true);

    const handleButtonClick = () => {
        setIsclicked(!isclicked);
    }
    const buttonClasses = isclicked ? styles.membership_button_active : styles.membership_button_default;
    const displayClasses = isclicked ? styles.hidden : "";
    return (
        <div className='pt-[32px] px-[20px] pb-[80px]'>
            <div className='flex align-middle w-full'>
                <h3 className='flex-auto text-[14px] leading-[24px] font-medium'>유의사항</h3>
                <button className={buttonClasses} onClick={handleButtonClick}>
                    <span className='hidden'>상세보기</span>
                </button>
            </div>
            <div className={displayClasses}>
                <ul className='pt-[12px] mt-[12px] border-t-[1px] text-[12px]'>
                    <li className="before:contents-['·'] ">
                        제휴 멤버십 동시 적립 서비스는 이마트에서만 제공되는 서비스입니다.
                    </li>
                    <li className="before:contents-['·'] ">
                        해당 제휴사에서 승인된 멤버십 카드 번호만 등록하실 수 있습니다.
                    </li>
                    <li className="before:contents-['·'] ">
                        제휴사당 최대 1개의 카드만 등록하실 수 있습니다.
                    </li>
                    <li className="before:contents-['·'] ">
                        잘못된 제휴 멤버십 카드번호 등록 시 제휴 포인트는 적립되지 않으며 잘못된 정보 등록에 대한 책임은 등록한 회원에게 있습니다.
                    </li>
                    <li className="before:contents-['·'] ">
                        제휴 멤버십의 상태가 정상일 경우에만 포인트가 적립됩니다. (휴면/탈퇴 시 적립불가)
                    </li>
                    <li className="before:contents-['·'] ">
                        이미 등록된 제휴 멤버십 카드는 다른 ID로 중복 등록할 수 없습니다.
                    </li>
                    <li className="before:contents-['·'] ">
                        동시 적립 서비스만 제공되며, 제휴 포인트 사용을 원할 경우에는 해당 제휴사 카드를 제시해야 합니다.
                    </li>
                    <li className="before:contents-['·'] ">
                        제휴 종료 시 사전 공지드리며, 기존에 등록된 제휴 멤버십 카드번호는 종료일 기준으로 일괄 삭제됩니다.
                    </li>
                    <li className="before:contents-['·'] ">
                        자세한 제휴 포인트의 적립/사용 정책은 해당 제휴사에 문의해 주세요.
                    </li>
                </ul>
            </div>
        </div>
    )
}
