'use client'

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

function EventImage(props : {id: number, url: string, imgUrl: string, imgAlt: string, title: string, exDate: string, regDate:string}) {

    const {id, url, imgUrl, imgAlt, title, regDate ,exDate} = props;

    const handleDetailEventFetch = async () => {
        // const response = await fetch(`/ingevent/datail?eventNo=${}&tabActiveldx=0`)
    }

    return (
        <li className='text-center box-border relative min-w-[400px]' onClick={handleDetailEventFetch}>
            <Link href={url}>
                <Image
                    src={imgUrl}
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
                    {regDate} ~ {exDate}
                </p>
            </div>
        </li>
    )
}

export default EventImage