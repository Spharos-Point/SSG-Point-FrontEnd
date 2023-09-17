'use client'

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import EventEnd from './EventEnd';
import EventWin from './EventWin';

function EventImage(props : {id: number, url: string, img: string, imgAlt: string, title: string, endDate: string, regDate:string}) {

    const {id, url, img, imgAlt, title, regDate, endDate} = props;
    const pathname = usePathname();

    // 현재시간과 이벤트 시작시간 및 이벤트 종료시간
    const date = new Date();
    const exdate = new Date(endDate);
    const subDate = endDate.substring(5, 10);

    exdate.setHours(0);

    const difDate = Math.ceil((exdate.getTime() - date.getTime()) / (1000 * 60 *60 * 24));
    // console.log(((exdate.getTime() - date.getTime())/ (1000 * 60 *60 * 24)), difDate)

    return (
        <li className='text-center box-border relative min-w-[400px]'>
            <Link href={url} className='block relative'>
                {
                    pathname === '/ingevents' || pathname === '/benefits/myEvent'
                    ?
                    <>
                        {
                            id === 0
                            ?
                            <p className='text-[13px] leading-[21px] text-[#FFF] absolute left-0 top-[15px] bg-recommend w-[60px] h-[26px] bg-cover bg-center font-bold pl-[15px] text-left pt-[2px]'>추천</p>
                            :
                            null
                        }
                        {
                            difDate <= 30 && difDate > 0
                            ?
                            <div className='end_date w-[82px] h-[56px] flex justify-center absolute top-[10px] right-[5px] bg-end bg-cover'>
                                <p className='text-sm font-bold pt-[15px] tracking-tighter'>
                                    <span>{difDate}</span>
                                    일 남음
                                </p>
                            </div>
                            :
                            null
                        }
                        
                    </>
                    :
                    pathname === '/endevents' || pathname === '/benefits/myEvent' && difDate < 0
                    ?
                    <EventEnd/>
                    :
                    pathname === '/winevents' || difDate < 0
                    ?
                    <EventWin/>
                    :
                    null
                }
                <Image
                    className='w-full'
                    src={img}
                    alt={imgAlt}
                    width={1960}
                    height={1080}
                />
            </Link>
            <div className='pt-[20px] px-5 pb-[35px]'>
                <p className='text-[15px] font-bold leading-[26px] text-left whitespace-nowrap overflow-hidden text-ellipsis'>
                    {title}
                </p>
                <p className='text-[13px] font-medium leading-[21px] text-left pt-1 tracking-tighter'>
                    {
                        regDate.substring(0,4) === endDate.substring(0, 4)
                        ?
                        regDate + " ~ " + subDate
                        :
                        regDate + " ~ " + endDate
                    }
                    
                </p>
            </div>
        </li>
    )
}

export default EventImage