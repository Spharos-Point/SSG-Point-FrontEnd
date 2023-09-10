'use client'
import React from 'react'
import Swal from 'sweetalert2'

type GiftmessageFormViewProps = {
    messageText: string;
    messageStyle: string;
    isMesageUseChecked : boolean;
}

export default function GiftmessageFormView({ messageText, messageStyle, isMesageUseChecked } : GiftmessageFormViewProps) {
    const handlePreviewClick = () => {
        Swal.fire({
            text: messageText,
            customClass: {
                popup: messageStyle,
            }
        })
    };

    // 서버통신 결과에 따라 알림이 다르게 뜨도록 수정 필요
    const handleGiftClick = () => {
        Swal.fire({
            // 선물 전송여부 확인
            icon: 'question',
            title: '선물 하시겠습니까?',
            showCancelButton: true,
            confirmButtonText: '선물하기',
            cancelButtonText: '취소',

            // 선물 전송 성공
        })
        .then ((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    text: '선물이 완료되었습니다.',
                    confirmButtonText: '확인',
                })
            }
        })
        //  선물 전송 실패
        // .then(() => {})
    };

    return (
        
        <div className='flex justify-between items-center pb-[20px]'>
            {isMesageUseChecked ? (
            <button
                className='mr-[5px] box-border border-[1px] rounded-[8px] px-[15px] py-[11px] text-[#767676] w-full'
                onClick={handlePreviewClick}
            >
                미리보기
            </button>
            ) : null}
            {/* 이제 보내는 사람, 받는사람, 선물할 포인트, */}
            <button
                className='ml-[5px] box-border btn_primary rounded-[9px] w-full'
                onClick={handleGiftClick}>
                선물하기
            </button>
        </div>
    )
}