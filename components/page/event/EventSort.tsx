'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function EventSort() {

    const router = useRouter();
    const handleselect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        router.push(`/ingevents?sort=${e.target.value}`)
    }
    return (
        <div className='h-[52px] flex items-center justify-start'>
            <div className='relative inline-block align-top w-[95px] h-[38px] ml-10px'>
                <select 
                    className={`block w-full box-border text-[13px] relative z-[1] text-[#000] h-[38px] mr-[30px] ml-[16px] font-bold after:content-none after:absolute after:z-[1] r-[14px] after:-translate-y-[50%] after:w-[10px] after:h-[7px] after:bg-select after:bg-[auto]`}
                    onChange={handleselect}
                >
                    <option value={'new'} className='border-0'>최신순</option>
                    <option value={'end'} className='border-0'>마감임박</option>
                </select>
            </div>
        </div>
    )
}

export default EventSort