'use client'

import React from 'react'

function JoinSuccess() {

    const jsonSignup = sessionStorage.getItem('signup') || '';
    const signup = JSON.parse(jsonSignup || '');
    // const name = signup.name.

    return (
        <>
            <p className='text-2xl leading-9 font-bold'>가입완료</p>
            <p className='text-xl leading-[30px] font-medium break-keep mt-4'>
                <strong 
                    className={`font-extrabold relative align-top z-[1] pr-1 pl-[1px] after:content[''] after:inline-block after:absolute after:w-full after:h-[15px] after:bg-[#ffdfb5] after:-z-[1px] after:bottom-0 after:left-0`}
                >
                    {signup.name}
                </strong>
                &nbsp;님,&nbsp;
                <span className='font-semibold'>{signup.loginId}&nbsp;ID</span>
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