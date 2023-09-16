import React from 'react'
import styles from './CouponTop.module.css'
import Link from 'next/link'

function CouponTop() {
    return (
        <div className='mt-[36px]'>
            <div className={styles.coupon_top}>
                <div className={styles.coupon_tit}>
                    <strong>
                        쇼핑 할인에서 제휴 우대까지
                        <br/>
                        신세계포인트 회원만
                        <br/>
                        누릴 수 있는 혜택!
                    </strong>
                    <p>
                        원하는 쿠폰을 다운로드하고
                        <br/>
                        마이 쿠폰함에 쓱- 담아 사용해 보세요.
                    </p>
                </div>
            </div>
            <div className={styles.coupon_bot}>
                <div className={styles.coupon_banner}></div>
                <div className={styles.coupon_button}>
                    <ul className='flex justify-center'>
                        <li className='pt-2 text-[13px] leading-[21px] w-[167px] text-center mr-[50px]'>
                            <Link href='/benefits/myCoupon' className={styles.my_coupon}>
                                마이쿠폰함으로 이동
                            </Link>
                        </li>
                        <li className='pt-2 text-[13px] leading-[21px] w-[167px] text-center'>
                            <button className={styles.coupon}>
                                쿠폰등록
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CouponTop