'use client'

import { EventDataType } from '@/types/eventDataType';
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

function EventDetail() {

    const params = useSearchParams();
    const eventNo = params.get('eventNo');
    const [detailEvent, setDetailEvent] = useState<EventDataType>();

    useEffect(() => {
        fetch(`${process.env.BASE_API_URL}/api/v1/event/${eventNo}`, {
            method:'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((data) => setDetailEvent(data));
    }, [])

    return (
    <>
    {
        detailEvent !== undefined
        ?
        <div key={detailEvent.id}>
            <div className='relative pt-9 px-5 pb-5' >
                <p className='text-[17px] pr-[50px] leading-[26px] font-bold'>
                    {detailEvent.eventName}
                </p>
                <p className='pt-1 text-[13px] leading-[21px] block'>
                    {
                        detailEvent.regDate.substring(0,4) === detailEvent.endDate.substring(0, 4)
                        ?
                        "기간 : " + detailEvent.regDate + " ~ " + detailEvent.endDate.substring(5, 10)
                        :
                        "기간 : " + detailEvent.regDate + " ~ " + detailEvent.endDate
                    }
                </p>
                <div className='bg-share bg-contain bg-no-repeat pl-[20px] absolute right-[18px] top-[40px] h-[15px] text-[13px] font-bold'>
                    공유
                </div>    
            </div>
            <div className='relative w-full overflow-hidden text-center'>
                <p className='text-center'>
                <Image
                    src={detailEvent.eventDesc}
                    alt=''
                    width={750}
                    height={455}
                />
                </p>
            </div>
        </div>
        :
        null
    }
    </>
    )
}

export default EventDetail