import Cscenter_Header from '@/components/layout/Cscenter_Header';
import React from 'react'


function consultList() {
  return (
    <div>
      <header>
        <Cscenter_Header />
      </header>

      <body>
          <button className=''>Top</button>
          <section id="" tabIndex={0} className=''></section>
          <div id='' className=''>
              <div className=''>
                <div className=''>
                  <p className=''></p>
                </div>
                <div className=''>
                  <button className=''>확인</button>
                </div>
              </div>
              <div className=''></div>  
            <div/>
          {/*<footer></footer>*/}
          <div className=''>
            <ul role='tablist'>
                <li role='tab' className=''><a href='#'>마이 회원정보</a></li>
                <li role='tab' className=''><a href='#'>마이 포인트</a></li>
                <li role='tab' className=''><a href='#'>홈</a></li>
                <li role='tab' className=''><a href='#'>포인트 꿀팁</a></li>
                <li role='tab' className=''><a href='#'>유니버스 클럽</a></li>
            </ul>
          </div>
        </div>
      </body>
    </div>
  )
}
export default consultList