'use client'

import React, { useEffect, useState } from 'react'
import styles from './ModigyInfo.module.css'
import { DaumAddressType } from '@/types/DaumAddressType';
import Postcode from '@/components/widget/Postcode';
import { AuthFormDataType, ModifyDataType } from '@/types/formDataType';
import { useRouter } from 'next/navigation';
import Note from '../note/note';
import { findNotice } from '@/data/noticeData';
import { useSession } from 'next-auth/react';

function JoinForm() {
    const router = useRouter();
    const {data: session} = useSession();
    // 회원가입 
    const [modify, setModify] = useState<ModifyDataType>({
        email: '',
        address: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        console.log(name, value);

        // setModify({
        //     ...modify,
        //     [name]: value,
            
        // })
    }


    const handSignupFetch = async () => {
        const response = await fetch(`${process.env.BASE_API_URL}/api/v1/auth/signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${session?.user.token}`
            },
            body: JSON.stringify({
                email: modify.email,
                address: modify.address
            })
        })
        .then((res) => {
            if(res.status === 200) {
                router.push('/');
            } else {
                
            }
        }) 
    }


    // 휴대폰, 이름
    const [authData, setAuthData] = useState<AuthFormDataType>({
        loginId:'',
        name: '',
        phone: '',
        birth: ''
    });
    
    // 우편 주소
    const [isView, setIsView] = useState<boolean>(false);
    const [address, setAddress] = useState<DaumAddressType>();

    const handleOpenModal = () => {
        setIsView(!isView);

    }

    // useEffect(() => {
    //     if(address){
    //         setSignup({
    //             ...signup,
    //             address: address?.address
    //         })
    //     }
    // }, [address])

    // // 로컬에 있는 이름, 전화번호 
    // useEffect(() => {
    //     if(typeof window !== 'undefined') {
    //         const jsonAuthData = localStorage.getItem('authData') || '';
    //         const authData = JSON.parse(jsonAuthData);
    //         setAuthData(authData);

    //         setSignup({
    //             ...signup,
    //             name: authData.name,
    //             phone: authData.phone
    //         })
    //     }    
    // },[])

    return (
    <>
        <div className='pt-0 px-5 pb-10'>
            <div className={`${styles.form_box} box-border pb-4`}>
                    <p className={`${styles.tit} pb-2 text-[13px] leading-[21px]`}>
                        아이디
                        <span className='hidden'>필수항목</span>
                    </p>
                    <div className='flex'>
                        <div className='w-auto flex-1 box-border relative inline-block align-top'>
                            <input 
                                type="text"
                                id="loginId"
                                name='loginId'
                                className='box-border block w-full border border-solid border-[#e8e8e8] text-sm rounded-lg h-12 px-4'
                                readOnly
                            />
                        </div>    
                    </div>
                    <p className='error_txt'></p>  
                </div>
                <div className={`${styles.form_box} box-border pb-4`}>
                    <p className={`${styles.tit} pb-2 text-[13px] leading-[21px]`}>
                        이름
                        <span className='hidden'>필수항목</span>
                    </p>
                    <div className='flex'>
                        <div className='w-auto flex-1 box-border relative inline-block align-top'>
                            <input 
                                type="text"
                                id="nameId"
                                name='nameId'
                                className={`${styles.readonly} first-line:box-border block w-full border border-solid border-[#e8e8e8] text-sm rounded-lg h-12 px-4`}
                                value={authData.name}
                                readOnly
                            />
                        </div>    
                    </div>
                </div>
                <div className={`${styles.form_box} box-border pb-4`}>
                    <p className={`${styles.tit} pb-2 text-[13px] leading-[21px]`}>
                        휴대폰번호
                        <span className='hidden'>필수항목</span>
                    </p>
                    <div className='flex'>
                        <div className='w-auto flex-1 box-border relative inline-block align-top'>
                            <input 
                                type="text"
                                id="phoneId"
                                name="phoneId"
                                className={`${styles.readonly} box-border block w-full border border-solid border-[#e8e8e8] text-sm rounded-lg h-12 px-4`}
                                value={authData.phone}
                                readOnly
                            />
                        </div>    
                    </div>
                </div>
                <div className={`${styles.form_box} box-border pb-4`}>
                    <p className={`${styles.tit} pb-2 text-[13px] leading-[21px]`}>
                        자택주소
                        <span className='hidden'>필수항목</span>
                    </p>
                    <div>
                        <div className='flex'>
                            <div className='w-auto flex-1 box-border relative inline-block align-top'>
                                <input 
                                    type="text"
                                    id="addressId"
                                    className='box-border block w-full border border-solid border-[#e8e8e8] text-sm rounded-lg h-12 px-4'
                                    placeholder='우편번호'
                                    readOnly
                                    value={
                                        address
                                        ?
                                        address?.zonecode
                                        :
                                        ''
                                    }
                                />
                            </div>    
                            <div className={`${styles.btn_box} ml-[5px]`}>
                                <div className='p-3 text-[#000] border border-solid border-[#bcbcbc] font-normal rounded-lg h-12 block w-full text-center text-sm leading-6 box-border'>
                                    <button onClick={handleOpenModal}>우편번호 찾기</button>
                                    <Postcode isView={isView} setIsView={setIsView} setAddress={setAddress} />
                                </div>
                            </div>    
                        </div>
                        <div className='input_box mt-2'>
                            <input 
                                type="text"
                                id="addressId01"
                                name="addressId01"
                                className='box-border block w-full border border-solid border-[#e8e8e8] text-sm rounded-lg h-12 px-4'
                                value={
                                    address?
                                        address?.address
                                    :
                                    ''
                                }
                                readOnly
                            />
                        </div>
                        <div className='input_box mt-2'>
                            <input 
                                type="text"
                                id="addressId02"
                                className='box-border block w-full border border-solid border-[#e8e8e8] text-sm rounded-lg h-12 px-4'
                                placeholder='상세주소'
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div className={`${styles.form_box} box-border pb-4`}>
                    <p className={`pb-2 text-[13px] leading-[21px]`}>
                        이메일
                    </p>
                    <div className='flex'>
                        <div className='w-auto flex-1 box-border relative inline-block align-top'>
                            <input 
                                type="text"
                                id="email"
                                name="email"
                                title='이메일 입력'
                                className={`${styles.readonly} box-border block w-full border border-solid border-[#e8e8e8] text-sm rounded-lg h-12 px-4`}
                                readOnly
                                onChange={handleChange}
                            />
                        </div>  
                        <span className='m-auto px-2'>@</span>
                        <div className='w-auto flex-1 box-border relative inline-block align-top'>
                            <input 
                                type="text"
                                id="domain"
                                name="domain"
                                title='도메인 입력'
                                className={`${styles.readonly} box-border block w-full border border-solid border-[#e8e8e8] text-sm rounded-lg h-12 px-4`}
                                readOnly
                                onChange={handleChange}
                            />
                        </div>    
                    </div>
                    <div className='relative pt-2'>
                        <div className={`${styles.select_box} relative inline-block align-top bg-white rounded-lg w-full`}>
                            <select name="autoDomain" id="autoDomain" className='appearance-none block w-full h-12 py-0 pr-8 pl-4 box-border border-2 border-solid border-gray-200 rounded-lg text-sm relative'>
                                <option>직접입력</option>
                                <option value="naver.com">naver.com</option>
                                <option value="daum.net">daum.net</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="kakao.com">kakao.com</option>
                            </select>
                        </div>
                    </div>
                </div>
            <div className='w-full mt-7'>
                <div className='btn_box'>
                    {/* <Link href='/member/join/success' className={styles.btn_primary}>확인</Link> */}
                    <button className='btn_primary' onClick={handSignupFetch}>확인</button>
                </div>
            </div>
        </div>
        <Note note={findNotice}/>
    </>     
    )
}

export default JoinForm