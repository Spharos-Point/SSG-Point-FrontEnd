import Link from 'next/link';
import React from 'react'

function FindBox(props: {title: string}) {

    const {title} = props;

  return (
    <div className='relative -mt-5 mx-5 mb-20 box-border py-5 px-6 border border-solid border-[#e8e8e8] rounded-lg shadow-md'>
        <p className='text-[13px] leading-[21px] text-[#767676] break-keep -my-[5px] font-bold'>
            <strong className='text-sm leading-6 text-[#000]'>
                {title}가 생각나지 않으세요?
            </strong>
            <br/>
            본인인증 후 {title}를 변경하실 수 있습니다.
        </p>
        <Link 
            href='' 
            className="mt-4 inline-flex items-center text-[13px] leading-5 after:content:[''] after:inline-block after:ml-1 after:h-[6px] after:w-[10px] after:bg-findBox after:-rotate-90 after:bg-cover"
        >
            {title} 찾기
        </Link>
    </div>
  )
}

export default FindBox