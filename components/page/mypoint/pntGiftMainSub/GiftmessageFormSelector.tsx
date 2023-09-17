'use client'
import React, { useState } from 'react'
import styles from './PntGiftMainSub.module.css'

type GiftmessageFormSelectorProps = {
    selectedCard: string;
    handleButtonClick: (value: React.SetStateAction<string>) => void;
}

export default function GiftmessageFormSelector({
    selectedCard, handleButtonClick }: GiftmessageFormSelectorProps) {
    return (
        <div className='flex flex-round'>
            <button
                className={selectedCard === 'image1' ? styles.card_select_btn_active : styles.card_select_btn_default}
                value={'image1'}
                onClick={() => handleButtonClick('image1')}>
                축하해요
            </button>
            <button
                className={selectedCard === 'image2' ? styles.card_select_btn_active : styles.card_select_btn_default}
                value={'image2'}
                onClick={() => handleButtonClick('image2')}>
                감사해요
            </button>
            <button
                className={selectedCard === 'image3'? styles.card_select_btn_active : styles.card_select_btn_default}
                value={'image3'}
                onClick={() => handleButtonClick('image3')}>
                미안해요
            </button>
            <button
                className={selectedCard === 'image4' ? styles.card_select_btn_active : styles.card_select_btn_default}
                value={'image4'}
                onClick={() => handleButtonClick('image4')}>
                사랑해요
            </button>
        </div>
    )
}
