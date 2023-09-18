'use client'

import { adAgreement, formAgreements } from '@/data/agreeData'
import { Agreement, AgreementSide } from '@/types/agreeDataType'
import React, { useState } from 'react'
import Checkbox from './Checkbox';

function AdConsent() {

    const [agreeDataList, setAgreeDataList] = useState<Agreement[]>(adAgreement as Agreement[]);
    const [isAllChecked, setIsAllChecked] = useState<boolean>(false);

    const handleChecked = (id:number, isCheck:boolean) => {

        const newAgreeList = [...agreeDataList];
            newAgreeList.map((item) => {
                if(item.id === id){
                    item.isCheck = isCheck;
                }
            })
            setAgreeDataList(newAgreeList);
    
        const allChecked = newAgreeList.every((item) => item.isCheck);
            setIsAllChecked(allChecked);
        }
    
        const handleAllChecked = () => {
            const newAgreeList = [...agreeDataList];
            newAgreeList.map((item) => {
                item.isCheck = !isAllChecked;
            })
            setAgreeDataList(newAgreeList);
            setIsAllChecked(!isAllChecked);
    }

    return (
        <>
            <ul>
                {
                    formAgreements.map((items:AgreementSide) => (
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
                <div className='chk_box mb-2'>
                    <input 
                        className='left-0 top-0 w-4 h-4 rounded-full border border-black appearance-none cursor-pointer align-middle'
                        type="checkbox" 
                        id="receveAllspoint" 
                        checked={adAgreement.every((item) => item.isCheck)}
                        onClick={handleAllChecked}
                    />
                    <label htmlFor="receveAllspoint" className='min-h-5 pt-px pl-3.5 text-[11px] leading-4 break-keep font-bold'>
                        전체동의
                    </label>
                </div>
                <div className='flex'>
                    {
                        adAgreement.map((item:Agreement) => {
                            return (
                                <Checkbox 
                                    key={item.id}
                                    checkId={item.id}
                                    label={item.title}
                                    name={item.title}
                                    checked={item.isCheck}
                                    handler={handleChecked}
                                    size={1}
                                />
                            )
                        })
                    } 
                </div>
            </div>    
        </>
    )
}

export default AdConsent