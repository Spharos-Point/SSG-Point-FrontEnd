'use client'

import React, { useEffect, useState } from 'react'
import styles from './MycouponList.module.css'
import Image from 'next/image'
import { CouponDataType } from '@/types/couponDataType'
import CouponSort from '../coupon/CouponSort'
import CouponDate from '../coupon/CouponDate'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import MyCouponTop from './MyCouponTop'


function MycouponList() {

    const pathname = usePathname();
    const session = useSession();
    const [coupon, setCoupon] = useState<CouponDataType[]>();


    useEffect(() => {
        if(session.status === 'authenticated') {
            if(pathname === '/benefits/myCoupon') {
                fetch(`${process.env.BASE_API_URL}/api/v1/benefits/myCoupon`, {
                    method:'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization" : `Bearer ${session.data?.user.token}`
                    },
                })
                .then((res) => res.json())
                .then((data) => setCoupon(data));
            }
        }
    }, [])

    return (
        <>
        <MyCouponTop attendCount={coupon?.length}/>
        <div className='pt-[10px] px-5 pb-[60px] relative'>
            <CouponSort/>
            <ul>
                {
                    coupon !== undefined
                    ?
                    coupon.map((items:CouponDataType) => (
                        <li className={styles.coupon_list} key={items.id}>
                            <div className={styles.coupon_headline}>
                                <div className='relative'>
                                    <Image
                                    className={styles.coupon_point_img}
                                    src={items.couponValueImg}
                                    alt=""
                                    width={80}
                                    height={80}
                                />
                                </div>
                                <Image
                                    className={styles.brand_img}
                                    src={items.couponLogoImg}
                                    alt=""
                                    width={79}
                                    height={40}
                                />
                            </div>
                            <div className={styles.coupon_content}>
                                <p className={styles.cnt_desc}>
                                    {items.couponDesc}
                                </p>
                                <p className={styles.cnt_tit}>
                                    {items.couponName}
                                </p>
                                <p className={styles.cnt_term}>
                                    {items.regDate} ~ {items.endDate}
                                    <span className={styles.wq}>
                                        <CouponDate regDate={items.regDate} endDate={items.endDate}/>
                                    </span>
                                </p>
                                <div className={styles.franchisee}>
                                    <div className={styles.coupon_btn_wrap}>
                                        <div>
                                            <Image
                                                className={styles.img_box}
                                                src={items.couponImg}
                                                alt={items.couponDesc}
                                                width={20}
                                                height={20}
                                            />
                                        </div>
                                        <button className={styles.use_btn}>
                                            사용하기
                                        </button>                                       
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))
                    :
                    null
                }
            </ul>
        </div>
    </>
    )
}

export default MycouponList