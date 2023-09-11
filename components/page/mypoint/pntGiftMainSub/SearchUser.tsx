'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './PntGiftMainSub.module.css';
import Swal from 'sweetalert2';
import { useSession } from 'next-auth/react'

export default function SearchUser() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [userName, setUserName] = useState('');
    const [isUserChecked, setIsUserChecked] = useState(false); // 조회 결과 일치하는 유저 정보가 있는지 확인
    const [searchResult, setSearchResult] = useState(null); // 서버에서 받아온 조회 결과 데이터

    const { data: session } = useSession();
    console.log(session);
    console.log(phoneNumber, userName);

    const handleSearch = async () => {
    let accessToken;

        //사용자가 로그인되지 않았을 경우에 대한 처리
        if (!userName || !phoneNumber) {
            Swal.fire({
                icon: 'error',
                title: '입력 오류',
                text: '받을 분의 전화번호와 이름을 모두 입력하세요.',
            });
            return;
        }
        else {
            // 서버 URL 설정
            const serverUrl = await fetch(`http://localhost:8000/api/v1/gift/searchSenderUser?userName=${userName}&phoneNumber=${phoneNumber}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${accessToken}`,
                }   
            })
                .then((response) => response.json())
                .then((data) => {
                    // 서버에서 받은 데이터를 상태 변수에 저장
                    setSearchResult(data);
                    if (data.isSuccess === true) {
                        Swal.fire({
                            icon: 'success',
                            title: '조회 결과',
                            text: `${data.message}`, // 서버에서 받은 성공 메시지
                        });
                    } else if (data.code === 3003){
                        Swal.fire({
                            icon: 'error',
                            title: '오류',
                            text: `${data.message}`, // 존재하지 않는 유저일 때
                        });
                    }  else if (data.code === 5001){
                        Swal.fire({
                            icon: 'error',
                            title: '오류',
                            text: `${data.message}`, // 본인에게 선물 시도할 시
                        });
                    }
                }) 
                .catch((error) => {
                    // 오류 처리
                    console.error('서버 요청 오류:', error);
                    Swal.fire({
                        icon: 'error',
                        title: '오류',
                        text: '서버 요청 중 오류가 발생했습니다.',
                    });
                });
        };
    console.log(searchResult);
    };

    return (
        <div className='box-bording px-5'>
            <label htmlFor="phoneNumber" className="hidden">
                휴대폰 번호
            </label>

            <input
                id="phoneNumber"
                type='text'
                className={styles.input_box1}
                placeholder="-없이 휴대폰 번호를 입력해 주세요."
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)} />

            <label htmlFor="userName" className="hidden">
                사용자 이름
            </label>
            <input
                id="userName"
                type='text'
                className={styles.input_box1}
                placeholder='실명을 정확하게 입력해 주세요.'
                value={userName}
                onChange={(e) => setUserName(e.target.value)} />

            <button
                className='mt-10 mb-[10px] box-border bg-black text-[14px] text-white text-center p-[12px] w-full rounded-[8px]'
                onClick={handleSearch}>
                조회하기
            </button>

            {/* 받을 사람 조회 결과 일치하는 유저 정보가 있고, 그 정보를 선택하는 버튼을 누르면 'box-border': 'hidden' */}
            {/* 조회 결과 받아온 유저의 이름, ID 정보를 아래에 삽입 */}
            {isUserChecked && searchResult && (
                <div>
                    <div className='box-border mt-[20px]'>
                        <p className='text-[14px] text-[#ea035c] font-bold pb-[15px]'>포인트 선물 받으실 분을 확인하세요.</p>
                        <div className='box-border border-[2px] border-[#ea035c] shadow-xl rounded-[8px] p-[20px]'>
                            <div className='flex justify-between box-border leading-[19px]'>
                                <p className={'text-[11px] text-[#767676]'}>선물 받을 분 :
                                    <strong className='block text-[14px] leading-[24px] pt-[2px] text-black'>
                                        {"양*민"}(ID: {"yc****"})
                                    </strong>
                                </p>
                            </div>
                        </div>
                        <div className='box-border pt-10'>
                            <p className='text-[14px] font-bold'>선물가능 포인트</p>
                            <div className='h-[50px] pt-[5px]'>
                                <p className={styles.p_accumulate}>
                                    {9999999}
                                </p>
                            </div>
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
            )}
        </div>
    )
}