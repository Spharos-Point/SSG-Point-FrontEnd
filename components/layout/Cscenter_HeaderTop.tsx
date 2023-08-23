'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Cscenter_HeaderTop() {

    const pathname = usePathname();

    return (
    <div className='layout'>
        <div className='skip'></div>
        <div className='gnb'>
            <div className='gnb_in'>
                <button className='back_btn'>뒤로가기</button>
                <h2 className='gnb_tit'>고객센터</h2>
                <Link href="#" className='login_btn wp'>로그인</Link>
                <div id="point_barcode" className='point_barcode'>
                    <div className='barcode_banner'>
                        <div className='swiper-container barcode_swiper'>
                            <ul className='swiper-wrapper'>
                                <li className='swiper-slider'>
                                    <div className='content_barcode'>
                                        <p className='txt'>SHINSHEGAE POINT</p>
                                        <p className='point'>{"보유포인트"}</p>
                                        <div className='image_barcode'>{"생성된 바고드 이미지"}</div>
                                        <div className='txt_link_box'></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button className='shows_barcode'></button>
                </div>
                <button id='all_menu_btn' className='all_menu_btn'>
                    <span className='btn_bar'>전체메뉴 보기</span>
                </button>
            </div>
        </div>
        <div></div>
    </div>
    )
}

export default Cscenter_HeaderTop