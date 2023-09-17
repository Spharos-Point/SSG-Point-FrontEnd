'use client'
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import styles from './layout.module.css';
import { usePathname } from 'next/navigation'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export default function mypointLayout({ children }: { children: React.ReactNode }) {
    const pathName = usePathname();
    console.log(pathName);

    return (
        <>
        <div className="flex pt-[70px] box-border text-center ">
            <Swiper slidesPerView={3} freeMode={true}>
            <SwiperSlide>
                <li role="presentation" className={pathName === "/myinfo/infoRcvAgree" ? styles.gnb_depth2_active : styles.gnb_depth2_default}>
                <Link href="/myinfo/infoRcvAgree">광고정보 수신관리
                </Link>
                </li>
            </SwiperSlide>
            <SwiperSlide>
                <li role="presentation" className={pathName === "/myinfo/serviceAgree" ? styles.gnb_depth2_active : styles.gnb_depth2_default}>
                <Link href="/myinfo/serviceAgree">서비스 동의 관리
                </Link>
                </li>
            </SwiperSlide>
            <SwiperSlide>
                <li role="presentation" className={pathName === "/myinfo/cert" || pathName === "/myinfo/modify" ? styles.gnb_depth2_active : styles.gnb_depth2_default}>
                <Link href="/myinfo/cert">회원정보 수정
                </Link>
                </li>
            </SwiperSlide>
            <SwiperSlide>
                <li role="presentation" className={pathName === "/myinfo/changePwd" ? styles.gnb_depth2_active : styles.gnb_depth2_default}>
                <Link href="/myinfo/changePwd">비밀번호 변경
                </Link>
                </li>
            </SwiperSlide>
            <SwiperSlide>
                <li role="presentation" className={pathName === "/myinfo/withdrawal/leavePassword" || pathName === "/myinfo/withdrawal/leaveUsingService" || pathName === "/myinfo/withdrawal/leaveOnline"? styles.gnb_depth2_active : styles.gnb_depth2_default}>
                <Link href="/myinfo/withdrawal/leavePassword">회원탈퇴
                </Link>
                </li>
            </SwiperSlide>
            </Swiper>
        </div>
        {children}
        </>
    )
}
