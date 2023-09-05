'use client'
import React, { useEffect, useState } from 'react'
import styles from './JoinForm.module.css'
import { DaumAddressType } from '@/types/DaumAddressType';
import Postcode from '@/components/widget/Postcode';
import { AuthFormDataType, JoinFormDataType } from '@/types/formDataType';

function JoinForm() {
    // 회원가입 
    const [singUp, setSignUp] = useState<JoinFormDataType>({
        loginId: '',
        password: '',
        name: '',
        phone: '',
        email: '',
        address: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        // console.log(name, value);
        
        setSignUp({
            ...singUp,
            [name]: value,
            
        })
    }

    // 휴대폰, 이름
    const [authData, setAuthData] = useState<AuthFormDataType>({
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
            // setIsView(false);
            console.log(address)
        }
    }, [address])

    // 로컬에 있는 이름, 전화번호 
    useEffect(() => {
        if(typeof window !== 'undefined') {
            const jsonAuthData = localStorage.getItem('authData') || '';
            const authData = JSON.parse(jsonAuthData);
            setAuthData(authData);
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
                        id="id"
                        title='회원 가입을 위한 아이디 입력'
                        className='box-border block w-full border border-solid border-[#e8e8e8] text-sm rounded-lg h-12 px-4'
                        placeholder='영문, 숫자 6~20자리 입력해주세요'
                        onChange={handleChange}
                    />
                </div>    
                <div className={`${styles.btn_box} ml-[5px]`}>
                    <button className='p-3 text-[#000] border border-solid border-[#bcbcbc] font-normal rounded-lg h-12 block w-full text-center text-sm leading-6 box-border'>중복확인</button>
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
                        type="text"
                        id="pwId"
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
                        type="text"
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
                            value={address?.zonecode}
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
                        className='box-border block w-full border border-solid border-[#e8e8e8] text-sm rounded-lg h-12 px-4'
                        value={address?.address}
                        readOnly
                        onChange={handleChange}
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
    </>     
    )
}

export default JoinForm