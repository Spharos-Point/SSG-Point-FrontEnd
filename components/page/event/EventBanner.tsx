'use client'

import React, { useEffect, useState } from 'react'
import EventSort from './EventSort'
import { EventDataType } from '@/types/eventDataType'
import EventImage from './EventImage'

function EventBanner() {

    const [ingevent, setIngevent] = useState<EventDataType[]>();


    useEffect(() => {
        fetch("http://localhost:4000/event", {
            method:'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((data) => setIngevent(data));
    }, [])

    const json = JSON.stringify(ingevent);
    console.log(json)

    return (
        <>
            <EventSort/>
            <div className='pb-[60px]'>
                <ul>
                    {
                        ingevent !== undefined
                        ?
                        ingevent.map((items: EventDataType) => (
                                <EventImage 
                                    key={items.id}
                                    id={items.id}
                                    imgAlt={items.event_name}
                                    imgUrl={items.event_img}
                                    url={`/ingevent/datail?eventNo=${items.event_id}&tabActiveldx=0`}
                                    title={items.event_name}
                                    regDate={items.event_reg_date}
                                    exDate={items.event_ex_date}
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