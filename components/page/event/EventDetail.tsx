'use client'

import { EventDataType } from '@/types/eventDataType';
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import Swal from 'sweetalert2';

function EventDetail() {

    const params = useSearchParams();
    const eventNo = params.get('eventNo');
    const [detailEvent, setDetailEvent] = useState<EventDataType>();
    const session = useSession();
    const router = useRouter();

    const handlePartiFetch = async () => {
        if(session.status === "authenticated") {
            const response = await fetch(`${process.env.BASE_API_URL}/api/v1/ingevents`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization" : `Bearer ${session.data.user.token}`
                },
                body:JSON.stringify({
                    eventId: params.get('eventNo')
                })
            });
            console.log
            if(response.status === 200) {
                Swal.fire({
                    text: "이벤트 참여가 완료 되었습니다. 참여한 이벤트는 마이 이벤트에서 확인할 수 있어요.",
                    confirmButtonText: "확인",
                    customClass: {
                    confirmButton: "mySwalConfirmButton",
                    },
                })
            }
        } else {
            Swal.fire({
                text: "이벤트 참여를 위해 먼저 로그인해 주세요.",
                showCancelButton: true,
                confirmButtonText: "로그인",
                cancelButtonText: "닫기",
                customClass: {
                    confirmButton: "mySwalConfirmButton",
                    cancelButton: "mySwalCancelButton",
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push('/login');
                }
            })
        }
    }

    useEffect(() => {
        fetch(`${process.env.BASE_API_URL}/api/v1/event/${eventNo}`, {
            method:'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((data) => setDetailEvent(data));
    }, [])

    return (
    <>
    {
        detailEvent !== undefined
        ?
        <div key={detailEvent.id}>
            <div className='relative pt-9 px-5 pb-5' >
                <p className='text-[17px] pr-[50px] leading-[26px] font-bold'>
                    {detailEvent.eventName}
                </p>
                <p className='pt-1 text-[13px] leading-[21px] block'>
                    {
                        detailEvent.regDate.substring(0,4) === detailEvent.endDate.substring(0, 4)
                        ?
                        "기간 : " + detailEvent.regDate + " ~ " + detailEvent.endDate.substring(5, 10)
                        :
                        "기간 : " + detailEvent.regDate + " ~ " + detailEvent.endDate
                    }
                </p>
                <div className='bg-share bg-contain bg-no-repeat pl-[20px] absolute right-[18px] top-[40px] h-[15px] text-[13px] font-bold'>
                    공유
                </div>    
            </div>
            <div className='relative w-full overflow-hidden text-center'>
                <p className='text-center'>
                <Image
                    src={detailEvent.eventDesc}
                    alt=''
                    width={750}
                    height={455}
                />
                </p>
            </div>
            {
                detailEvent.eventType === '참여'
                ?
                <div className='btn_box mt-3'>
                        <button className='btn_primary' onClick={handlePartiFetch}>참여하기</button>
                </div>
                :
                ""
            }
        </div>
        :
        null
    }
    </>
    )
}

export default EventDetail