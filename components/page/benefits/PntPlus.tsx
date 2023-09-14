import React from 'react'
import Image from 'next/image'
import styles from './PntPlus.module.css'
import { calendarData } from '@/data/calendarData'
import { calendarDataType } from '@/types/calendarDataType'

function PntPlus() {
    return (
        <>
            <div>
                <Image
                    src='https://storage.googleapis.com/team3_spharos_bucket/img/logo/attend.jpg'
                    alt='출석'
                    width={1960}
                    height={1080}
                />
            </div>
            <div className=' box-border py-[5.35%] px-[4.5%] w-full min-w-[320px]'>
                <ul className={styles.check_calendar}>
                    {
                        calendarData.map((items: calendarDataType) => (
                            <li>
                                <div className={styles.end}>
                                    <span className={styles.checkin}>
                                        <span className={styles.num}>{items.day}</span>
                                    </span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default PntPlus