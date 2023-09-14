'use client'

import React, { useState } from 'react'
import styles from './AuthPhoneForm.module.css'
import { certAgreements } from '@/data/agreeData';
import { Agreement } from '@/types/agreeDataType';
import { usePathname, useRouter } from 'next/navigation';

import { AuthFormDataType } from '@/types/formDataType';



function JoinAuthPhoneForm() {

    // 성별
    const [selectedGender, setSelectedGender] = useState('M');
  
    const handleGenderChange = (value:string) => {
      setSelectedGender(value);
    };

    // 내국인, 외국인
    const [selectedClassification, setSelectedClassification] = useState('L');

    const handleClassificationChange = (value:string) => {
      setSelectedClassification(value)
    }

    // 모두 동의
    const [agreeAll, setAgreeAll] = useState(false);
    const handleClick = () => {
      setAgreeAll(!agreeAll);
    };


    // 데이터 전달
    const [authData, setAuthData] = useState<AuthFormDataType>({
      loginId: '',
      name: '',
      phone: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = e.target;
      // console.log(name, value);

      setAuthData({
        ...authData,
        [name]: value,
        
      })
    }

    const pathname = usePathname();
    const router = useRouter();
    const handleButtonFetch = async () => {
      if(pathname === '/member/join/cert') {

          localStorage.setItem('authData', JSON.stringify(authData));

          router.push('/member/join/agree');

      } else if(pathname === '/member/findIdPw') {
        const response = await fetch(`https://newbiefive.store/api/v1/search/NameAndPhoneNum?userName=${authData.name}&phoneNumber=${authData.phone}`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          }
        });

        const json = await response.json();

        if(json.code === 200) {
          console.log(json)

          sessionStorage.setItem('loginId', JSON.stringify(json.result));
          router.push('/member/findIdResult');
        } else {
          alert(json.message);
        }
    } else if(pathname === '/member/findPw'){
      const response = await fetch(`https://newbiefive.store/api/v1/search/IdAndNameAndPhoneNum?loginId=${authData.loginId}&userName=${authData.name}&phoneNumber=${authData.phone}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      console.log(json)

      if(json.code === 200) {
        sessionStorage.setItem('loginId', JSON.stringify(authData.loginId));
        router.push('/member/findPwResult');
      } else {
        alert(json.message);
      }
    
    }
  }

    
  return (
    <>
      <div className='auth_tab_content'>
        <div className='box-border'>
          <h3 className='hidden'>휴대폰인증</h3>
          <div className='py-10 px-5'>
            {
              pathname === '/member/findPw'
              ?
              <div className='box-border pb-4'>
                <p className='pb-2 text-xs leading-5'>아이디를 입력해 주세요.</p>
                <div className='input_box box-border relative inline-block w-full align-top'>
                  <input 
                      className='h-12 py-0 px-4 bg-white box-border block w-full border-2 border-solid border-gray-200 text-sm rounded-lg'
                      type="text" 
                      placeholder='아이디 입력'
                      id="loginId"
                      name='loginId'
                      value={authData.loginId}
                      onChange={handleChange}
                  />
                </div>
                <p className='error_txt'></p>
              </div>
              :
              <div></div>
            }
            <div className='box-border pb-4'>
              <p className='pb-2 text-xs leading-5'>이름을 입력해 주세요.</p>
              <div className='input_box box-border relative inline-block w-full align-top'>
                <input 
                    className='h-12 py-0 px-4 bg-white box-border block w-full border-2 border-solid border-gray-200 text-sm rounded-lg'
                    type="text" 
                    placeholder='이름 입력'
                    id="name"
                    name='name'
                    value={authData.name}
                    onChange={handleChange}
                />
              </div>
              <p className='error_txt'></p>
            </div>
            <div className='box-border pb-4'>
              <p className='pb-2 text-xs leading-5'>성별을 선택해주세요.</p>
              <div className='radio_group_box '>
                <div className={`${styles.radio_box} inline-block align-top relative h-12`}>
                  <input type="radio" id='maleRadio' value="M" onChange={()=>handleGenderChange("M")} checked={selectedGender === "M"}/>
                  <label htmlFor='maleRadio'>남자</label>
                </div>
                <div className={`${styles.radio_box} inline-block align-top relative h-12`}>
                  <input type="radio" id='femaleRadio' value="F" onChange={()=>handleGenderChange("F")} checked={selectedGender === "F"}/>
                  <label htmlFor='femaleRadio'>여자</label>
                </div>
              </div>
            </div>
            <div className='box-border pb-4'>
            <p className='pb-2 text-xs leading-5'>외국인 이신가요?</p>
              <div className='radio_group_box '>
                <div className={`${styles.radio_box} inline-block align-top relative h-12`}>
                  <input type="radio" id='localRadio' value="L" onChange={()=>handleClassificationChange("L")} checked={selectedClassification === "L"}/>
                  <label htmlFor='localRadio'>내국인</label>
                </div>
                <div className={`${styles.radio_box} inline-block align-top relative h-12`}>
                  <input type="radio" id='foreignerRadio' value="F" onChange={()=>handleClassificationChange("F")} checked={selectedClassification === "F"}/>
                  <label htmlFor='foreignerRadio'>외국인</label>
                </div>
              </div>
            </div>
            <div className='box-border pb-4'>
              <p className='pb-2 text-xs leading-5'>
                생년월일을 입력해주세요.
                <em className=''>(예: 19990101)</em>
              </p>
              <div className='input_box box-border relative inline-block w-full align-top'>
                <input 
                    className='h-12 py-0 px-4 bg-white box-border block w-full border-2 border-solid border-gray-200 text-sm rounded-lg'
                    type="text" 
                    placeholder='법정생년월일 8자리'
                    id="birth"
                />
              </div>
              <p className='error_txt'></p>
            </div>
            <div className='box-border pb-4'>
            <p className='pb-2 text-xs leading-5'>
                본인명의의 휴대전화번호를 입력해주세요.
              </p>
              <div className='relative'>
                <div className={`${styles.select_box} relative inline-block align-top bg-white rounded-lg w-full`}>
                  <select name="telecom" id="telecom" className='appearance-none block w-full h-12 py-0 pr-8 pl-4 box-border border-2 border-solid border-gray-200 rounded-lg text-sm relative'>
                    <option value="01">SKT</option>
                    <option value="02">KT</option>
                    <option value="03">LG U+</option>
                    <option value="04">SKT 알뜰폰</option>
                    <option value="05">KT 알뜰폰</option>
                    <option value="06">LG U+ 알뜰폰</option>
                  </select>
                </div>
                <input 
                    className='h-12 mt-2 py-0 px-4 bg-white box-border block w-full border-2 border-solid border-gray-200 text-sm rounded-lg'
                    type="text" 
                    placeholder='-없이 휴대폰 번호 입력'
                    id="phone"
                    name='phone'
                    value={authData.phone}
                    onChange={handleChange}
                />
              </div>
              <p className='error_txt'></p>
            </div>
          </div>
        </div>
        <div className='terms_agree_box bg-none py-0 px-5'>
          <div>
            <h3 className='pb-4 text-lg leading-7 font-bold'>휴대전화 인증 약관</h3>
            <div className='agree-all_chk pb-4 mb-4 relative border-b-2 border-solid border-gray-200'>
              <div className={`${styles.chk_box} relative inline-block align-top`}>
                <input
                  className='absolute left-0 top-0 w-5 h-5 rounded-full border border-black appearance-none cursor-pointer align-middle'
                  id='agreeAllChk'
                  type='checkbox'
                  onClick={handleClick}
                />
                <label htmlFor='agreeAllChk' className='block min-h-5 pt-px pl-7 text-sm leading-4 break-keep font-bold'>모든 약관에 동의합니다.</label>
              </div>
            </div>
            <ul className='agree_list'>
              {
                certAgreements.map((items:Agreement) => (
                <li key={items.id} className='relative pr-5 mb-4'>
                  <div className={styles.chk_box}>
                    <input
                      className='absolute left-0 top-0 w-5 h-5 rounded-full border border-black appearance-none cursor-pointer align-middle'
                      id={items.id}
                      type='checkbox'
                      defaultChecked={agreeAll}
                    />
                    <label htmlFor={items.id} className='block min-h-5 pt-px pl-7 text-xs leading-4 break-keep font-bold'>
                      {items.label}
                    </label>
                  </div>
                </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className='tab_box1 pt-10 py-5'>
          <div className={styles.btn_box}>
            <button onClick={handleButtonFetch} className={`${styles.btn_primary}`}>인증번호 요청</button>
            {/* <Link href='/member/join/agree' className={`${styles.btn_primary}`} >인증번호 요청</Link> */}
          </div>
          <div className='form_box'>
            <p></p>
            <div className='input_btn_box'>
              <div className='input_box'></div>
              <div className='btn_box'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JoinAuthPhoneForm