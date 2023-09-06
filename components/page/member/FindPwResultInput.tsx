import Link from 'next/link'
import React from 'react'

function FindPwResultInput() {
  return (
    <div className='pt-0 px-5 pb-10'>
        <div>
            <div className='pb-4 box-border'>
                <p className='pb-2 text-[13px] leading-[21px]'>비밀번호</p>
                <div className='box-border relative inline-block w-full align-top'>
                    <input 
                        type="password"
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
                        className='box-border block w-full border border-solid border-[#e8e8e8] text-sm rounded-lg h-12 py-0 px-4'
                        placeholder='입력하신 비밀번호를 다시 한번 입력해주세요.'
                    />
                </div>
            </div>
        </div>
        <div className='btn_box mt-5'>
            <Link href='/login' className='btn_primary'>확인</Link>
        </div>
    </div>
  )
}

export default FindPwResultInput