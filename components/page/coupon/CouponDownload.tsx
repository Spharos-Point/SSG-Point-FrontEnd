'use client'
import React, { useEffect, useState } from 'react'
import styles from './CouponDownload.module.css'
import { useSession } from 'next-auth/react'

function CouponDownload({couponId}: {couponId: number}) {
    const session = useSession();

    const handleDownloadFetch =  async () => {

        if(session.status === "authenticated") {
            const response = await fetch("https://newbiefive.store/api/v1/couponPage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization" : `Bearer ${session.data.user.token}`
                },
                body:JSON.stringify({
                    couponId: couponId
                })
            });

            if(response.status === 200) {
                alert("쿠폰이 다운로드 되었습니다. 다운로드한 쿠폰은 마이 쿠폰함에서 확인할 수 있어요.")
            }
        } else {
            alert("쿠폰 다운로드를 위해 먼저 로그인해 주세요.")
        }

        const res = await fetch("http://localhost:8000/api/v1/benefits/myCoupon", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization" : `Bearer ${session.data?.user.token}`
                    },
                });

                if(res.status === 200) {
                    console.log(res);
                }
    }


    return (
        <button className={styles.coupon_use_btn} onClick={handleDownloadFetch}>
        </button>
    )
}

export default CouponDownload