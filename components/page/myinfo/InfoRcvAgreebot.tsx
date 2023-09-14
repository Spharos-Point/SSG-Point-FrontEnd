import Link from 'next/link'
import React from 'react'
import AdConsent from '../agree/AdConsent'
import Note from '../note/note'
import { rcvAgreeNotice } from '@/data/noticeData'

function InfoRcvAgreebot() {
    return (
        <>
            <div className='relative -mt-5 mx-5 mb-10 box-border py-5 px-6 border border-solid border-[#e8e8e8] rounded-lg shadow-md'>
                <p className='text-[13px] leading-[21px] text-[#767676] break-keep -my-[5px] font-bold'>
                    <strong className='text-sm leading-6 text-[#000]'>
                        연락처 정보 변경이 필요하시나요?
                    </strong>
                    <br/>
                    회원정보 수정 메뉴에서 변경하실 수 있습니다. 
                </p>
                <Link 
                    href='/myinfo/cert' 
                    className="mt-4 inline-flex items-center text-[13px] leading-5 after:content:[''] after:inline-block after:ml-1 after:h-[6px] after:w-[10px] after:bg-findBox after:-rotate-90 after:bg-cover"
                >
                    회원정보 수정
                </Link>
            </div>
            <div className='pt-0 pb-10 px-5'>
                <AdConsent/>
            </div>
            <div className='py-0 px-5'> 
                <p className='text-[11px] leading-5 text-[#505050] break-keep'>
                    당사, 관계사, 신세계포인트 제휴사가 제공하는 상품 및 서비스 홍보, 
                    소식지 제공, 이벤트 정보 제공(할인 쿠폰, 포인트 추가 적립, 상품 할인 포함),
                    제휴행사를 안내해 드립니다. 수신동의 변경은 신세계포인트 
                    고객센터 및 홈페이지(www.shinsegaepoint.com)에서 가능합니다.
                    <br/>
                    ※ 서비스 주요 정책 및 공지사항 안내 등은 수신동의 여부와 관계없이 발송됩니다. 
                </p>
            </div>
            <div className='py-10 px-5'>
                <div className='btn_box'>
                    <button className='btn_primary'>확인</button>
                </div>
            </div>
            <Note note={rcvAgreeNotice}/>
        </>
    )
}

export default InfoRcvAgreebot