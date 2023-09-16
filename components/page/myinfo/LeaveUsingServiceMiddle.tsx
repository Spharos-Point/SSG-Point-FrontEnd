import React from 'react'
import styles from './LeaveUsingServiceMiddle.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Note from '../note/note'
import { withdrawalNotice } from '@/data/noticeData'
import { FindIdNotice } from '@/types/noticeDataType'

function LeaveUsingServiceMiddle() {
    return (
        <>
            <div className='pt-0 px-5 pb-10'>
                <div className='flex items-center pb-[12px] border-b border-solid border-[#000]'>
                    <Image
                        className='w-10 mr-2'
                        src='https://storage.googleapis.com/team3_spharos_bucket/img/logo/online.png'
                        alt='온라인 가입 사이트 아이콘'
                        width={40}
                        height={40}
                    />
                    <p className='text-base leading-[26px] font-bold'>가입한 온라인 사이트</p>
                </div>
                <div className='border-t border-solid border-[#000]'>
                    {/* <table className='border-collapse border-spacing-0'>
                        <colgroup className='table-column-group'>
                            <col className='w-[101px]'/>
                            <col className='w-[64%]'/>
                            <col className='w-[75px]'/>
                        </colgroup>
                        <thead className='border-0'>
                            <tr className={styles.table_list}>
                                <th className='align-middle pl-[10px] '>
                                    <Image
                                        className='h-[10px] bg-red'
                                        src='https://storage.googleapis.com/team3_spharos_bucket/img/logo/emart_m_20.png'
                                        alt='이마트'
                                        width={35}
                                        height={10}
                                    />
                                </th>
                                <td className={styles.table_list_td1}>이마트</td>
                                <td className={styles.table_list_td2}>
                                    <Link href='https://member.shinsegaepoint.com/emart/emartApp/myinfo/withdrawalPassword'>
                                        <span className='text-[11px]'>
                                            바로가기
                                        </span>
                                    </Link>
                                </td>
                            </tr>
                            <tr className={styles.table_list}>
                                <th className='align-middle pl-[10px] '>
                                    <Image
                                        className='h-[10px] bg-red'
                                        src='https://storage.googleapis.com/team3_spharos_bucket/img/logo/shinsegae_m_20.png'
                                        alt='이마트'
                                        width={51}
                                        height={10}
                                    />
                                </th>
                                <td className={styles.table_list_td1}>신세계포인트</td>
                                <td className={styles.table_list_td2}>
                                    <Link href='https://member.shinsegaepoint.com/shinsegae/shinsegaeApp/myinfo/withdrawalPassword'>
                                        <span className='text-[11px]'>
                                            바로가기
                                        </span>
                                    </Link>
                                </td>
                            </tr>
                        </thead>
                    </table> */}
                    <div className="pt-4 px-5 pb-5">
                        <div className='py-10 px-0 border-b border-solid border-[#e5e5e5]'>
                            <p className={styles.no_txt}>확인된 온라인 가입 사이트 정보가 없습니다.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-0 px-5 pb-10'>
                <div className='flex items-center pb-[12px] border-b border-solid border-[#000]'>
                    <Image
                        className='w-10 mr-2'
                        src='https://storage.googleapis.com/team3_spharos_bucket/img/logo/online.png'
                        alt='이용중인 통합 멤버십'
                        width={40}
                        height={40}
                    />
                    <p className='text-base leading-[26px] font-bold'>이용중인 통합 멤버십</p>
                </div>
                <div>
                    <div className='py-10 px-0 border-b border-solid border-[#e5e5e5]'>
                        <p className={styles.no_txt}>확인된 온라인 가입 사이트 정보가 없습니다.</p>
                    </div>
                </div>
                <ul className="pt-[15px]">
                    {
                        withdrawalNotice.map((items:FindIdNotice) => (
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
            <div className='pt-10 px-5 pb-20'>
                <div className={styles.online_secession_wrap}>
                    <div className={styles.online_secession}>
                        <Image
                            className='w-[64px] h-[64px]'
                            src='https://storage.googleapis.com/team3_spharos_bucket/img/logo/online_secession.png'
                            alt='이용중인 통합 멤버십'
                            width={64}
                            height={64}
                        />
                        <div className='pt-0 pr-0 pb-0 pl-[19px]'>
                            <p className='pb-1 text-base leading-[26px]'> 
                                <Link href='/myinfo/withdrawal/leaveOnline' className='text-[#ea035c] font-bold'>
                                    <span className={`${styles.txt}`}>
                                        온라인 통합ID 탈퇴 
                                    </span>
                                </Link>
                            </p>
                            <p className='text-[13px] text-[#505050] break-keep leading-[21px]'>
                                신세계포인트 통합ID로 이용중인 위의 온라인 서비스들을 더 이상 이용할 수 없게 됩니다. 
                            </p>
                        </div>
                    </div>
                    <ul className='pt-0 px-5 pb-5 m-0'>
                        <li className={`relative text-[11px] leading-5 text-[#767676] pl-[7px] tracking-tighter 
                        before:content-['·'] before:absolute before:left-0 before:top-0 before:leading-[20px] before:text-xs before:text-[#767676] before:font-bold`}>
                                일부 사이트만 탈퇴를 원하시는 경우 해당 사이트에서 개별적으로 탈퇴하실 수 있습니다. 
                        </li>
                    </ul>
                </div>
                <div className='text-right mt-4'>
                    <Link href='/myinfo/withdrawal/leaveOnline' className={`${styles.btn_arrow} text-[11px] leading-[19px] text-[#767676]`}>
                            신세계포인트 온/오프라인 완전 탈퇴하러 가기
                    </Link>
                </div>
            </div>
        </>
    )
}

export default LeaveUsingServiceMiddle