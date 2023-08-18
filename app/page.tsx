
import MainEventSwiper from './components/ui/home/MainEventSwiper'
import MainMenu from './components/ui/home/MainMenu';
import MainSwiperBanner from './components/ui/home/MainSwiperBanner';

export default function Home() {
   
  return (      
    <main className='mt-10' style={{marginTop: '100px'}}>
      <div className='main_event_banner'>
        <div className='event_banner_wrap'>
          <MainEventSwiper/>        
        </div>       
      </div>  
      <div className='main_menu_nav '>
        <div className='main_menu'>
          <ul>
            <li><MainMenu url='/ingevents' imgUrl='/menu01.png' imgAlt='이벤트 페이지로 이동' name='이벤트'/></li>
            <li><MainMenu url='/benefits/pntPlus/attend' imgUrl='/menu02.png' imgAlt='출석체크 페이지로 이동' name='출석체크'/></li>
            <li><MainMenu url='/benefits/pntPlus/roulette' imgUrl='/menu03.png' imgAlt='럭키룰렛 페이지로 이동' name='럭키룰렛'/></li>
            <li><MainMenu url='/ingevents' imgUrl='/menu04.png' imgAlt='운세서비스 페이지로 이동' name='운세서비스'/></li>
            <li><MainMenu url='/ingevents' imgUrl='/menu05.png' imgAlt='영수증 페이지로 이동' name='영수증'/></li>
          </ul>
        </div>      
      </div>
      <div className='main_banner_box'>
        <div className='main_banner_cnt'>
          <MainSwiperBanner/>
        </div>
      </div>
    </main>
  )
}
