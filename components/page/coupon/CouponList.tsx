'use client'

import React, { useEffect, useState } from 'react'
import CouponSort from './CouponSort'
import styles from './CouponList.module.css'
import Image from 'next/image'
import { CouponDataType } from '@/types/couponDataType'
import { it } from 'node:test'

function CouponList() {

    const [coupon, setCoupon] = useState<CouponDataType[]>();

    useEffect(() => {
        fetch("http://localhost:4000/coupon", {
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
                                    src={items.coupon_value_img}
                                    alt={items.coupon_desc}
                                    width={80}
                                    height={80}
                                />
                                </div>
                                <Image
                                    className={styles.brand_img}
                                    src={items.coupon_logo_img}
                                    alt={items.coupon_desc}
                                    width={79}
                                    height={40}
                                />
                            </div>
                            <div className={styles.coupon_content}>
                                <p className={styles.cnt_desc}>
                                    {items.coupon_desc}
                                </p>
                                <p className={styles.cnt_tit}>
                                    {items.coupon_name}
                                </p>
                                <p className={styles.cnt_term}>
                                    {items.coupon_reg_date} ~ {items.coupon_ex_date}
                                    <span className={styles.wq}>일 남음</span>
                                </p>
                                <div className={styles.franchisee}>
                                    <div className={styles.coupon_btn_wrap}>
                                        <div>
                                            <Image
                                                className={styles.img_box}
                                                src={items.coupon_img}
                                                alt={items.coupon_desc}
                                                width={20}
                                                height={20}
                                            />
                                        </div>
                                        <button className={styles.coupon_use_btn}>

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
    )
}

export default CouponList