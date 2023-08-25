'use client'
import Link from "next/link";
import {Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode, Pagination } from "swiper/modules";


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export default function mypointLayout({children}: {children: React.ReactNode}) {

    return (
    <>
    <nav className="w-full pt-20">
    <ul className="flex ">
      <Swiper slidesPerView={3} spaceBetween={0} freeMode={true} >
        <SwiperSlide><li className="text-[#767676] text-[15px] text-center font-medium "><Link href="/mypoint/pntHistory">포인트 내역</Link></li></SwiperSlide>
        <SwiperSlide><li className="text-[#767676] text-[15px] text-center font-medium "><Link href="/mypoint/cardManage">포인트카드 관리</Link></li></SwiperSlide>
        <SwiperSlide><li className="text-[#767676] text-[15px] text-center font-medium "><Link href="/mypoint/regAffiliatePntCard">제휴포인트 카드 관리</Link></li></SwiperSlide>
        <SwiperSlide><li className="text-[#767676] text-[15px] text-center font-medium "><Link href="/mypoint/pntGiftMain">포인트 선물</Link></li></SwiperSlide>
        <SwiperSlide><li className="text-[#767676] text-[15px] text-center font-medium "><Link href="/mypoint/convertPntList">포인트 전환</Link></li></SwiperSlide>
        <SwiperSlide><li className="text-[#767676] text-[15px] text-center font-medium "><Link href="/mypoint/savePoint">영수증으로 적립</Link></li></SwiperSlide>
        <SwiperSlide><li className="text-[#767676] text-[15px] text-center font-medium "><Link href="/mypoint/chgPntPwdCert">포인트 비밀번호 변경</Link></li></SwiperSlide>
      </Swiper>
      </ul>
    </nav>
    {children} {/*페이지본문이 들어올 위치 */}
    </>
  )
}


    