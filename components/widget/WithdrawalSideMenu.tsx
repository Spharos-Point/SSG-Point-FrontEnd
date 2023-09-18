'use client'

import { signOut, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import React from 'react'
import styles from './WithdrawalSideMenu.module.css'
import { deleteNotice } from '@/data/noticeData';
import { FindIdNotice } from '@/types/noticeDataType';
import { useRouter } from 'next/navigation';

function WithdrawalSideMenu(props : {isOpened: Boolean, setIsOpened: React.Dispatch<React.SetStateAction<Boolean>>}) {

    const {isOpened, setIsOpened} = props;
    const {data: session} = useSession();

    const handleWithdrawalFetch = async () => {
        if(session) {
            const response = await fetch(`${process.env.BASE_API_URL}/api/v1/leaveOnline`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${session.user.token}`,
                },
            });

            const json = await response.json();
            if(json.code === 200) {
                signOut({callbackUrl: '/'})
            }
                
        }
    }

    return (
        <>   
            <div className={isOpened ? `${styles.sidemenuwrap} ${styles.open}` : `${styles.sidemenuwrap}`}>
                <div className='table relative w-full box-border min-h-[50px] z-[2]'>
                    <h2 className='text-[#000] text-[19px] leading-[28px] pt-[14px] pr-[60px] pb-[14px] pl-5 font-bold table-cell break-keep'>
                        회원탈퇴
                    </h2>
                </div>
                <div className='flex flex-1 flex-col h-auto relative z-[1]'>
                    <div className='pt-[24px] px-5 pb-0'>
                        <p className='text-lg leading-[30px] font-medium break-keep pb-[30px]'>
                            안녕하세요.
                            <strong className={`font-bold relative align-top z-[1] pr-1 pl-[1px]  after:content[''] after:inline-block after:absolute after:w-full after:h-[13px] after:bg-[#ffdfb5] after:-z-10 after:bottom-0 after:left-0`}>
                                {session?.user.name}
                            </strong>
                            님
                        </p>
                        <ul className={`${styles.note} pt-[10px]`}>
                            {
                                deleteNotice.map((items:FindIdNotice) => (
                                    <li 
                                        key={items.id} 
                                        className="relative text-[11px] leading-5 text-[#767676] pl-[7px] tracking-tighter 
                                        before:content-['·'] before:absolute before:left-0 before:top-0 before:leading-[20px] before:text-xs before:text-[#767676] before:font-bold"
                                    >
                                        {items.content}
                                    </li>
                                ))
                            }           
                        </ul>
                    </div>
                </div>
                <div className={styles.btn_box}>
                    <button className='mt-0 mr-2 mb-0 ml-0 text-[#767676] font-medium border border-solid border-[#bcbcbc]' onClick={() => setIsOpened(false)}>
                        취소하기
                    </button>
                    <button className='bg-[#000] text-[#fff]' onClick={handleWithdrawalFetch}>
                        회원 탈퇴하기
                    </button>
                </div>
                <button
                    className={`${styles.close} absolute right-0 top-0 w-[60px] h-[60px] bg-sideClose bg-[50%] bg-no-repeat indent-[-999em] text-transparent overflow-hidden z-30`}
                    onClick={() => setIsOpened(false)}
                >
                </button>
            </div>
            <div className={isOpened ? styles.overlay : ''} onClick={() => setIsOpened(false)}></div>
        </>
    )
}

export default WithdrawalSideMenu