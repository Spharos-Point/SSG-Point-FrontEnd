import React, { useState } from 'react';
import styles from './PntGiftMainSub.module.css';
import GiftmessageFormSelector from './GiftmessageFormSelector';
import GiftmessageFormView from './GiftmessageFormView';

export default function PntGiftMessageForm() {
    //선물 메시지 사용 여부
    const [isMesageUseChecked, setIsMesageUseChecked] = useState(false);
    const [isMesageNoChecked, setIsMesageNoChecked] = useState(false);

    //선물 메시지 카드 타입 선택
    const [selectedCard, setSelectedCard] = useState(1);
    //선물 메시지 텍스트
    const [messageText, setMessageText] = useState('');

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
    const handleButtonClick = (value: React.SetStateAction<number>) => {
        setSelectedCard(value);
    };

    //메시지 입력에 따라 messageText 업데이트
    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessageText(event.target.value);
    };

    return (
        <div className='px-5'>
            <p className='text-[12px] leading-[19px] mt-5'>포인트 선물 메시지</p>
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
                        <div className={`${selectedCard === 1 ? styles.gift_card_paper_01
                            : selectedCard === 2 ? styles.gift_card_paper_02
                                : selectedCard === 3 ? styles.gift_card_paper_03
                                    : selectedCard === 4 ? styles.gift_card_paper_04
                                        : ''
                            }`}>
                            <div className='w-[315px] mx-auto'>
                                <div className={styles.card_cotents}>
                                    <textarea
                                        name="cardContents"
                                        id="메세지카드내용"
                                        maxLength={50}
                                        rows={3}
                                        className={styles.card_cotents_textarea}
                                        value={messageText}
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
                    messageText={messageText}
                    messageStyle={`${selectedCard === 1 ? styles.gift_card_paper_01
                        : selectedCard === 2 ? styles.gift_card_paper_02
                            : selectedCard === 3 ? styles.gift_card_paper_03
                                : selectedCard === 4 ? styles.gift_card_paper_04
                                    : ''
                    }`} 
                    isMesageUseChecked={isMesageUseChecked}
                    />
            </div>
        </div>
    );
}