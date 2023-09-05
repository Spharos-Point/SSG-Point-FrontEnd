import { adAgreement, formAgreements } from '@/data/agreeData'
import { Agreement } from '@/types/agreeDataType'
import React from 'react'

function AdConsent() {
    return (
        <>
            <ul>
                {
                    formAgreements.map((items:Agreement) => (
                        <li key={items.id} className='relative pr-[22px] mb-4'>
                            <div className='chk_box'>
                                <input
                                    className='absolute left-0 top-0 w-5 h-5 rounded-full border border-black appearance-none cursor-pointer align-middle'
                                    id={items.id}
                                    type='checkbox'
                                />
                                <label htmlFor={items.id} className='block min-h-5 pt-px pl-7 text-[11px] leading-4 break-keep font-bold'>
                                    {items.label}
                                </label>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <div className='mt-2 ml-[11px] pt-2 pb-2 pl-5 border-l border-solid border-[#000]'>
                <p className='text-sm leading-6 mb-4 font-bold'>신세계포인트 광고정보 수신동의</p>
                <div className='chk_box'>
                    <input 
                        className='left-0 top-0 w-4 h-4 rounded-full border border-black appearance-none cursor-pointer align-middle'
                        type="checkbox" 
                        id="receveAllspoint" 
                        // disabled 
                    />
                    <label htmlFor="receveAllspoint" className='min-h-5 pt-px pl-2 text-[11px] leading-4 break-keep font-bold'>
                        전체동의
                    </label>
                </div>
                <div className='flex'>
                    {
                        adAgreement.map((items:Agreement) => (
                            <div key={items.id} className='chk_box'>
                                <input 
                                    className='left-0 top-0 w-4 h-4 rounded-full border border-black appearance-none cursor-pointer align-middle'
                                    type="checkbox" 
                                    id={items.id} 
                                    // disabled 
                                />
                                <label htmlFor="receveAllspoint" className='min-h-5 pt-px pl-2 pr-3 text-[11px] leading-4 break-keep font-bold'>
                                    {items.label}
                                </label>
                            </div>
                        ))
                    } 
                </div>
            </div>    
        </>
    )
}

export default AdConsent