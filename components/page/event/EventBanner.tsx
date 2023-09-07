import React from 'react'
import EventSort from './EventSort'
import { ingEvnetData } from '@/data/eventData'
import { EventDataType } from '@/types/eventDataType'
import EventImage from './EventImage'

function EventBanner() {
    return (
        <>
            <EventSort/>
            <div className='pb-[60px]'>
                <ul>
                    {
                        ingEvnetData.map((items: EventDataType) => (
                            <li className='text-center box-border relative' key={items.id}>
                                <EventImage 
                                    id={items.id}
                                    imgAlt={items.imgAlt}
                                    imgUrl={items.imgUrl}
                                    url={items.url}
                                />
                                <div className='pt-5 px-5 pb-[35px]'>
                                    <p className='text-base font-bold leading-[26px] text-left whitespace-nowrap'>
                                        {items.title}
                                    </p>
                                </div>
                            </li>
                        ))
                    }
                    
                </ul>
            </div>
        </>
    )
}

export default EventBanner