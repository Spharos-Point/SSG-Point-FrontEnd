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
      <div className="flex pt-20 box-border text-center ">
        <Swiper slidesPerView={3} freeMode={true}>
          <SwiperSlide>
            <li role="presentation" className={pathName === "/mypoint/pntHistory" ? styles.gnb_depth2_active : styles.gnb_depth2_default}>
              <Link href="/mypoint/pntHistory">포인트 내역
              </Link>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li role="presentation" className={pathName === "/mypoint/cardManage" ? styles.gnb_depth2_active : styles.gnb_depth2_default}>
              <Link href="/mypoint/cardManage">포인트카드 관리
              </Link>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li role="presentation" className={pathName === "/mypoint/regAffiliatePntCard" ? styles.gnb_depth2_active : styles.gnb_depth2_default}>
              <Link href="/mypoint/regAffiliatePntCard">제휴포인트 카드 관리
              </Link>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li role="presentation" className={pathName === "/mypoint/pntGiftMain" ? styles.gnb_depth2_active : styles.gnb_depth2_default}>
              <Link href="/mypoint/pntGiftMain">포인트 선물
              </Link>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li role="presentation" className={pathName === "/mypoint/convertPntList" ? styles.gnb_depth2_active : styles.gnb_depth2_default}>
              <Link href="/mypoint/convertPntList">포인트 전환
              </Link>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li role="presentation" className={pathName === "/mypoint/savePoint" ? styles.gnb_depth2_active : styles.gnb_depth2_default}>
              <Link href="/mypoint/savePoint">영수증으로 적립
              </Link>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li role="presentation" className={pathName === "/mypoint/chgPntPwdCert" ? styles.gnb_depth2_active : styles.gnb_depth2_default}>
              <Link href="/mypoint/chgPntPwdCert">포인트 비밀번호 변경
              </Link>
            </li>
          </SwiperSlide>
        </Swiper>
      </div>
      {children}
    </>
  )
}
