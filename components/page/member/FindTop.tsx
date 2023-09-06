import React from 'react'

function FindTop(props : {title: string}) {

  const {title} = props;

  return (
    <div className='py-10 px-5'>
        <p className='text-2xl leading-[34px] font-normal break-keep'>
            <strong className='font-bold'>{title}</strong>
            가
            <br/>
            생각나지 않으세요?
        </p>
        <p className='text-sm break-keep leading-[24px] text-[#767676] pt-2'>
            본인인증 후 {title}를 확인하실 수 있습니다.
        </p>
    </div>
  )
}

export default FindTop