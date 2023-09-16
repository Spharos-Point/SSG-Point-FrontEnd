'use client'
import React, { useEffect, useState } from 'react'
import styles from './CouponDownload.module.css'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

function CouponDownload({couponId}: {couponId: number}) {
    const session = useSession();
    const router = useRouter();
    // const [coupon, setCoupon] = useState<CouponDataType[]>();

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
                Swal.fire({
                    text: "쿠폰이 다운로드 되었습니다. 다운로드한 쿠폰은 마이 쿠폰함에서 확인할 수 있어요.",
                    confirmButtonText: "확인",
                    customClass: {
                    confirmButton: "mySwalConfirmButton",
                    },
                })
            }
        } else {
            Swal.fire({
                text: "쿠폰 다운로드를 위해 먼저 로그인해 주세요.",
                showCancelButton: true,
                confirmButtonText: "로그인",
                cancelButtonText: "닫기",
                customClass: {
                    confirmButton: "mySwalConfirmButton",
                    cancelButton: "mySwalCancelButton",
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push('/login');
                }
            })
        }
        
    }


    return (
        <button className={styles.coupon_use_btn} onClick={handleDownloadFetch}>
        </button>
    )
}

export default CouponDownload