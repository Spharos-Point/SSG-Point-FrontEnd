'use client'

import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';

import 'swiper/css/scrollbar';
import {Scrollbar} from 'swiper/modules';
import MainEvent from './MainEvent'

import React, { useEffect, useState } from 'react'
import { MainBannerCardProps } from '@/types/homeDataType';

function MainSwiperEvent(props : {data:MainBannerCardProps[]}) {

  const {data} = props;
  
  const [isCurrentIndex, setIsCurrentIndex] = useState(1);


  const handleTransitionStart = (swiper: any) => {

    setIsCurrentIndex(swiper.realIndex + 1);
  }


  return (
    <div className='main_event_banner'>
    <div className='event_banner_wrap'>
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Scrollbar]}
      scrollbar={{ draggable: true }}
      onTransitionStart={handleTransitionStart}
      
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
        {
          data.length !== 1 
          ?
            <div className='swiper-control'>
              <div className='swiper-pagination'>
                <span className='swiper-pagination-current'>
                  {isCurrentIndex}
                </span>
                  /
                <span className='swiper-pagination-total'>
                  {data.length}
                </span>
              </div>  
            </div>
          :
          ''  
        }
    </Swiper>
    </div>
    </div>
  )
}

export default MainSwiperEvent