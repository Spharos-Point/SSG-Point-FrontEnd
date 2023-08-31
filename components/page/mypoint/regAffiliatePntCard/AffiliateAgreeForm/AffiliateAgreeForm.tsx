import React from 'react'

export default function AffiliateAgreeForm() {
    return (
        <>
            <div className=' bg-[#fbfbfb] p-[17px] border-b-[1px] border-b-[#e8e8e8] mb-[40px]'>
                <div className='flex relative pb-[8px]'>
                    <p className='text-[14px]  tracking-tight leading-[24px] pr-[3px] '>[필수] 제휴 멤버십 포인트 개인정보 수집 및 이용 동의
                    </p>
                    <button className='w-[24px] h-[24px]
                after:block after:mt-[2px] after:ml-[14px] after:w-[10px] after:h-[5.8px]
                after:bg-[url(../public/btn_arrow_under.png)] after:bg-contain after:rotate-[-90deg] after:opacity-40'>
                        <span className='hidden'>제휴사 멤버십 혜택 내용보기</span>
                    </button>
                </div>
                <div className='flex inline-block align-top leading-[18px]'>
                    <input type='checkbox' className='' />
                    <span className='text-[14px] pl-[10px]'>  동의합니다.</span>
                </div>
            </div>
            <div className='px-[20px] pb-[40px]'>
                <div className='border-box pb-[16px]'>
                    <p className="text-[13px] leading-[21px] pv-[8px] after:content-[*] after:ml-0.5 after:text-red-500">제휴 멤버십 선택</p>
                </div>
            </div>
        </>

    )
}
