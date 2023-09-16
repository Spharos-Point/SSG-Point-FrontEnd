import React from 'react'

function LeavePasswordTop() {
    return (
        <div className='py-10 px-5'>
            <p className='text-xl leading-[30px] font-medium break-keep tracking-tighter'>
                개인정보 보호를 위해
                <br/>
                <strong className='font-bold'>
                    <span className='text-[#EA035C]'>비밀번호를 확인</span>
                </strong>
                    하고 있습니다.
            </p>
            <p className='text-[12px] break-keep leading-[24px] text-[#767676] pt-2'>
                현재 사용 중인 비밀번호를 입력해주세요.
            </p>
        </div>
    )
}

export default LeavePasswordTop