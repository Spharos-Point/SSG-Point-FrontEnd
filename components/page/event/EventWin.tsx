import React from 'react'
import styles from './EventWin.module.css'

function EventWin() {
    return (
        <div className={`${styles.winEvent} flex bg-black bg-opacity-50 absolute items-center w-full h-full`}>
                <span 
                    className='relative w-[120px] h-[120px] flex justify-center items-center font-bold box-border text-xl leading-[30px] bg-endImage bg-no-repeat bg-cover m-auto'
                >
                    당첨발표
                </span>
            </div>
    )
}

export default EventWin