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
  
  const [isDraggableIndex, setIsDraggableIndex] = useState(1);


  const handleTransitionEnd = (swiper: any) => {
    // console.log(swiper.realIndex);

    setIsDraggableIndex(swiper.realIndex + 1);
  }


  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Scrollbar]}
      scrollbar={{ draggable: true }}
      onTransitionEnd={handleTransitionEnd}
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
                  {isDraggableIndex}
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
  )
}

export default MainSwiperEvent