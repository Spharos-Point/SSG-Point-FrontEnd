'use client'

import { ChangePwdDataType } from '@/types/formDataType';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

function ChangePwdInfo() {

    const {data:session} = useSession();
    const router = useRouter();

    const [changePw, setChangePw] = useState<ChangePwdDataType>({
        password:'',
        newPassword:'',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

    setChangePw({
        ...changePw,
        [name]: value,
        
    })
    }


    const handleChangePwdFetch = async () => {
        const response = await fetch(`${process.env.BASE_API_URL}/api/v1/changePwd`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${session?.user.token}`,
            },
            body: JSON.stringify({
                password: changePw.password,
                newPassword: changePw.newPassword,
            })
        });

        const json = await response.json();
        console.log(json)
        if(json.code === 200) {
            Swal.fire({
                text: '비밀번호가 변경되었습니다',
                confirmButtonText: "확인",
                customClass: {
                confirmButton: "mySwalConfirmButton",
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    signOut({callbackUrl: '/login'})
                }
            })
        } else {
            Swal.fire({
                text: `${json.message}`,
                confirmButtonText: "확인",
                customClass: {
                confirmButton: "mySwalConfirmButton",
                },
            })
        }
        
    }

    return (
        <div className='pt-0 px-5 pb-10'>
            <div>
                <div className='pb-4 box-border'>
                    <p className='pb-2 text-[13px] leading-[21px]'>현재 비밀번호</p>
                    <div className='box-border relative inline-block w-full align-top'>
                        <input 
                            type="password"
                            id='password'
                            name='password'
                            onChange={handleChange}
                            className='box-border block w-full border border-solid border-[#e8e8e8] text-sm rounded-lg h-12 py-0 px-4'
                            placeholder='비밀번호를 입력해주세요.'
                        />
                    </div>
                </div>
                <div className='pb-4 box-border'>
                    <p className='pb-2 text-[13px] leading-[21px]'>신규 비밀번호</p>
                    <div className='box-border relative inline-block w-full align-top'>
                        <input 
                            type="password"
                            id='newPassword'
                            name='newPassword'
                            onChange={handleChange}
                            className='box-border block w-full border border-solid border-[#e8e8e8] text-sm rounded-lg h-12 py-0 px-4'
                            placeholder='신규 비밀번호를 입력해주세요.'
                        />
                    </div>
                </div>
                <div className='pb-4 box-border'>
                    <p className='pb-2 text-[13px] leading-[21px]'>신규 비밀번호 확인</p>
                    <div className='box-border relative inline-block w-full align-top'>
                        <input 
                            type="password"
                            id='newPasswordCheck'
                            name='newPasswordCheck'
                            className='box-border block w-full border border-solid border-[#e8e8e8] text-sm rounded-lg h-12 py-0 px-4'
                            placeholder='입력하신 비밀번호를 다시 한번 입력해주세요.'
                        />
                    </div>
                </div>
            </div>
            <div className='btn_box mt-5'>
                <button className='btn_primary' onClick={handleChangePwdFetch}>확인</button>
            </div>
        </div>
    )
}

export default ChangePwdInfo