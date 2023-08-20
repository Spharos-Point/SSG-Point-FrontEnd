'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Pagination, Scrollbar } from 'swiper/modules';
import MainEvent from './MainEvent'

import React from 'react'
import { MainBannerCardProps } from '@/types';

function MainSwiperEvent(props : {data:MainBannerCardProps[]}) {

  const {data} = props;

  return (
    <Swiper
      className='main_event_banner'
      spaceBetween={0}
      slidesPerView={1}
      scrollbar
      modules={[Scrollbar]}
    >
        {
          data.map((item:MainBannerCardProps) => (
            <SwiperSlide key={item.id}>
              <MainEvent
              id={item.id}
              url={item.url}
              imgUrl={item.imgUrl}
              imgAlt={item.imgAlt}
              />
            </SwiperSlide>    
          ))         
        }
    </Swiper>
  )
}

export default MainSwiperEvent