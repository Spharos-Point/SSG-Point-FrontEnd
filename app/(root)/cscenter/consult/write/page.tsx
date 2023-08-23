import React from 'react'
import Cscenter_Header from '@/components/layout/Cscenter_Header';
import Link from "next/link";


function consultWrite() {
  return (
    <div>
      <header>
        <Cscenter_Header />
      </header>

      <body>
        <div id = "app" className='#'>
          <button className='top_btn'>Top</button>
          <section id="content" tabIndex={0} className=''>
            <div className=''>
              <ul role='tablist'>
              <li role='presentation'><a href='#' role='tab' aria-selected='true' className=''>1:1상담 작성<span className=''>선택됨</span></a></li>
              <li role='presentation'><a href='#' role='tab' aria-selected='false' className=''>1:1 상담 내역</a></li>
              </ul>
            </div>

            <div className=''>
              <div className=''> {/*이름입력*/}
                <p className=''>이름</p>
                <div className=''>
                  <input id="name00" type='text' readOnly className=''></input>
                  <label htmlFor='name00'><span className=''>이름 입력</span></label>
                </div>
              </div>

              <div className=''> {/*연락처 입력*/}
                <p className=''>연락처<span className=''>(필수 기재 사항이 아닙니다.)</span></p>
                <div className=''>
                  <input id="phone00" type='tel' className=''></input>
                  <label htmlFor='phone00' className=''><span className=''>-없이 휴대폰 번호 입력</span></label>
                </div>
              </div>

              <div className=''> {/*유형 선택*/}
                <p className=''>유형</p>
                <div className=''>
                  <select id="mainCategory" title='대분류'>
                    <option disabled value="">선택해주세요.</option>
                    <option value="04">회원</option>
                    <option value="01">신세계포인트</option>
                    <option value="02">신세계포인트카드</option>
                    <option value="06">이벤트/쿠폰</option>
                    <option value="03">가맹점</option>
                    <option value="07">개선사항</option>
                    <option value="99">기타</option>
                  </select>
                </div>
                <div className=''>
                <select id="mainCategory" title='소분류'>
                  <option disabled value="">선택해주세요.</option>
                  </select>
                </div>
              </div>

              <div className=''>{/*제목 입력*/}
                <p className=''>제목</p>
                <div className=''>
                  <input id="title00" type='text' maxLength={50}></input>
                  <label htmlFor='title00'><span className=''>제목을 입력해 주세요(50자 이내)</span></label>
                </div>
              </div>

              <div className=''>{/*내용 입력*/}
                <p className=''>내용</p>
                <div className=''>
                  <textarea id="content00" type='text' maxLength={10000}></textarea>
                  <label htmlFor='contetn00'><span className=''> 문의하실 내용을 입력해 주세요.<br/> 최대 10,000자까지 입력가능합니다.<br/> ※기재 시 주민등록번호 등 개인정보가<br/> 포함되지 않도록 유의하시기 바랍니다.</span></label>
                  <span className=''>(0/10,000 자)</span>
                </div>
              </div>

              <ul className=''>
                <li><span className=''>*</span> 표는 필수입력 사항입니다.</li>
                <li>문의 사항 답변 완료시 APP PUSH 로 답변 완료 알림을 드립니다.</li>
                <li>통화로 답변 받기를 원하시는 경우 연락처 정보를 입력해 주세요.</li>
              </ul>
            </div>
            <div className=''>
              <div className=''>
                <button className=''>취소</button>
                <button className=''>저장</button>
              </div>
            </div>
            <div className=''></div>
            <div className=''></div>
          </section>
          <div id='alertPopupglobalErrorAlertPopup' className=''>
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
        </div>
      </body>
    </div>
  )
}
export default consultWrite