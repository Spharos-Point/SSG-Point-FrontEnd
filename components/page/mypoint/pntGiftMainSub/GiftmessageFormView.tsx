'use client'
import React from 'react';
import Swal from 'sweetalert2';
import { useSession } from 'next-auth/react';

type GiftmessageFormViewProps = {
    receiverLoginId: string;
    giftpoint: number;
    giftMessage: string;
    propgiftImage: string;
    giftImage: string;
    pointPassword: string;
    isMesageUseChecked: boolean;
}

export default function GiftmessageFormView({ receiverLoginId, giftpoint, giftMessage, giftImage, pointPassword, propgiftImage,isMesageUseChecked }: GiftmessageFormViewProps) {
    const { data: session } = useSession();
    console.log("토큰 :", session?.user.token)
    console.log("Id: ", receiverLoginId, "point: ", giftpoint, "message: ", giftMessage, "style: ", propgiftImage, "pw : ", pointPassword ,"checked: ", isMesageUseChecked);
    const handlePreviewClick = () => {
        Swal.fire({
            text: giftMessage,
            customClass: {
                popup: giftImage,
            }
        });
    };

    const handleGiftClick = () => {
        
        fetch(`${process.env.BASE_API_URL}/api/v1/gift/createPoint`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${session?.user.token}`,
            },
            body: JSON.stringify({
                "receiverLoginId" : receiverLoginId,
                "giftpoint": giftpoint,
                "pointPassword": pointPassword,
                "giftMessage": giftMessage,
                "giftImage": propgiftImage,
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    Swal.fire({
                        icon: 'success',
                        text: '선물이 완료되었습니다.',
                        confirmButtonText: '확인',
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        text: '선물 전송 실패',
                        confirmButtonText: '확인',
                    });
                }
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    text: '오류가 발생했습니다.',
                    confirmButtonText: '확인',
                });
            });
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
            <button
                className='ml-[5px] box-border btn_primary rounded-[9px] w-full'
                onClick={handleGiftClick}
            >
                선물하기
            </button>
        </div>
    );
}
