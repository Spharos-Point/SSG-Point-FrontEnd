'use client'
import React, { useState } from 'react';
import styles from './PntGiftMainSub.module.css';
import Swal from 'sweetalert2';
import { useSession } from 'next-auth/react';
import PntGiftValueSet from './PntGiftValueSet';

export default function SearchUserFormSet() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [userName, setUserName] = useState('');
    const [isUserChecked, setIsUserChecked] = useState(false); // 조회 결과 일치하는 유저 정보가 있는지 확인
    const [searchResult, setSearchResult] = useState(null); // 서버에서 받아온 조회 결과 데이터
    const [maskedName, setMaskedName] = useState(''); // 이름 상태 추가
    const [maskedId, setMaskedId] = useState(''); // 아이디 상태 추가
    const [receiverLoginId, setReceiverLoginId] = useState(''); // 아이디 상태 추가

    const { data: session } = useSession();
    const handleSearch = async () => {
        //입력값이 빠졌을 때
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
            await fetch(`https://newbiefive.store/api/v1/gift/searchSenderUser?userName=${userName}&phoneNumber=${phoneNumber}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session?.user.token}`,
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    // 서버에서 받은 데이터를 상태 변수에 저장
                    setSearchResult(data);
                    if (data.isSuccess === true) {
                        const receiverId = data.result;
                        const receiverName = userName;

                        //이름, 아이디 블러처리
                        const nameArray = receiverName.split('');
                        for (let i = 1; i < nameArray.length - 1; i++) {
                            nameArray[i] = '*';
                        }
                        const updatedMaskedName = nameArray.join('');
                        setMaskedName(updatedMaskedName); // 이름 상태 업데이트
                        const updatedMaskedId = receiverId.slice(0, 2) + '*'.repeat(receiverId.length - 2);
                        setReceiverLoginId(receiverId);
                        console.log(receiverLoginId);
                        setMaskedId(updatedMaskedId); // 아이디 상태 업데이트\
                        Swal.fire({
                            text: `선물하려는 분이 맞는지 확인해 주세요 이름: ${updatedMaskedName} 아이디: ${updatedMaskedId}`,
                            showCancelButton: true,
                            confirmButtonText: '확인',
                            cancelButtonText: '취소',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                // 확인 버튼을 눌렀을 때
                                setIsUserChecked(true);
                            } else {
                                setIsUserChecked(false);
                            }
                        });
                    } else if (data.code === 3003) {
                        Swal.fire({
                            icon: 'error',
                            title: '오류',
                            text: `${data.message}`, // 존재하지 않는 유저일 때
                        });
                    } else if (data.code === 5001) {
                        Swal.fire({
                            icon: 'error',
                            title: '오류',
                            text: `${data.message}`, // 본인에게 선물 시도할 시
                        });
                    }
                })
                .catch((error) => {
                    //기타 오류 처리
                    console.error('서버 요청 오류:', error);
                    Swal.fire({
                        icon: 'error',
                        title: '오류',
                        text: '서버 요청 중 오류가 발생했습니다.',
                    });
                });
        };
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
                className='mt-5 mb-[10px] box-border bg-black text-[14px] text-white text-center p-[12px] w-full rounded-[8px]'
                onClick={handleSearch}>
                조회하기
            </button>
            {/* 조회 결과 받아온 유저의 이름, ID 정보를 아래에 삽입 */}
            {isUserChecked && (
                <div className='box-border mt-[20px]'>
                    <p className='text-[14px] text-[#ea035c] font-bold pb-[15px]'>포인트 선물 받으실 분을 확인하세요.</p>
                    <div className='box-border border-[2px] border-[#ea035c] shadow-xl rounded-[8px] p-[20px]'>
                        <div className='flex justify-between box-border leading-[19px]'>
                            <p className={'text-[11px] text-[#767676]'}>선물 받을 분 :
                                <strong className='block text-[14px] leading-[24px] pt-[2px] text-black'>
                                    {maskedName} (ID: {maskedId})
                                </strong>
                            </p>
                        </div>
                    </div>
                    <PntGiftValueSet receiverLoginId={receiverLoginId} giftPoint={0} pointPassword={''} giftMessage={''} giftImage={''} />
                </div>
            )}
        </div>
    )
}