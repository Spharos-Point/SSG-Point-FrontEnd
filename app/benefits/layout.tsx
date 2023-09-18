'use client'
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import { usePathname } from 'next/navigation'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import styles from './layout.module.css'

export default function mypointLayout({ children }: { children: React.ReactNode }) {
    const pathName = usePathname();
    return (
        <>
        <div className="flex pt-[70px] box-border text-center ">
            <Swiper slidesPerView={3} freeMode={true}>
            <SwiperSlide>
                <li role="presentation" className={pathName === "/benefits/pntPlus/attend" || pathName === "/benefits/pntPlus/roulette" ? styles.gnb_depth2_active : styles.gnb_depth2_default}>
                <Link href="/benefits/pntPlus/attend">포인트 플러스
                </Link>
                </li>
            </SwiperSlide>
            <SwiperSlide>
                <li role="presentation" className={pathName === "/benefits/benefitMyLuck" ? styles.gnb_depth2_active : styles.gnb_depth2_default}>
                <Link href="/benefits/benefitMyLuck">나의 운세보기
                </Link>
                </li>
            </SwiperSlide>
            <SwiperSlide>
                <li role="presentation" className={pathName === "/benefits/myCoupon" ? styles.gnb_depth2_active : styles.gnb_depth2_default}>
                <Link href="/benefits/myCoupon">마이 쿠폰함
                </Link>
                </li>
            </SwiperSlide>
            <SwiperSlide>
                <li role="presentation" className={pathName === "/benefits/myEvent" ? styles.gnb_depth2_active : styles.gnb_depth2_default}>
                <Link href="/benefits/myEvent">마이 이벤트
                </Link>
                </li>
            </SwiperSlide>
            <SwiperSlide>
                <li role="presentation" className={pathName === "/benefits/pntTip" ? styles.gnb_depth2_active : styles.gnb_depth2_default}>
                <Link href="/benefits/pntTip">포인트 꿀팁
                </Link>
                </li>
            </SwiperSlide>
            </Swiper>
        </div>
        {children}
        </>
    )
}
