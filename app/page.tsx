import React, { Suspense } from 'react'

import MainBannerSwiper from '@/components/page/home/MainBannerSwiper'
import MainMenuList from '@/components/page/home/MainMenuList';

import { mainBannerData, mainBannerData_sub } from '@/data/homeData';


export default function Home() {

  return (      
    <main className='mt-10' style={{marginTop: '90.5px'}}>
      <MainBannerSwiper data={mainBannerData}/> 
      <MainMenuList/>
      <div className='main_banner_box'>
        {
          mainBannerData_sub.map((item, index) => (
            <div className='main_banner_cnt' key={index}>
              <MainBannerSwiper data={item}/>
            </div>
          ))
        }
      </div>
    </main>
  )
}
