'use client'

import React, { useEffect, useState } from 'react'
import CouponSort from './CouponSort'
import styles from './CouponList.module.css'
import Image from 'next/image'
import { CouponDataType } from '@/types/couponDataType'
import CouponDate from './CouponDate'
import CouponDownload from './CouponDownload'

function CouponList() {

    const [coupon, setCoupon] = useState<CouponDataType[]>();


    useEffect(() => {
        fetch(`${process.env.BASE_API_URL}/api/v1/couponPage`, {
            method:'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((data) => setCoupon(data));
    }, [])


    return (
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
                                        <CouponDownload couponId={items.id}/>                                        
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
    )
}

export default CouponList