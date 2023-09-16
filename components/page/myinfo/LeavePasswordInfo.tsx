'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

function LeavePasswordInfo() {

    const session = useSession();
    const router = useRouter();

    const handleleavePasswordFetch = async () => {
        const response = await fetch("http://localhost:8000/api/v1/leavePwd", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${session.data?.user.token}`
            },
            body:JSON.stringify({
                password: password.password
            })
        })
        const json = await response.json();
        console.log(json, password);
        if(json.code === 200) {
            router.push('/myinfo/withdrawal/leaveUsingService')
        } else {
            Swal.fire({
                text: json.message,
                confirmButtonText: "확인",
                customClass: {
                    confirmButton: "mySwalConfirmButton"
                },
            })
        }
    }

    const [password, setPassword] = useState({
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        console.log(name, value)
        setPassword({
            ...password,
            [name]: value
        })
    }

    return (
        <div className='pt-0 px-5 pb-10'>
            <div className='box-border pb-[25px]'>
                <p className='pb-2 text-[12px] leading-[21px] font-bold'>
                    비밀번호
                </p>
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
            <div className='btn_box'>
                <button className='btn_primary' onClick={handleleavePasswordFetch}>확인</button>
            </div>
        </div>
    )
}   

export default LeavePasswordInfo