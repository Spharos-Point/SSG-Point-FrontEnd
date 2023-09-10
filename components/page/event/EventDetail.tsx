'use client'

import { EventDataType } from '@/types/eventDataType';
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

function EventDetail() {

    const params = useSearchParams();
    const eventNo = params.get('eventNo');
    const [detailEvent, setDetailEvent] = useState<EventDataType[]>();

    useEffect(() => {
        fetch(`http://localhost:4000/event?event_id=${eventNo}`, {
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
        detailEvent.map((items: EventDataType) => (
            <div key={items.id}>
                <div className='relative pt-9 px-5 pb-5' >
                    <p className='text-[17px] pr-[50px] leading-[26px] font-bold'>
                        {items.event_name}
                    </p>
                    <p className='pt-1 text-[13px] leading-[21px] block'>
                        {
                            items.event_reg_date.substring(0,4) === items.event_ex_date.substring(0, 4)
                            ?
                            "기간 : " + items.event_reg_date + " ~ " + items.event_ex_date.substring(5, 10)
                            :
                            "기간 : " + items.event_reg_date + " ~ " + items.event_ex_date
                        }
                    </p>
                    <div className='bg-share bg-contain bg-no-repeat pl-[20px] absolute right-[18px] top-[40px] h-[15px] text-[13px] font-bold'>
                        공유
                    </div>    
                </div>
                <div className='relative w-full overflow-hidden text-center'>
                    <p className='text-center'>
                    <Image
                        src={items.description}
                        alt=''
                        width={750}
                        height={455}
                    />
                    </p>
                </div>
            </div>
        ))
        :
        null
    }
    </>
    )
}

export default EventDetail