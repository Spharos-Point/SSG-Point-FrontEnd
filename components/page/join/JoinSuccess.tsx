'use client'

import React, { useEffect, useState } from 'react'

function JoinSuccess() {

    const [signupData, setSignupData] = useState({
        name: '',
        loginId: ''
    });
    
    const [name, setName] = useState<string>('');
    
    useEffect(() => {
        if(typeof window !== 'undefined') {
            const jsonSignup = sessionStorage.getItem('signup') || '';
            const signup = JSON.parse(jsonSignup);
            
            setSignupData(signup);

            var regex = /^(\D{1})\D{1}(\D{1})/;
            const match = regex.exec(signup.name);

            if(match) {
            setName(match[1] + "*" + match[2])
            } 
        }    
        
    }, [])
    return (
        <>
            <p className='text-2xl leading-9 font-bold'>가입완료</p>
            <p className='text-xl leading-[30px] font-medium break-keep mt-4'>
                <strong 
                    className={`font-extrabold relative align-top z-[1] pr-1 pl-[1px] after:content[''] after:inline-block after:absolute after:w-full after:h-[13px] after:bg-[#ffdfb5] after:-z-10 after:bottom-0 after:left-0`}
                >
                    {name}
                </strong>
                &nbsp;님,&nbsp;
                <span className='font-semibold'>{signupData.loginId}&nbsp;ID</span>
                로
                <br/>
                신세계포인트&nbsp;
                <strong className='font-bold'>통합 회원 가입</strong>
                이
                <br/>
                완료되었습니다.
            </p>
        </>
    )
}

export default JoinSuccess