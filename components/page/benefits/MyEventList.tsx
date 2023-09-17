'use client'

import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import { EventDataType } from '@/types/eventDataType';
import EventImage from '../event/EventImage';
import { usePathname } from 'next/navigation';
import MyEventTop from './MyEventTop';
import styles from './MyEventList.module.css'

function MyEventList() {

    const pathname = usePathname();
    const session = useSession();
    const [event, setEvent] = useState<EventDataType[]>();
    const [myEventCount, setMyEventCount] = useState();
    const [winEventCount, setWinEventCount] = useState();
    
    useEffect(() => {
        if(session.status === 'authenticated') {
            if(pathname === '/benefits/myEvent') {
                fetch(`${process.env.BASE_API_URL}/api/v1/benefits/myEvent`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization" : `Bearer ${session.data?.user.token}`
                    },
                })
                .then((res) => res.json())
                .then((data) => {
                    setEvent(data)
                    setMyEventCount(data.length)
                });
            } else if(pathname === '/benefits/winEvent') {
                fetch(`${process.env.BASE_API_URL}/api/v1/benefits/winEvent`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization" : `Bearer ${session.data?.user.token}`
                    },
                })
                .then((res) => res.json())
                .then((data) => {
                    setEvent(data)
                    setWinEventCount(data.length)
                });
            }
        }   
        }, [])
    
    return (
        <>
        <MyEventTop myCount={myEventCount} winCount={winEventCount}/>
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
                    <div className={styles.event_box}>
                        <p className={styles.txt}>
                            당첨 이벤트가 없습니다.
                        </p>
                    </div>
                }
                
            </ul>
        </div>
    </>
    )
}

export default MyEventList