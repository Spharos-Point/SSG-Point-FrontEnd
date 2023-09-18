'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import styles from './LoginForm.module.css'
import Link from 'next/link';
import { LoginFormDataType } from '@/types/formDataType';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Swal from 'sweetalert2';

function LongForm() {

  // 로그인 세션
  const query = useSearchParams();
  const callBackUrl = query.get('callbackUrl');
  const router = useRouter();

  // 비밀번호 보기 구현
  const [imageSrc, setImageSrc] = useState("https://storage.googleapis.com/team3_spharos_bucket/img/logo/passwordOff.png");
  const [isClicked, setIsClicked] = useState(false);  // 클릭 여부
  const [pwType, setPwType] = useState<Boolean>(true);  // 클릭시 비밀번호 보이기

  const handleClick = () => {
    if(isClicked) {
      setImageSrc("https://storage.googleapis.com/team3_spharos_bucket/img/logo/passwordOff.png");
      setIsClicked(false);
      setPwType(true);
    } else {
      setImageSrc("https://storage.googleapis.com/team3_spharos_bucket/img/logo/passwordOn.png");
      setIsClicked(true);
      setPwType(false);

    }
  };

  // 자동로그인, 아이디 저장
  const [loginData, setLoginData] = useState<LoginFormDataType>({
    loginId: '',
    password:'',
    isAutoId:false,
    isAutoLogin:false
  });

  const [logInError, setLogInError] = useState<any>({
    loginId: '',
    password:'',
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    if(name === 'isAutoId' || name === 'isAutoLogin') {
        setLoginData({
        ...loginData,
        [name]: e.target.checked
      });

      if(name === 'isAutoId' && !e.target.checked) {
        localStorage.removeItem('autoLogin');
      }
    } else {
        if(name === 'loginId') {
          setLogInError({
            ...logInError,
            loginId: ''
          })
        } else if(name === 'password') {
          setLogInError({
            ...logInError,
            password: ''
          })
        }
        setLoginData({
        ...loginData,
        [name]: value
    })
    } 
  }

  // 로그인 버튼
  const handleLoginFetch = async () => {

   if(loginData.loginId === '') {
      setLogInError({
        ...logInError,
        loginId: '아이디를 입력해주세요.'
      })
      return;
    }

    if(loginData.password === '') {
      setLogInError({
        ...logInError,
        password: '비밀번호를 입력해주세요.'
      })
      return;
    }

    const result = await signIn('credentials', {
      loginId: loginData.loginId,
      password: loginData.password,
      redirect: false,
      callbackUrl: callBackUrl ? callBackUrl : '/'
    });
    if(result?.error !== null) {
      Swal.fire({
        text: `아이디 비빌번호를 확인 후 다시 시도해주세요.`,
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        customClass: {
          container: "my-swal",
        },
      });
    } else {
      Swal.fire({
        text: `신세계포인트에 오신 것을 환영합니다.`,
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        customClass: {
          container: "my-swal",
        },
      });
      router.push(callBackUrl ? callBackUrl : '/');
    }
  }

return (
  <div>
    <div className={styles.input_box}>
      <label htmlFor="loginId">
      </label>
      <input 
        type="text" 
        name="loginId" 
        id="loginId" 
        defaultValue=''
        placeholder='아이디'
        onChange={handleOnChange}
      />
      { logInError.loginId !== '' ? <p className='myErrorToolTip'>{logInError.loginId}</p> : null}
    </div>
    <div className={styles.input_box}>
      <label htmlFor='password'>
      </label>
      <input 
        type={pwType ? 'password' : 'text'} 
        name="password" 
        id="password"
        placeholder='비밀번호(영문, 숫자, 특수문자 8 ~ 20자)'
        defaultValue=''
        onChange={handleOnChange}
      />
      <Image className={styles.img} src={imageSrc} onClick={handleClick} width={16} height={14} alt='비밀번호 보기'/>
      { logInError.password !== '' ? <p className='myErrorToolTip'>{logInError.password}</p> : null}
    </div>
    <div className={styles.login_checkBox}>
      <div className={styles.check_box}>
        <input 
          type="checkbox" 
          name="isAutoId" 
          id="isAutoId" 
          onChange={handleOnChange}
          checked={loginData.isAutoId&&true}
        />
        <label htmlFor="isAutoId">아이디 저장</label>
      </div>
      <div className={styles.check_box}>
        <input 
          type="checkbox" 
          name="isAutoLogin" 
          id="isAutoLogin"
          onChange={handleOnChange}
        />
        <label htmlFor="isAutoLogin">자동로그인</label>
      </div>
    </div>
    <div className={styles.btn_box}>
      <button type="submit" className={styles.btn_primary} onClick={handleLoginFetch}>
          로그인
      </button>
    </div>
    <ul className={styles.btn_list_box}>
      <li>
        <Link href="/member/findIdPw" className={styles.btn}>아이디 찾기</Link>
      </li>
      <li>
        <Link href="/member/findPw" className={styles.btn}>비밀번호 찾기</Link>
      </li>
      <li>
        <Link href="/member/join"  className={styles.btn}>회원가입</Link>
      </li>
    </ul>
  </div>
)
}

export default LongForm