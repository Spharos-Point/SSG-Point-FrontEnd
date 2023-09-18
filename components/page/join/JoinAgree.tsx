'use client'

import React, { use, useState } from 'react'
import styles from './JoinAgree.module.css'
import { agreements } from '@/data/agreeData'
import { Agreement } from '@/types/agreeDataType'
import Link from 'next/link'
import Note from '@/components/page/note/note'
import { agreeNotice } from '@/data/noticeData'
import Checkbox from '../agree/Checkbox'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

function JoinAgree() {

    const [agreeDataList, setAgreeDataList] = useState<Agreement[]>(agreements as Agreement[]);
    const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
    const router = useRouter();

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

    const handleClick = () => {
        if (!isAllChecked) {
            Swal.fire({
            text: '[필수] 휴대전화 인증 서비스 이용약관 약관에 동의해주세요',
            confirmButtonText: "확인",
            customClass: {
            confirmButton: "mySwalConfirmButton",
            },
        })
            return;
        }
        router.push('/member/join/form');
        
    }
    return (
        <section className='mt-10' style={{marginTop: '60px'}}>
            <div className='top_cnt1 py-10 px-5'>
                <div className={`${styles.join_step} relative`}>
                    <ol className='flex relative mb-4'>
                        <li className={`relative bg-orange-400 box-border rounded-full w-5 h-5 mr-2.5`}></li>
                        <li className={`relative bg-gray-300 box-border rounded-full w-5 h-5 mr-2.5 bg-tabindex bg-contain`}></li>
                        <li className='relative bg-gray-300 box-border rounded-full w-5 h-5 mr-2.5'></li>
                        <li className='relative bg-gray-300 box-border rounded-full w-5 h-5 mr-0'></li>
                    </ol>
                    <p className='text-2xl leading-9 font-bold'>약관동의</p>
                </div>
            </div>
            <div className='pt-0 pb-10 px-5'>
                <div className='pb-10'> 
                    <div className='relative block w-full h-12'>
                    <input 
                        type="checkbox" 
                        id="agreeAllChk" 
                        className='appearance-none relative w-full h-full border-0'
                        checked={agreements.every((item) => item.isCheck)}
                        onClick={handleAllChecked}
                    />
                    <label 
                        htmlFor="agreeAllChk"
                        className='absolute left-0 top-0 w-full h-full text-center bg-gray-100 z-10 font-black text-sm leading-6 box-border rounded-lg pt-3 cursor-pointer'
                    >
                        모두 동의합니다.
                    </label>
                    </div>
                    <p className='text-[11px] leading-5 pt-2 font-normal text-[#767676]'>
                        ※ 전체 동의에는 필수 및 선택 정보수집에 대한 동의가 포함되어 있으며, 개별적인 동의 선택도 가능합니다. 선택항목에 대한 동의를 거부하시더라도 필수 서비스 이용은 가능합니다.
                    </p>
                    <p className='pt-10 pb-4 text-lg leading-7 font-bold'>
                        신세계포인트 통합회원
                    </p>
                    <p className='text-[11px] leading-5 font-bold'>
                        ㈜이마트, ㈜신세계, ㈜광주신세계, ㈜신세계동대구복합환승센터 귀중
                    </p>
                    <div className='terms_agree_box bg-none py-0'>
                    <div>
                        <ul className='mt-[17px]'>
                        {
                            agreements.map((item:Agreement) => {
                                return (
                                    <Checkbox 
                                        key={item.id}
                                        checkId={item.id}
                                        label={item.title}
                                        name={item.title}
                                        checked={item.isCheck}
                                        handler={handleChecked}
                                        size={1.25}
                                    />
                                )
                            })
                        }
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.btn_box}>
                {/* <Link className={styles.btn_primary} href='/member/join/form'>다음</Link> */}
                <button className='btn_primary' onClick={handleClick}>다음</button>
            </div>
            </div>
            <Note note={agreeNotice}/>
        </section>
    )
}

export default JoinAgree