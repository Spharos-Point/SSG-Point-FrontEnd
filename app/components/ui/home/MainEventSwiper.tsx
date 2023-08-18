'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Pagination, Scrollbar } from 'swiper/modules';
import MainEvent from './MainEvent'



import React from 'react'

function MainSwiperEvent() {


  return (
    <Swiper 
      className='main_event_banner'
      spaceBetween={0}
      slidesPerView={1}
      scrollbar
      modules={[Scrollbar]}
    >
      <SwiperSlide>
        <MainEvent url='/ingevents/detail?' imgUrl='/main_event01.jpg' imgAlt='신세계 메인 이미지 첫번째'/>
      </SwiperSlide>
      <SwiperSlide><MainEvent url='/ingevents/detail?' imgUrl='/main_event02.jpg' imgAlt='신세계 메인 이미지 두번째'/></SwiperSlide>
      <SwiperSlide><MainEvent url='/ingevents/detail?' imgUrl='/main_event03.jpg' imgAlt='신세계 메인 이미지 세번째'/></SwiperSlide>
      <SwiperSlide><MainEvent url='/ingevents/detail?' imgUrl='/main_event04.jpg' imgAlt='신세계 메인 이미지 네번째'/></SwiperSlide>
      <SwiperSlide><MainEvent url='/ingevents/detail?' imgUrl='/main_event05.jpg' imgAlt='신세계 메인 이미지 다섯번째'/></SwiperSlide>
      <SwiperSlide><MainEvent url='/ingevents/detail?' imgUrl='/main_event06.jpg' imgAlt='신세계 메인 이미지 여섯번째'/></SwiperSlide>
    </Swiper>
  )
}

export default MainSwiperEvent