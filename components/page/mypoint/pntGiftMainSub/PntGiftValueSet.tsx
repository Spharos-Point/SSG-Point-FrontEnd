'use client'
import React, { useEffect, useState } from 'react'
import styles from './PntGiftMainSub.module.css'
import Link from 'next/link'
import { useSession } from 'next-auth/react';
import GiftmessageFormSelector from './GiftmessageFormSelector';
import GiftmessageFormView from './GiftmessageFormView';
import { PointGiftType } from '@/types/PointGiftType';

export default function PntGiftValueSet({ receiverLoginId }: PointGiftType) {
    const [availablegiftPoints, setAvailableGiftPoints] = useState(null);
    const { data: session } = useSession();
    //선물 메시지 사용 여부
    const [isMesageUseChecked, setIsMesageUseChecked] = useState(false);
    const [isMesageNoChecked, setIsMesageNoChecked] = useState(false);
    //선물 메시지 카드 타입 선택
    const [selectedCard, setSelectedCard] = useState('image1');
    const propgiftImage = selectedCard;
    //선물 메시지 텍스트
    const [giftMessage, setgiftMessage] = useState('');
    // 포인트 입력을 받는 상태 변수와 핸들러 추가
    const [giftPoint, setGiftPoint] = useState(0);
    
    // 비밀번호 입력을 받는 상태 변수와 핸들러 추가
    const [pointPassword, setPointPassword] = useState('');
    // 사용여부 둘 중 하나만 체크
    const handleIsMesageUseChecked = () => {
        setIsMesageUseChecked(true);
        setIsMesageNoChecked(false);
    };
    const handleIsMesageNoChecked = () => {
        setIsMesageUseChecked(false);
        setIsMesageNoChecked(true);
    };
    // 버튼 클릭에 따라 selectedCard 업데이트
    const handleButtonClick = (value: React.SetStateAction<string>) => {
        setSelectedCard(value);
    };
    // 포인트 입력 핸들러
    const handleGiftPointChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const numericValue = /^\d+$/.test(inputValue) ? parseInt(inputValue, 10) : 0;
        setGiftPoint(numericValue);
        console.log('numericValue :' , numericValue);
    };
    // 비밀번호 입력 핸들러
    const handlePointPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = event.target.value;
        setPointPassword(newPassword);
    };
    //메시지 입력에 따라 giftMessage 업데이트
    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setgiftMessage(event.target.value);
    };

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

    console.log(availablegiftPoints); // 데이터를 콘솔에 출력
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
            <label htmlFor="pointInput" className="after:content-['*'] after:ml-0.5 after:text-red-500 block 
            text-sm font-bold text-slate-700 pb-2">
                선물할 포인트
            </label>
            <input type="number"
                id="pointInput"
                className={styles.input_box2}
                onChange={handleGiftPointChange} />

            <label htmlFor="pointpasswordInput" className="after:content-['*'] after:ml-0.5 after:text-red-500 block 
            text-sm font-bold text-slate-700 pb-2">
                포인트 비밀번호
            </label>
            <input type="number"
                id="pointpasswordInput"
                className={styles.input_box2}
                onChange={handlePointPasswordChange} />
            <button className={styles.Link_btn}>
                <Link href={'/mypoint/chgPntPwdCert'}>
                    포인트 비밀번호가 기억나지 않으세요?
                </Link>
            </button>
            <p className='text-[12px] leading-[19px] mt-5'> 포인트 선물 메시지</p>
            <div className={styles.Message_checkBox}> 
                <input 
                    type="checkbox" 
                    name="isMesageUse" 
                    id="isMesageUse" 
                    checked={isMesageUseChecked}
                    onChange={handleIsMesageUseChecked}
                />
                <label htmlFor="isMesageUse">사용</label>

                <input
                    type="checkbox"
                    name="isMasageNo"
                    id="isMasageNo"
                    checked={isMesageNoChecked}
                    onChange={handleIsMesageNoChecked}
                />
                <label >사용 안함</label>
            </div>

            {/* isMesageNoChecked 유무에 따라 표시 or null */}
            {isMesageUseChecked ? (
                <>
                    <div className='box-border my-5'>
                        {/* 메시지 버튼에 따라 메시지 폼 선택하여 css 적용 */}
                        <GiftmessageFormSelector
                            selectedCard={selectedCard}
                            handleButtonClick={handleButtonClick} />
                        <div className={`${selectedCard === 'image1' ? styles.gift_card_paper_01
                            : selectedCard === 'image2' ? styles.gift_card_paper_02
                                : selectedCard === 'image3' ? styles.gift_card_paper_03
                                    : selectedCard === 'image4' ? styles.gift_card_paper_04
                                        : ''
                            }`}>
                            <div className='w-[315px] mx-auto'>
                                <div className={styles.card_cotents}>
                                    <textarea
                                        id="messageInput"
                                        maxLength={50}
                                        rows={3}
                                        className={styles.card_cotents_textarea}
                                        value={giftMessage}
                                        onChange={handleTextareaChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
            <div className='box-border my-5'>
                <GiftmessageFormView
                    giftImage={`${selectedCard === 'image1' ? styles.gift_card_paper_01
                        : selectedCard === 'image2' ? styles.gift_card_paper_02
                            : selectedCard === 'image3' ? styles.gift_card_paper_03
                                : selectedCard === 'image4' ? styles.gift_card_paper_04
                                    : ''
                        }`}
                    receiverLoginId={receiverLoginId}
                    propgiftImage={propgiftImage}
                    giftpoint={giftPoint}
                    pointPassword={pointPassword}
                    giftMessage={giftMessage? giftMessage : ''}
                    isMesageUseChecked={isMesageUseChecked}
                />
            </div>
        </div>

    )
}
