'use client'

import React, { useState } from 'react'
import styles from './LeaveOnlineMiddle.module.css'
import Note from '../note/note'
import { leaveOnlineNotice } from '@/data/noticeData'
import { useSession } from 'next-auth/react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
import WithdrawalSideMenu from '@/components/widget/WithdrawalSideMenu'

function LeaveOnlineMiddle() {

    const { data: session } = useSession();
    const router = useRouter();
    const [isOpened, setIsOpened] = useState<Boolean>(false)
    const handleSideMenu = () => {
        setIsOpened(!isOpened)
    }

    const handleWithdrawal = () => {
        if(session) {
            Swal.fire({
                title: `${session.user.name}님께서는 온라인 ID를 탈퇴 시 
                        신세계포인트 서비스에서 완전히 탈퇴되어 
                        더 이상 다양한 혜택 및 서비스를 
                        이용하실 수 없습니다. `,
                text: "※신세계그룹의 각 사별 적립금/마일리지/포인트 등도 모두 함께 소멸됩니다. ",
                showCancelButton: true,
                confirmButtonText: "그래도 탈퇴하기",
                cancelButtonText: "다시 생각해보기",
                customClass: {
                    confirmButton: "mySwalConfirmButton_swal",
                    cancelButton: "mySwalCancelButton_swal",
                    title: "mySwalTitle",
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    handleSideMenu();
                }
            })
        }
    }

    return (
        <>
            <WithdrawalSideMenu isOpened={isOpened} setIsOpened={setIsOpened}/>
            <div>
                <h3 className={styles.tit}> 회원 탈퇴 사이트 </h3>
                <div className="pt-4 px-5 pb-5">
                    <div className='py-10 px-0 border-b border-solid border-[#e5e5e5]'>
                        <p className={styles.no_txt}>확인된 온라인 가입 사이트 정보가 없습니다.</p>
                    </div>
                </div>
                <ul className='pt-0 px-5 pb-5 m-0'>
                    <li className={`relative text-[11px] leading-5 text-[#767676] pl-[7px] tracking-tighter 
                    before:content-['·'] before:absolute before:left-0 before:top-0 before:leading-[20px] before:text-xs before:text-[#767676] before:font-bold`}>
                            일부 사이트만 탈퇴를 원하시는 경우 해당 사이트에서 개별적으로 탈퇴하실 수 있습니다. 
                    </li>
                </ul>
            </div>
            <div className={styles.note}>
                <Note note={leaveOnlineNotice}/>
            </div>
            <div className='pt-5 px-5 pb-20'>
                <div className='chk_box relative inline-block align-top'>
                    <input type="checkbox" id='checkbox' className='absolute left-0 top-0 w-5 h-5 rounded-full border border-black appearance-none cursor-pointer align-middle'/>
                    <label htmlFor="checkbox" className='block min-h-5 pt-px pl-7 text-[13px] leading-4 break-keep font-bold'>
                        탈퇴 유의사항을 모두 확인하였으며,
                        <br/> 
                        신세계포인트 온라인 통합ID 서비스 탈퇴에 동의합니다.
                    </label>
                </div>
                <div className='btn_box mt-10'>
                    <button className={styles.btn} onClick={handleWithdrawal}>
                        온라인 통합ID 탈퇴하기
                    </button>
                </div>
            </div>
        </>
    )
}

export default LeaveOnlineMiddle