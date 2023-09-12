import React,{useEffect} from 'react'
import styles from './PntAcceptBox.module.css'

export default function PntAcceptBox() {
  return (
            <section className={""}>
            <div className='box-border py-10 '>
              <p className='text-[14px] text-[#ea035c] font-bold pb-[15px]'>포인트 선물 수락을 기다리고 있어요!</p>
              <div className='box-border border-[2px] border-[#ea035c] shadow-xl rounded-[8px] p-[20px]'>
                <div className=' pb-[19px]'>
                  <div className='flex justify-between box-border leading-[19px]'>
                    <p className={'text-[11px] text-[#767676]'}>보낸사람 :
                      <strong className='block text-[14px] leading-[24px] pt-[2px] text-black'>
                        {"양*민"}(ID: {"yc****"})
                      </strong>
                    </p>
                    <div className='text-[11px] text-[#767676] text-right w-[80px] pt-[4px]'>
                      <p>{"2023-09-04"}</p>
                      <button className="view_btn">메시지 보기</button>
                    </div>
                  </div>
                </div>
                  <div className='pb-[16px]'>
  
                    <p className={styles.p_accumulate}>
                      {1}
                    </p>
                    <div>
                      {/* 각 버튼에 대해 클릭시 포인트 추가 또는 거절에 대한 서버와의 통신 방법 */}
                      <button className='box-border text-center p-[12px] border-[1px] rounded-[8px] bg-[#ea035c] w-[64px] h-[40px] font-normal pt-[8px] text-[14px] text-white leading-[24px] '>
                        수락
                      </button>
                      <button className='ml-[5px] box-border text-center p-[12px] border-[1px] rounded-[8px] text-[#767676] w-[64px] h-[40px] font-normal pt-[8px] text-[14px] leading-[24px] '>
                        거절
                      </button>
                    </div>
                  </div>
                  <ul className='text-[12px] leading-[20px] text-[#767676]'>
                    · 수락 유효기간은 보낸 날자로부터 <strong className='text-[#767676]'>15일</strong> 입니다.
                  </ul>
              </div>
            </div>
          </section>
  )
}