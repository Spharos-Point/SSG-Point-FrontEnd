import Image from 'next/image'
import Header from './components/layout/Header'
import MainEvent from './components/ui/home/MainEvent'

export default function Home() {
  return (
    <>
      <header> 
          <Header/>
      </header>   
      <main className='mt-10' style={{marginTop: '120px'}}>
        <section className='main_event_banner'>
          <MainEvent url='/ingevents/detail?' imgUrl='/main_event01.jpg' imgAlt='신세계 메인 이미지 첫번째'/>
          <div className='progress_nav_wrap'>
            <div className='progress_bar'></div>
            <div className='progress_step'></div>
            <p>
              <span>1</span>
              /6
            </p>
          </div>
        </section>        
      </main>
    </>
  )
}
