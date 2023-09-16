'use client'

import React, { useEffect, useState } from 'react'
import styles from './JoinForm.module.css'
import { DaumAddressType } from '@/types/DaumAddressType';
import Postcode from '@/components/widget/Postcode';
import { AuthFormDataType, JoinFormDataType } from '@/types/formDataType';
import AdConsent from '../agree/AdConsent';
import { useRouter } from 'next/navigation';

function JoinForm() {
    const router = useRouter();
    // 회원가입 
    const [signup, setSignup] = useState<JoinFormDataType>({
        loginId: '',
        password: '',
        name: '',
        phone: '',
        email: '',
        address: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        console.log(name, value);
        
        setSignup({
            ...signup,
            [name]: value,
            
        })
    }


    const handSignupFetch = async () => {
        const response = await fetch(`${process.env.BASE_API_URL}/api/v1/auth/signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                loginId: signup.loginId,
                password: signup.password,
                name: signup.name,
                phone: signup.phone,
                email: signup.email,
                address: signup.address
            })
        })
        .then((res) => {
            if(res.status === 200) {
                sessionStorage.setItem('signup', JSON.stringify(signup));
                router.push('/member/join/success');
            } else {
                alert("회원가입 실패했습니다.");
            }
        }) 

        // const json = await response.json();

        // if(json.code == 200) {
        //     sessionStorage.setItem('signup', JSON.stringify(signup));
        //     router.push('/member/join/success');
        // } else {
        //     alert(json.message);
        // }
    }

    // 아이디 중복체크
    const handleIdCheckFetch = async () => {
        const response = await fetch(`${process.env.BASE_API_URL}/api/v1/validateLoginId/${signup.loginId}`, {
            method: 'GET',
        })

        const json = await response.json();

        if(json.code === 200) {
            alert(json.result);
        } else {
            alert(json.message);
        }
    }

    // 휴대폰, 이름
    const [authData, setAuthData] = useState<AuthFormDataType>({
        loginId:'',
        name: '',
        phone: ''
    });
    
    // 우편 주소
    const [isView, setIsView] = useState<boolean>(false);
    const [address, setAddress] = useState<DaumAddressType>();

    const handleOpenModal = () => {
        setIsView(!isView);

    }

    useEffect(() => {
        if(address){
            setSignup({
                ...signup,
                address: address?.address
            })
        }
    }, [address])

    // 로컬에 있는 이름, 전화번호 
    useEffect(() => {
        if(typeof window !== 'undefined') {
            const jsonAuthData = localStorage.getItem('authData') || '';
            const authData = JSON.parse(jsonAuthData);
            setAuthData(authData);

            setSignup({
                ...signup,
                name: authData.name,
                phone: authData.phone
            })
        }    
    },[])

    return (
    <>
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
                            title='회원 가입을 위한 아이디 입력'
                            className='box-border block w-full border border-solid border-[#e8e8e8] text-sm rounded-lg h-12 px-4'
                            placeholder='영문, 숫자 6~20자리 입력해주세요'
                            onChange={handleChange}
                        />
                    </div>    
                    <div className={`${styles.btn_box} ml-[5px]`}>
                        <button 
                            className='p-3 text-[#000] border border-solid border-[#bcbcbc] font-normal rounded-lg h-12 block w-full text-center text-sm leading-6 box-border'
                            onClick={handleIdCheckFetch}
                        >
                            중복확인
                        </button>
                    </div>    
                </div>
                <p className='error_txt'></p>  
            </div>
            <div className={`${styles.form_box} box-border pb-4`}>
                <p className={`${styles.tit} pb-2 text-[13px] leading-[21px]`}>
                    비밀번호
                    <span className='hidden'>필수항목</span>
                </p>
                <div className='flex'>
                    <div className='w-auto flex-1 box-border relative inline-block align-top'>
                        <input 
                            type="password"
                            id="pwId"
                            name='password'
                            title='회원 가입을 위한 비밀번호 입력'
                            className='box-border block w-full border border-solid border-[#e8e8e8] text-sm rounded-lg h-12 px-4'
                            placeholder='영문 대/소문자, 숫자, 특수문자 중 3가지 이상을 조합하여 8-20자리로 입력해 주세요.'
                            onChange={handleChange}
                        />
                    </div>    
                </div>
                <p className='error_txt'></p>  
            </div>
            <div className={`${styles.form_box} box-border pb-4`}>
                <p className={`${styles.tit} pb-2 text-[13px] leading-[21px]`}>
                    비밀번호 확인
                    <span className='hidden'>필수항목</span>
                </p>
                <div className='flex'>
                    <div className='w-auto flex-1 box-border relative inline-block align-top'>
                        <input 
                            type="password"
                            id="pwChkId"
                            title='회원 가입을 위한 비밀번호 확인 입력'
                            className='box-border block w-full border border-solid border-[#e8e8e8] text-sm rounded-lg h-12 px-4'
                            placeholder='입력하신 비밀번호를 다시 한번 입력해주세요.'
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
                            title='회원 가입을 위한 이름 입력'
                            className={`${styles.readonly} first-line:box-border block w-full border border-solid border-[#e8e8e8] text-sm rounded-lg h-12 px-4`}
                            value={authData.name}
                            readOnly
                            onChange={handleChange}
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
                            title='회원 가입을 위한 휴대폰번호 입력'
                            className={`${styles.readonly} box-border block w-full border border-solid border-[#e8e8e8] text-sm rounded-lg h-12 px-4`}
                            value={authData.phone}
                            readOnly
                            onChange={handleChange}
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
                            readOnly
                            placeholder='상세주소'
                        />
                    </div>
                </div>
            </div>
        <div className='mt-7 w-full'>
            <AdConsent/>
        </div>
        <div className='mt-7 w-full'> 
            <p className='text-[11px] leading-5 text-[#505050] break-keep'>
                당사, 관계사, 신세계포인트 제휴사가 제공하는 상품 및 서비스 홍보, 
                소식지 제공, 이벤트 정보 제공(할인 쿠폰, 포인트 추가 적립, 상품 할인 포함),
                제휴행사를 안내해 드립니다. 수신동의 변경은 신세계포인트 
                고객센터 및 홈페이지(www.shinsegaepoint.com)에서 가능합니다.
                <br/>
                ※ 서비스 주요 정책 및 공지사항 안내 등은 수신동의 여부와 관계없이 발송됩니다. 
            </p>
        </div>
        <div className='w-full mt-7'>
            <div className='btn_box'>
                {/* <Link href='/member/join/success' className={styles.btn_primary}>확인</Link> */}
                <button className='btn_primary' onClick={handSignupFetch}>확인</button>
            </div>
        </div>
    </>     
    )
}

export default JoinForm