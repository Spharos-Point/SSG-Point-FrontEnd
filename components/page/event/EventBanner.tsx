'use client'

import React, { useEffect, useState } from 'react'
import { EventDataType } from '@/types/eventDataType'
import EventImage from './EventImage'
import { usePathname, useSearchParams } from 'next/navigation'

function EventBanner() {

    const [event, setEvent] = useState<EventDataType[]>();
    const pathname = usePathname();

    const params = useSearchParams();
    const sort = params.get("sort");

    const handleSortChange = () => {

        if(sort === 'new' || sort === null) {
            fetch(`${process.env.BASE_API_URL}/api/v1/inevents`, {
                method:'GET',
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => res.json())
            .then((data) => setEvent(data));
        } else if(sort === 'end') {
            // 마감 임박순
            fetch(`${process.env.BASE_API_URL}/api/v1/inevents/expired`, {
                method:'GET',
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => res.json())
            .then((data) => setEvent(data));
        }
    }


    useEffect(() => {
        if(pathname === '/ingevents') {
            fetch(`${process.env.BASE_API_URL}/api/v1/inevents`, {
                method:'GET',
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => res.json())
            .then((data) => setEvent(data));

        } else if(pathname === '/endevents'){
            fetch(`${process.env.BASE_API_URL}/api/v1/endevents`, {
                method:'GET',
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => res.json())
            .then((data) => setEvent(data));

        } else if(pathname === '/winevents') {
            fetch(`${process.env.BASE_API_URL}/api/v1/winevents`, {
                method:'GET',
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => res.json())
            .then((data) => setEvent(data));

        }

    }, [])

    return (
        <>
            <div className='pb-[60px]'>
                <ul>
                    {
                        event !== undefined
                        ?
                        event.map((items: EventDataType) => (
                                <EventImage 
                                    key={items.id}
                                    id={items.id}
                                    imgAlt={items.eventName}
                                    img={items.img}
                                    url={`${pathname}/detail?eventNo=${items.id}&tabActiveIdx=0`}
                                    title={items.eventName}
                                    regDate={items.regDate}
                                    endDate={items.endDate}
                                />
                        ))
                        :
                        null
                    }
                    
                </ul>
            </div>
        </>
    )
}

export default EventBanner