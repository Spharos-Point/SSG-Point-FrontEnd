'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Pagination, Scrollbar } from 'swiper/modules';
import MainEvent from './MainEvent'

function MainSwiperBanner() {
  return (
    <Swiper 
      className='main_event_banner'
      spaceBetween={0}
      slidesPerView={1}
      scrollbar
      modules={[Scrollbar]}
    >
      <SwiperSlide><MainEvent url='/' imgUrl='/main_banner04.png' imgAlt='신세계 메인 이미지 두번째'/></SwiperSlide>
      <SwiperSlide><MainEvent url='/' imgUrl='/main_banner03.jpg' imgAlt='신세계 메인 이미지 세번째'/></SwiperSlide>
      <SwiperSlide><MainEvent url='/' imgUrl='/main_banner02.png' imgAlt='신세계 메인 이미지 네번째'/></SwiperSlide>
      <SwiperSlide><MainEvent url='/' imgUrl='/main_banner01.jpg' imgAlt='신세계 메인 이미지 다섯번째'/></SwiperSlide>
    </Swiper>
  )
  
}

export default MainSwiperBanner