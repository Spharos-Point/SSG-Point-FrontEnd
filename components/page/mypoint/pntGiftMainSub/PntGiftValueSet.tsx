'use client'
import React, {useEffect, useState } from 'react'
import styles from './PntGiftMainSub.module.css'
import Link from 'next/link'
import { useSession } from 'next-auth/react';

export default function PntGiftValueSet() {
    const [availablegiftPoints, setAvailableGiftPoints] = useState(null);
    const { data: session } = useSession();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://newbiefive.store/api/v1/pointRead/total', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${session?.user.token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setAvailableGiftPoints(data.result); // API에서 받은 데이터를 상태 변수에 저장
            } catch (error) {
                console.error(error);
            }
        }
        fetchData(); // fetchData 함수 호출
    }, [session]); // session이 변경될 때마다 API 요청을 다시 보냄
    return (
        <div>
            <div className='box-border pt-5'>
                <p className='text-[14px] font-bold'>선물가능 포인트</p>
                <div className='h-[50px] pt-[5px]'>
                    <p className={styles.p_accumulate}>
                        {availablegiftPoints !== null ? availablegiftPoints : '0'}
                    </p>
                </div>
            </div>
            <label htmlFor="" className="after:content-['*'] after:ml-0.5 after:text-red-500 block 
            text-sm font-bold text-slate-700 pb-2">
                선물할 포인트
            </label>
            <input type="text" id="" className={styles.input_box2} />

            <label htmlFor="" className="after:content-['*'] after:ml-0.5 after:text-red-500 block 
            text-sm font-bold text-slate-700 pb-2">
                포인트 비밀번호
            </label>
            <input type="text" id="" className={styles.input_box2} />
            <button className={styles.Link_btn}>
                <Link href={'/mypoint/chgPntPwdCert'}>
                    포인트 비밀번호가 기억나지 않으세요?
                </Link>
            </button>
        </div>
    )
}
