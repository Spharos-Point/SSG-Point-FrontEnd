'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Bookmark.module.css'
import { bookmarkData } from '@/data/sideMenuData'
import { bookmarkType } from '@/types/sideMenuType'

function Bookmark() {
    return (
        <div className='relative bg-[#FFF9EA] box-border pt-[26px] px-0 pb-6'>
            <div className='py-0 px-[10px]'>
                {
                    bookmarkData.map((items: bookmarkType) => (
                        <p key={items.id} className='relative h-20 inline-block w-[33.33%] pr-[1px] box-border align-top mb-[10px]'>
                            <Link className='block box-border pt-10 w-full h-full text-[10px] font-bold leading-[16px] text-center relative' href={items.url}>
                                <Image
                                    className='absolute left-[50%] top-0 -ml-5 z-[0] w-10 h-10'
                                    src={items.img}
                                    alt={items.title}
                                    width={40}
                                    height={40}
                                />
                                {items.title}
                            </Link>
                        </p>
                    ))
                }
            </div>
            <div className='relative w-[88%] h-20 pt-[13px] pl-[58px] my-0 mx-6 box-border border border-dashed border-[#F8B404]'>
                <button className={`${styles.bookmark_btn} absolute left-[10px] top-[50%] translate-y-[-50%] w-10 h-10 border border-solid border-[#F8B404] rounded-[50%] bg-bookmark indent-[-999em] leading-[0] inline-block`}></button>
                <span className='text-[11px] leading-5 tracking-tighter'>
                    <button className={`font-bold mt-[-3px] pr-[4px] pb-0 pl-[1px] tracking-tighter z-[1] relative after:content after:inline-block after:absolute after:w-full after:h-[15px] after:bg-[#FFDFB5] after:left-0 after:-z-10`}>즐겨찾기 메뉴 선택</button>
                    에서
                    <br />
                    나만의 즐겨찾기 메뉴를 설정할 수 있어요!
                </span>
            </div>
        </div>
    )
}

export default Bookmark