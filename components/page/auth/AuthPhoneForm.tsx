'use client'

import React, { useRef, useState } from 'react'
import styles from './AuthPhoneForm.module.css'
import { certAgreements } from '@/data/agreeData';
import { Agreement } from '@/types/agreeDataType';
import { usePathname, useRouter } from 'next/navigation';
import { AuthFormDataType } from '@/types/formDataType';
import Swal from 'sweetalert2';
import Checkbox from '../agree/Checkbox';



function JoinAuthPhoneForm() {

    // 값 입력 안했을 시 포커싱 하기 위한 부분
    const loginIdRef = useRef<HTMLInputElement | null>(null);
    const nameRef = useRef<HTMLInputElement | null>(null);
    const birthRef = useRef<HTMLInputElement | null>(null);
    const phoneRef = useRef<HTMLInputElement | null>(null);

    // 정규 표현식
    // const phoneRedex = /^\d{3}\d{3,4}\d{4}$/

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
    const [agreeDataList, setAgreeDataList] = useState<Agreement[]>(certAgreements as Agreement[]);
    const [isAllChecked, setIsAllChecked] = useState<boolean>(false);

    const handleChecked = (id:number, isCheck:boolean) => {

    const newAgreeList = [...agreeDataList];
      newAgreeList.map((item) => {
          if(item.id === id){
              item.isCheck = isCheck;
          }
      })
      setAgreeDataList(newAgreeList);

    const allChecked = newAgreeList.every((item) => item.isCheck);
      setIsAllChecked(allChecked);
    }

    const handleAllChecked = () => {
      const newAgreeList = [...agreeDataList];
      newAgreeList.map((item) => {
          item.isCheck = !isAllChecked;
      })
      setAgreeDataList(newAgreeList);
      setIsAllChecked(!isAllChecked);
  }

    // 데이터 전달
    const [authData, setAuthData] = useState<AuthFormDataType>({
      loginId: '',
      name: '',
      birth: '',
      phone: '',
    });

    // 값 입력 안할시 에러
    const [joinError, setJoinError] = useState<any>({
      loginId: '',
      name: '',
      birth: '',
      phone: '',
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = e.target;
      if(name === 'loginId') {
        setJoinError({
          ...joinError,
          loginId: ''
        })
      } else if(name === 'name') {
        setJoinError({
          ...joinError,
          name: ''
        })
      } else if(name === 'birth') {
        setJoinError({
          ...joinError,
          birth: ''
        })
      } else if(name === 'phone') {
        setJoinError({
          ...joinError,
          phone: ''
        })
      } 

      setAuthData({
        ...authData,
        [name]: value,
        
      });

    }

    const pathname = usePathname();
    const router = useRouter();
    const handleButtonFetch = async () => {

      if(pathname === '/member/findPw' && authData.loginId === '') {
        setJoinError({
          ...joinError,
          loginId: '아이디를 입력해주세요.'
        })
        if (loginIdRef.current) {
          loginIdRef.current.focus();
        }
        return;
      }
  
      if(authData.name === '') {
        setJoinError({
          ...joinError,
          name: '이름을 입력해주세요.'
        })
        if (nameRef.current) {
          nameRef.current.focus();
        }
        return;
      }

      if(authData.birth === '') {
        setJoinError({
          ...joinError,
          birth: '생년월일을 입력해주세요.'
        })
        if (birthRef.current) {
          birthRef.current.focus();
        }
        return;
      }

      if(authData.phone === '') {
        setJoinError({
          ...joinError,
          phone: '휴대폰 번호를 입력해주세요.'
        })
        if (phoneRef.current) {
          phoneRef.current.focus();
        }
        return;
      }

      if (!isAllChecked) {
        Swal.fire({
        text: '[필수] 휴대전화 인증 서비스 이용약관 약관에 동의해주세요',
        confirmButtonText: "확인",
        customClass: {
        confirmButton: "mySwalConfirmButton",
        },
    })
      return;
    }

      if(pathname === '/member/join/cert') {
        const response = await fetch(`${process.env.BASE_API_URL}/api/v1/search/NameAndPhoneNum?userName=${authData.name}&phoneNumber=${authData.phone}`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          }
        });

        const json = await response.json();
        if(json.result === undefined) {
          // 회원가입 된 아이디가 없을 경우
          localStorage.setItem('authData', JSON.stringify(authData));
          router.push('/member/join/agree');

        } else {
          // 이미 아이디가 존재 할 경우
          sessionStorage.setItem('loginId', JSON.stringify(json.result));  
          router.push('/member/findIdResult');
        }

      } else if(pathname === '/member/findIdPw') {
        const response = await fetch(`${process.env.BASE_API_URL}/api/v1/search/NameAndPhoneNum?userName=${authData.name}&phoneNumber=${authData.phone}`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          }
        });

        const json = await response.json();

        if(json.code === 200) {
          sessionStorage.setItem('loginId', JSON.stringify(json.result));
          router.push('/member/findIdResult');

        } else {
          Swal.fire({
            text: `${json.message}`,
            confirmButtonText: "확인",
            customClass: {
            confirmButton: "mySwalConfirmButton",
            },
        })

        }
    } else if(pathname === '/member/findPw'){
      const response = await fetch(`${process.env.BASE_API_URL}/api/v1/search/IdAndNameAndPhoneNum?loginId=${authData.loginId}&userName=${authData.name}&phoneNumber=${authData.phone}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      if(json.code === 200) {
        sessionStorage.setItem('loginId', JSON.stringify(authData.loginId));
        router.push('/member/findPwResult');
      } else {
        Swal.fire({
          text: `${json.message}`,
          confirmButtonText: "확인",
          customClass: {
          confirmButton: "mySwalConfirmButton",
          },
      })
      }
    
    } else if(pathname === '/myinfo/changePwd') {
      const response = await fetch(`${process.env.BASE_API_URL}/api/v1/search/NameAndPhoneNum?userName=${authData.name}&phoneNumber=${authData.phone}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        }
      });

      const json = await response.json();

      if(json.code === 200) {
        router.push('/member/changePwd');
      } else {
        Swal.fire({
          text: `${json.message}`,
          confirmButtonText: "확인",
          customClass: {
          confirmButton: "mySwalConfirmButton",
          },
        })
      }
    }  else if(pathname === '/mypoint/chgPntPwdCert') {
      const response = await fetch(`${process.env.BASE_API_URL}/api/v1/search/NameAndPhoneNum?userName=${authData.name}&phoneNumber=${authData.phone}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        }
      });

      const json = await response.json();

      if(json.code === 200) {
        router.push('/mypoint/chgPntPwd');
      } else {
        Swal.fire({
          text: `${json.message}`,
          confirmButtonText: "확인",
          customClass: {
            confirmButton: "mySwalConfirmButton",
          },
        })
      }
    } else if(pathname === '/myinfo/cert') {
        const response = await fetch(`${process.env.BASE_API_URL}/api/v1/search/NameAndPhoneNum?userName=${authData.name}&phoneNumber=${authData.phone}`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          }
        });

        const json = await response.json();

        if(json.code === 200) {
          router.push('/myinfo/modify');
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
                      ref={loginIdRef}
                  />
                  { joinError.loginId !== '' ? <p className='myErrorToolTip'>{joinError.loginId}</p> : null}
                </div>
              </div>
              :
              <div></div>
            }
            <div className='box-border pb-4'>
              <p className='pb-2 text-xs leading-5'>이름을 입력해 주세요.</p>
              <div className='input_box box-border relative inline-block w-full align-top'>
                <input 
                    className={`h-12 py-0 px-4 bg-white box-border block w-full border-2 border-solid border-gray-200 text-sm rounded-lg `}
                    type="text" 
                    placeholder='이름 입력'
                    id="name"
                    name='name'
                    value={authData.name}
                    onChange={handleChange}
                    ref={nameRef}
                />
                { joinError.name !== '' ? <p className='myErrorToolTip'>{joinError.name}</p> : null}
              </div>
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
                    type="number" 
                    placeholder='법정생년월일 8자리'
                    id="birth"
                    name='birth'
                    value={authData.birth}
                    onChange={handleChange}
                    ref={birthRef}
                />
                { joinError.birth !== '' ? <p className='myErrorToolTip'>{joinError.birth}</p> : null}
              </div>
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
                    type="number" 
                    placeholder='-없이 휴대폰 번호 입력'
                    id="phone"
                    name='phone'
                    value={authData.phone}
                    onChange={handleChange}
                    ref={phoneRef}
                    />
                    { joinError.phone !== '' ? <p className='myErrorToolTip'>{joinError.phone}</p> : null}
              </div>
            </div>
          </div>
        </div>
        <div className='terms_agree_box bg-none py-0 px-5'>
          <div>
            <h3 className='pb-4 text-lg leading-7 font-bold'>휴대전화 인증 약관</h3>
            <div className='agree-all_chk mb-4 relative border-b-2 border-solid border-gray-200'>
              <div className={`${styles.chk_box} relative inline-block align-top`}>
                <Checkbox
                    checkId={0}
                    label={'모든 약관에 동의합니다'}
                    name={'모든 약관에 동의합니다'}
                    checked={certAgreements.every((item) => item.isCheck)}
                    handler={handleAllChecked}
                    size={1.25}
                />
              </div>
            </div>
            <ul className='agree_list'>
              {
                  certAgreements.map((item:Agreement) => {
                      return (
                          <Checkbox 
                              key={item.id}
                              checkId={item.id}
                              label={item.title}
                              name={item.title}
                              checked={item.isCheck}
                              handler={handleChecked}
                              size={1.25}
                          />
                      )
                  })
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