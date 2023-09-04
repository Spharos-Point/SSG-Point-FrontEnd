'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import styles from './LoginForm.module.css'
import Link from 'next/link';
import { LoginFormDataType } from '@/types/formDataType';
import { useSearchParams } from 'next/navigation';
import { signIn} from 'next-auth/react';

function LongForm() {

  // 로그인 세션
  const query = useSearchParams();
  const callBackUrl = query.get('callbackUrl');

  // 비밀번호 보기 구현
  const [imageSrc, setImageSrc] = useState("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAbCAYAAAD77kbeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkUzRUE3NjVCMjZFMjExRUVCRDEyQ0I0RTRBMzE4MjFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkUzRUE3NjVDMjZFMjExRUVCRDEyQ0I0RTRBMzE4MjFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTNFQTc2NTkyNkUyMTFFRUJEMTJDQjRFNEEzMTgyMUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTNFQTc2NUEyNkUyMTFFRUJEMTJDQjRFNEEzMTgyMUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7mG1RoAAAD90lEQVR42qxXPUxTURRuHy/A+BYnl5aki4tlcHKwDAYSIdIoDi6UQWPiQBsVCdFQojH4l5ZVBuiigxpKUIMJhJIgC4N16SLDk8RA4iAbP4Hid/Qecnh99/ZBPMnLPe+9e9/9zj3f+Xnh9nRn6Dhy91J/IhwOx3GdOTg4OIfRwRihd9A3obtQ6Vpsbm4uPXo3Wpbr73WmuzH0NzU19T1+/9T12yMcBNTg5TvO/v5+PzZNY1PnOEZgjYs1YwBR3N3dvQB9kp7HYrHC2tpa1g+YEVQdMGU8X8Hzn7QxPaATg34aYwy3Cd13W1paQtFolNTPHZmuDu972+SmarU6ATWCTfhxCfqIbdvl0emXmwFOl4D14ur2AUTyJrD74Pc0hpx4VMTxZ3QcMMlAV6aXXSYBwXXFm7nbyUCgAGgYQ5aJi9NKvvg4VtKdpmVZ17HpKdw6mP8d+qfnH/JFE6BKpVJdX1+3aB/MHTGC8gByGxsb2/xO58GV+5GdnZ0JHW+Y3HzaEtDW1lZmeXmZXBpX02uAWaw8vDoYDwoIUbTAgOg0yb3EN0l4P0CQVHLoWr6hoaGNAoVBKbocBaUsn6oHiIQAcV6CZOC+KCxN4mp7NpOLKoB+pE4h0gqkUJAQMDYCMkwYjoDCRkNio6wOkOLIISAAycsopPccaTpALLSOjIdK6x1Fh3+gCCE2uqFOaRzWFnSRhHkpTg0EKEiUEam9gFiU8cynhMr2IYtOSbjtSZ0IZ2JPBwVEUSZd4xVlXFlh+MtDCx/rUafgBs1DWPw7QB4qqLAP8r0VDhBKurSI3ZAwWaSE+XPeBIg4tLq6usA3e3t72uyv9rzI9CGuWYiCMd5Mkk0jZWVRD4WxDhBxSPDPWJJkkDF9LLVAki1tIDrPc3R5iACpJMx5LF+nBB0GGdPHEmTjUpKj8uH3EVVuSro8NDc39wMbvZJJWBfNym15nod8N1CT0anp4mSGcUpl+BrL+AS8UTY/Pz+JdQvCclfloZCuKlA7RBWB5kkXWzJnAFiSk9n29vZX6coAxTUkyk4Wlrf6RTMZK6sCxpoOtKZLoEVUckSLOw69ouMQuYzaY3XvInBKOmLLgq++nfJzr28/JY43oukYfUuHqWHEyU3IXt7UEtm69I8k1orOccqPQ9Sg4Vo0dZ3ITXHqtXDbQ9yR3Ss41GdK1Np2GJZc1pEaHKIa1Q2e0d9LWSRVIm4ExlCvHhJAOMeNcANoElsXHeCVbwu7sbFB/GGSOt5GTwJRpH8LA1/rXBUYlCoLZQCKSw6hpy4I0ATurPh72YT+S839gkj+5v3nC/xbZvrFms3NzGJoPw6p/4fYppdLS0u36A/4pBafVP4IMADRA7DQ+IddjAAAAABJRU5ErkJggg==");
  const [isClicked, setIsClicked] = useState(false);  // 클릭 여부
  const [pwType, setPwType] = useState<Boolean>(true);  // 클릭시 비밀번호 보이기

  const handleClick = () => {
    if(isClicked) {
      setImageSrc("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAbCAYAAAD77kbeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkUzRUE3NjVCMjZFMjExRUVCRDEyQ0I0RTRBMzE4MjFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkUzRUE3NjVDMjZFMjExRUVCRDEyQ0I0RTRBMzE4MjFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTNFQTc2NTkyNkUyMTFFRUJEMTJDQjRFNEEzMTgyMUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTNFQTc2NUEyNkUyMTFFRUJEMTJDQjRFNEEzMTgyMUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7mG1RoAAAD90lEQVR42qxXPUxTURRuHy/A+BYnl5aki4tlcHKwDAYSIdIoDi6UQWPiQBsVCdFQojH4l5ZVBuiigxpKUIMJhJIgC4N16SLDk8RA4iAbP4Hid/Qecnh99/ZBPMnLPe+9e9/9zj3f+Xnh9nRn6Dhy91J/IhwOx3GdOTg4OIfRwRihd9A3obtQ6Vpsbm4uPXo3Wpbr73WmuzH0NzU19T1+/9T12yMcBNTg5TvO/v5+PzZNY1PnOEZgjYs1YwBR3N3dvQB9kp7HYrHC2tpa1g+YEVQdMGU8X8Hzn7QxPaATg34aYwy3Cd13W1paQtFolNTPHZmuDu972+SmarU6ATWCTfhxCfqIbdvl0emXmwFOl4D14ur2AUTyJrD74Pc0hpx4VMTxZ3QcMMlAV6aXXSYBwXXFm7nbyUCgAGgYQ5aJi9NKvvg4VtKdpmVZ17HpKdw6mP8d+qfnH/JFE6BKpVJdX1+3aB/MHTGC8gByGxsb2/xO58GV+5GdnZ0JHW+Y3HzaEtDW1lZmeXmZXBpX02uAWaw8vDoYDwoIUbTAgOg0yb3EN0l4P0CQVHLoWr6hoaGNAoVBKbocBaUsn6oHiIQAcV6CZOC+KCxN4mp7NpOLKoB+pE4h0gqkUJAQMDYCMkwYjoDCRkNio6wOkOLIISAAycsopPccaTpALLSOjIdK6x1Fh3+gCCE2uqFOaRzWFnSRhHkpTg0EKEiUEam9gFiU8cynhMr2IYtOSbjtSZ0IZ2JPBwVEUSZd4xVlXFlh+MtDCx/rUafgBs1DWPw7QB4qqLAP8r0VDhBKurSI3ZAwWaSE+XPeBIg4tLq6usA3e3t72uyv9rzI9CGuWYiCMd5Mkk0jZWVRD4WxDhBxSPDPWJJkkDF9LLVAki1tIDrPc3R5iACpJMx5LF+nBB0GGdPHEmTjUpKj8uH3EVVuSro8NDc39wMbvZJJWBfNym15nod8N1CT0anp4mSGcUpl+BrL+AS8UTY/Pz+JdQvCclfloZCuKlA7RBWB5kkXWzJnAFiSk9n29vZX6coAxTUkyk4Wlrf6RTMZK6sCxpoOtKZLoEVUckSLOw69ouMQuYzaY3XvInBKOmLLgq++nfJzr28/JY43oukYfUuHqWHEyU3IXt7UEtm69I8k1orOccqPQ9Sg4Vo0dZ3ITXHqtXDbQ9yR3Ss41GdK1Np2GJZc1pEaHKIa1Q2e0d9LWSRVIm4ExlCvHhJAOMeNcANoElsXHeCVbwu7sbFB/GGSOt5GTwJRpH8LA1/rXBUYlCoLZQCKSw6hpy4I0ATurPh72YT+S839gkj+5v3nC/xbZvrFms3NzGJoPw6p/4fYppdLS0u36A/4pBafVP4IMADRA7DQ+IddjAAAAABJRU5ErkJggg==");
      setIsClicked(false);
      setPwType(true);
    } else {
      setImageSrc("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAbCAYAAAD77kbeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRDMTlFMjg1MjZFMjExRUVBRDREQ0I4QUNFNkVEQzM1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRDMTlFMjg2MjZFMjExRUVBRDREQ0I4QUNFNkVEQzM1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REMxOUUyODMyNkUyMTFFRUFENERDQjhBQ0U2RURDMzUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REMxOUUyODQyNkUyMTFFRUFENERDQjhBQ0U2RURDMzUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4KFrObAAADVUlEQVR42sxXu25TQRD1dfwBbiigcprUpkAI05AKQYxCSpIiFQ0g2REPobiIKUCIhxJLdBRAESgoAiJAmTQEoRROFaRUrkCIxh/gB+c4M9b4evc+gCIrWbu2Z2fPzJ55bHC+Ws6kGbdmKueCICjic6rf7xcwn+DM/7BuY72PuYV5F5/tJx8be5mUI0gC6u7szXy3263gsCoOyqc64BBgY2Ji4t3D909b/wwqBsyOHHiA+YA/YD2F9ZR4ruRQWQe4V3HgvKB4Tdls9oVejQLB91oul9uD4nacd3u93gUsy9gzbz2HafnRh9U3qUDdLlermFaNotcAWEvqfgfAAgDet+Dotceba/cSgQKgFW5Q4kLZHMi6HeHNy1geE9LvYv3N5wWH953ARkCFALWgYNrlHVoOrq17eJN27xiwrLGimBQQvLelSulNXq8SXwjPg5uic2RQJ8g+Q3kFJXQZBcWDAGIjDhAHARn3L0F2Ete1AGvPYp7EfvKGQZDHeouEdwBrE5gagbFCDCOghIT647IP0J1LS1csIABZC0ch+QSZOfk6SCkuXdxH49UAudJDUESoUcFriApVyN3Q1EBAPjkGhlwpR9UnJ8Yrn0o0egCKXjLXVouJbiXn2wSZYFO9Za8mPMQ45deDAShYf1G88CNxGQiCX3EyMPZnilK0qwFCDpJTeg2lKItkKH9Oxx0Erx937HMmVkyzSp8B1xAFDd1kyeYZ+2LRoiuqfPyLKkk2yJQ+WdkwJFs4Z4QOUs6xrtV9cpKENY8988lJNGuQNZQ+w4wORV9UEQSnfaUFitZttALcc5WVMnLV/N9i7oqoh012HxJkJ9Wjw4yOa1zQZIZ5w5WNxcXXNVp4OBMkDOrzw7UFJHnIB2hLALUlWbfHygxdx+JrsnHTdZXczOzN8mAyso0k7q+L5S1HUS6GqsK1sNxYl8BNLDmmxY1sW7Q91lQB2c8+YtuCL/LzrmTt7KeMewumpX2ZpGtM0rLEtUTezlM6xzoUVULXw/KxiUO++gByb6fTKUqvtRhqpXfI3yjjYh8Onq4xE369aEa2r5twT8+U4vNO6teMBce04Tk04yH9J5s2/tsTywPwjH29mEj8zZYY/3//mzffABQUZo7ayGaO4PgjwABv5GeqLxh2WwAAAABJRU5ErkJggg==");
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
        setLoginData({
        ...loginData,
        [name]: value
    })
    } 
  }

  const handleLocalStorage = (loginId: String) => {
    localStorage.setItem('autoLogin', loginId.toString())
  }

  // 로그인 버튼
  const handleLoginFetch = async () => {


    if(loginData.isAutoId) {
      handleLocalStorage(loginData.loginId)
    } 

    if(loginData.loginId !== '' || loginData.password !== '') {
      console.log(loginData)
      const result = await signIn('credentials', {
        loginId: loginData.loginId,
        password: loginData.password,
        redirect: true,
        callbackUrl: callBackUrl ? callBackUrl : '/'
      })
    } else {
      alert('로그인 아이디는 필수입니다.')
      
    }
    

  }

  useEffect(() => {
    if(typeof window !== 'undefined') {
      const autoLogin = localStorage.getItem('autoLogin') || '';
      if(autoLogin) {
        setLoginData({
          ...loginData,
          loginId: autoLogin,
          isAutoId: true
        })
      }
    }    
  },[])

return (
  <div>
    <div className={styles.input_box}>
      <label htmlFor="loginId">
      </label>
      <input 
        type="text" 
        name="loginId" 
        id="loginId" 
        placeholder='아이디'
        // defaultValue={loginData.loginId}
        onChange={handleOnChange}
      />
    </div>
    <div className={styles.input_box}>
      <label htmlFor='password'>
      </label>
      <input 
        type={pwType ? 'password' : 'text'} 
        name="password" 
        id="password"
        placeholder='비밀번호(영문, 숫자, 특수문자 8 ~ 20자)'
        onChange={handleOnChange}
      />
      <Image className={styles.img} src={imageSrc} onClick={handleClick} width={16} height={14} alt='비밀번호 보기'/>
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
        <Link href="/" className={styles.btn}>비밀번호 찾기</Link>
      </li>
      <li>
        <Link href="/member/join"  className={styles.btn}>회원가입</Link>
      </li>
    </ul>
  </div>
)
}

export default LongForm