import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className='footer_box'>
        <ul className='terms flex gap-8'>
            <li><Link href='/stplat/terms'/>서비스 이용약관</li>
            <li className='font_color'><Link href='/stplat/policy'/>개인정보 처리방침</li>
        </ul>
        <div className='info'>
            <p className='tit'>신세계포인트 고객센터</p>
            <button className='tel'>1899-4349</button>
            <p className='txt0'>
                운영시간
                <span> : </span>
                <em>09</em>
                시 - 
                <em>18</em>
                시
                <br/>
                점심시간
                <span> : </span>
                <em>09</em>
                시 - 
                <em>13</em>
                시
                <br/>
                (공휴일 제외) 
            </p>
        </div>
        <div className='txt_cnt'>
            <p className='txt'>
                <span className='txt0'>
                    ㈜이마트 서울시 중구 세종대로 7길 37(순화동)
                </span>
                <span>
                    대표자 : 강희석
                </span>
                <span>
                    사업자등록번호 : 206-86-50913
                </span>
            </p>
            <p className='copyright'>
                COPYRTGHT (c) EMART INC.
                ALL RIGHTS RESERVED.
            </p>
        </div>
    </div>
  )
}

export default Footer