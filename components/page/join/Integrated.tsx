import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


function Integrated() {
  return (
    <div className='py-10 px-5'>
        <p className='text-xl leading-[30px] pb-6'>
            <strong>***</strong>
            님,
            <br/>
            통합 ID로 더 다양한 서비스를
            <br/>
            이용할 수 있습니다 !
        </p>
        <div>
            <div>
                <div className='mb-2 rounded-lg overflow-hidden'>
                    <div className='bg-[#ffb81c]'>
                        <button className='h-14 w-full table align-middle relative box-border pr-[53px] pl-5 rounded-lg overflow-hidden'>
                            <span className='table-cell h-full align-middle w-full text-left'>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='btn_box mt-10'>
            <Link href='/login' className='btn_primary'>
                신세계포인트 로그인하기
            </Link>
        </div>
    </div>
  )
}

export default Integrated