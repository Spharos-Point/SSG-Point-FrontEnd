'use client'

import { ChangePointPwdDataType } from '@/types/formDataType';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

export default function ChgPntPwdInfo() {

    const { data: session } = useSession();
    const router = useRouter();

    const [changePntPw, setChangePntPw] = useState<ChangePointPwdDataType>({
        newPointPassword: '',
        newPointPasswordCheck: '',
    });

    const isNumeric = (value: string) => {
        return /^[0-9]*$/.test(value);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        //숫자만 입력받도록 검사
        if (!isNumeric(value)) {
            Swal.fire({
                text: '숫자 4자리만 입력가능합니다.',
                confirmButtonText: "확인",
                customClass: {
                    confirmButton: "mySwalConfirmButton",
                }
            })
            setChangePntPw({
                ...changePntPw,
                [name]: '',
            });
            return;
        }
        setChangePntPw({
            ...changePntPw,
            [name]: value,
        })
    }

    const handleChangePntPwdFetch = async () => {
        const { newPointPassword, newPointPasswordCheck } = changePntPw;
    
        if (!newPointPassword || !newPointPasswordCheck) {
            Swal.fire({
                text: '변경하실 포인트 비밀번호를 모든 칸에 입력해주세요.',
                confirmButtonText: '확인',
                customClass: {
                    confirmButton: 'mySwalConfirmButton',
                },
            });
        } else if (newPointPassword !== newPointPasswordCheck) {
            Swal.fire({
                text: '변경하실 포인트 비밀번호와 포인트 비밀번호 확인이 일치하지 않습니다.',
                confirmButtonText: '확인',
                customClass: {
                    confirmButton: 'mySwalConfirmButton',
                },
            });
        } else {
            const response = await fetch(`${process.env.BASE_API_URL}/api/v1/changePointPwd`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session?.user.token}`,
                },
                body: JSON.stringify({
                    newPointPassword: changePntPw.newPointPassword,
                }),
            });
    
            const json = await response.json();
            console.log(json);
            if (json.code === 200) {
                Swal.fire({
                    text: '포인트 비밀번호가 변경되었습니다',
                    confirmButtonText: '확인',
                    customClass: {
                        confirmButton: 'mySwalConfirmButton',
                    },
                }).then((result) => {
                    if (result.isConfirmed) {
                        router.push('/mypoint/cardManage');
                    }
                });
            } else {
                Swal.fire({
                    text: `${json.message}`,
                    confirmButtonText: '확인',
                    customClass: {
                        confirmButton: 'mySwalConfirmButton',
                    },
                });
            }
        }
    };

    return (
        <div className='pt-0 px-5 pb-10'>
            <div>
                <div className='pb-4 box-border'>
                    <p className='pb-2 text-[13px] leading-[21px]'>포인트 비밀번호 입력</p>
                    <div className='box-border relative inline-block w-full align-top'>
                        <input
                            type="text"
                            id='newPointPassword'
                            name='newPointPassword'
                            onChange={handleChange}
                            value={changePntPw.newPointPassword}
                            maxLength={4}
                            className='box-border block w-full border border-solid border-[#e8e8e8] text-sm rounded-lg h-12 py-0 px-4'
                            placeholder='신규 비밀번호를 입력해주세요.'
                        />
                    </div>
                </div>
                <div className='pb-4 box-border'>
                    <p className='pb-2 text-[13px] leading-[21px]'>포인트 비밀번호 확인</p>
                    <div className='box-border relative inline-block w-full align-top'>
                        <input
                            type="text"
                            id='newPointPasswordCheck'
                            name='newPointPasswordCheck'
                            onChange={handleChange}
                            value={changePntPw.newPointPasswordCheck}
                            maxLength={4}
                            className='box-border block w-full border border-solid border-[#e8e8e8] text-sm rounded-lg h-12 py-0 px-4'
                            placeholder='입력하신 비밀번호를 다시 한번 입력해주세요.'
                        />
                    </div>
                </div>
            </div>
            <div className='btn_box mt-5'>
                <button className='btn_primary' onClick={handleChangePntPwdFetch}>확인</button>
            </div>
        </div>
    )
}
