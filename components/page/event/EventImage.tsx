'use client'

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function EventImage(props : {id: number, url: string, imgUrl: string, imgAlt: string, title: string, exDate: string, regDate:string, eventId:number}) {

    const {id, url, imgUrl, imgAlt, title, regDate, exDate, eventId} = props;
    const pathname = usePathname();

    // 현재시간과 이벤트 시작시간 및 이벤트 종료시간
    const date = new Date();
    const exdate = new Date(exDate);
    const subDate = exDate.substring(5, 10);

    exdate.setHours(0);

    const difDate = Math.round((exdate.getTime() - date.getTime()) / (1000 * 60 *60 * 24));
    // console.log(((exdate.getTime() - date.getTime())/ (1000 * 60 *60 * 24)), difDate)

    return (
        <li className='text-center box-border relative min-w-[400px]'>
            <Link href={url}>
                <Image
                    src={imgUrl}
                    alt={imgAlt}
                    width={1960}
                    height={1080}
                />
                {
                    pathname === '/ingevents'
                    ?
                    <>
                        {
                            id === 1
                            ?
                            <p className='text-[13px] leading-[21px] text-[#FFF] absolute left-0 top-[15px] bg-recommend w-[60px] h-[26px] bg-cover bg-center font-bold pl-[15px] text-left pt-[2px]'>추천</p>
                            :
                            null
                        }
                        {
                            difDate <= 30
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
                    null
                }
            </Link>
            <div className='pt-[20px] px-5 pb-[35px]'>
                <p className='text-[15px] font-bold leading-[26px] text-left whitespace-nowrap overflow-hidden text-ellipsis'>
                    {title}
                </p>
                <p className='text-[13px] font-medium leading-[21px] text-left pt-1 tracking-tighter'>
                    {
                        regDate.substring(0,4) === exDate.substring(0, 4)
                        ?
                        regDate + " ~ " + subDate
                        :
                        regDate + " ~ " + exDate
                    }
                    
                </p>
            </div>
        </li>
    )
}

export default EventImage