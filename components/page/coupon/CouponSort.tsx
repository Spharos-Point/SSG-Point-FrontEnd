'use client'

import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import styles from './CouponSort.module.css'
import Link from 'next/link';

function CouponSort() {

    const router = useRouter();
    const pathname = usePathname();
    console.log(pathname)
    const handleselect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(`/coupon?sort=${e.target.value}`)
    }

    return (
        <div className='h-[46px] flex items-center justify-between border-b border-solid border-[#000]'>
                <div className='relative inline-block align-top w-[95px] h-[38px] ml-10px rounded-none text-[0px]'>
                    <select 
                        className={`${styles.select_box} block w-full box-border text-[13px] relative z-[1] text-[#000] h-[38px] mr-[30px] ml-[16px] font-bold`}
                        onChange={handleselect}
                    >
                        <option value={'end'} className='border-0'>마감임박</option>
                        <option value={'new'} className='border-0'>최신순</option>
                    </select>
                </div>
                {
                    pathname === '/coupon'
                    ?
                    <div className='pr-[5px]'>
                        <button className={`${styles.btn_all} text-[13px] relative pr-[26px] font-bold `}>
                            전체다운
                        </button>
                    </div>
                    :
                    pathname === '/benefits/myCoupon'
                    ?
                    <div className='pr-[5px]'>
                        <Link className={styles.btn_more} href='/coupon'>
                            더 많은 쿠폰 보기
                        </Link>
                    </div>
                    :
                    null
                }   
            </div>
    )
}

export default CouponSort