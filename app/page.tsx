import React from 'react'

import MainBannerSwiper from '@/components/page/home/MainBannerSwiper'
import MainMenuList from '@/components/page/home/MainMenuList';

import { mainBannerData, mainBannerData2, mainBannerData3, mainBannerData4, mainBannerData5 } from '@/data/homeData';


export default function Home() {


  return (      
    <main className='mt-10' style={{marginTop: '90.5px'}}>
      <div className='main_event_banner'>
        <div className='event_banner_wrap'>
          <MainBannerSwiper data={mainBannerData}/>        
        </div>       
      </div>  
      <div className='main_menu_nav '>
        <div className='main_menu'>
          <MainMenuList/>
        </div>      
      </div>
      <div className='main_banner_box'>
        <div className='main_banner_cnt'>
          <MainBannerSwiper data={mainBannerData2}/>
        </div>
        <div className='main_banner_cnt'>
          <MainBannerSwiper data={mainBannerData3}/>
        </div>
        <div className='main_banner_cnt'>
          <MainBannerSwiper data={mainBannerData4}/>
        </div>
        <div className='main_banner_cnt'>
          <MainBannerSwiper data={mainBannerData5}/>
        </div>
      </div>
    </main>
  )
}
