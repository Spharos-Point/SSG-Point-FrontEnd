import React from 'react'
import styles from './JoinSuccessBefore.module.css'
import JoinInfo from '@/components/page/join/JoinInfo'
import Integrated from '@/components/page/join/Integrated'
import JoinSuccess from '@/components/page/join/JoinSuccess'

function JoinSuccessBefore() {
    
    return (
        <section className='mt-10' style={{marginTop: '60px'}}>
            <div className='top_cnt1 py-10 px-5'>
                <div className={`${styles.join_step} relative`}>
                    <ol className='flex relative mb-4'>
                        <li className={`relative bg-orange-400 box-border rounded-full w-5 h-5 mr-2.5`}></li>
                        <li className={`relative bg-orange-400 box-border rounded-full w-5 h-5 mr-2.5`}></li>
                        <li className={`relative bg-orange-400 box-border rounded-full w-5 h-5 mr-2.5`}></li>
                        <li className={`relative bg-gray-300 box-border rounded-full w-5 h-5 mr-2.5 bg-tabindex bg-contain`}></li>
                    </ol>
                    <JoinSuccess/>
                </div>
            </div>
            <JoinInfo/>
            <Integrated/>
        </section>
    )
}

export default JoinSuccessBefore