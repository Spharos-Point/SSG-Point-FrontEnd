'use client'
import { ChangePwDataType } from '@/types/formDataType';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

function FindPwResultInput() {

    const router = useRouter();
    const [loginId, setLoginId] = useState();
    const [changePw, setChangePw] = useState<ChangePwDataType>({
        password:'',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        // console.log(name, value);
    setChangePw({
        ...changePw,
        [name]: value,
        
    })
    }

    const handlePwChangeFetch = async () => {
        const response = await fetch(`${process.env.BASE_API_URL}/api/v1/Search/Pwd`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                loginId: loginId,
                newPassword: changePw.password,
            })
        });

        const json = await response.json();

        if(json.code === 200) {
            Swal.fire({
                text: '비밀번호가 변경되었습니다',
                confirmButtonText: "확인",
                customClass: {
                confirmButton: "mySwalConfirmButton",
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push('/login')
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

    useEffect(() => {
        if(typeof window !== 'undefined') {
        const jsonLoginid = sessionStorage.getItem('loginId') || '';
        const loginId = JSON.parse(jsonLoginid);
        
            setLoginId(loginId);
        }    
    }, [])

    return (
        <div className='pt-0 px-5 pb-10'>
            <div>
                <div className='pb-4 box-border'>
                    <p className='pb-2 text-[13px] leading-[21px]'>비밀번호</p>
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
                    <p className='pb-2 text-[13px] leading-[21px]'>비밀번호 확인</p>
                    <div className='box-border relative inline-block w-full align-top'>
                        <input 
                            type="password"
                            id='passwordCheck'
                            name='passwordCheck'
                            onChange={handleChange}
                            className='box-border block w-full border border-solid border-[#e8e8e8] text-sm rounded-lg h-12 py-0 px-4'
                            placeholder='입력하신 비밀번호를 다시 한번 입력해주세요.'
                        />
                    </div>
                </div>
            </div>
            <div className='btn_box mt-5'>
                <button className='btn_primary' onClick={handlePwChangeFetch}>확인</button>
            </div>
        </div>
    )
}

export default FindPwResultInput