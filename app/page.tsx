import React from 'react'
import MainEventSwiper from '../components/ui/home/MainBannerSwiper'
import MainMenuList from '@/components/ui/home/MainMenuList';
import { mainBannerData, mainBannerData2, mainBannerData3, mainBannerData4, mainBannerData5 } from '@/data';

export default function Home() {
   
  return (      
    <main className='mt-10' style={{marginTop: '100px'}}>
      <div className='main_event_banner'>
        <div className='event_banner_wrap'>
          <MainEventSwiper data={mainBannerData}/>        
        </div>       
      </div>  
      <div className='main_menu_nav '>
        <div className='main_menu'>
          <MainMenuList/>
        </div>      
      </div>
      <div className='main_banner_box'>
        <div className='main_banner_cnt'>
        <MainEventSwiper data={mainBannerData2}/>
        </div>
        <div className='main_banner_cnt'>
        <MainEventSwiper data={mainBannerData3}/>
        </div>
        <div className='main_banner_cnt'>
        <MainEventSwiper data={mainBannerData4}/>
        </div>
        <div className='main_banner_cnt'>
        <MainEventSwiper data={mainBannerData5}/>
        </div>
      </div>
    </main>
  )
}
