'use client'
import React, { useState } from 'react'
import styles from './PntGiftMainSub.module.css'

type GiftmessageFormSelectorProps = {
    selectedCard: number;
    handleButtonClick: (value: React.SetStateAction<number>) => void;
}

export default function GiftmessageFormSelector({
    selectedCard, handleButtonClick }: GiftmessageFormSelectorProps) {
    return (
        <div className='flex flex-round'>
            <button
                className={selectedCard === 1 ? styles.card_select_btn_active : styles.card_select_btn_default}
                value={1}
                onClick={() => handleButtonClick(1)}>
                축하해요
            </button>
            <button
                className={selectedCard === 2 ? styles.card_select_btn_active : styles.card_select_btn_default}
                value={2}
                onClick={() => handleButtonClick(2)}>
                감사해요
            </button>
            <button
                className={selectedCard === 3 ? styles.card_select_btn_active : styles.card_select_btn_default}
                value={3}
                onClick={() => handleButtonClick(3)}>
                미안해요
            </button>
            <button
                className={selectedCard === 4 ? styles.card_select_btn_active : styles.card_select_btn_default}
                value={4}
                onClick={() => handleButtonClick(4)}>
                사랑해요
            </button>
        </div>
    )
}
