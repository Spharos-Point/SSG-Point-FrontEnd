import React,{useEffect, useState} from 'react'
import styles from './PntAcceptBox.module.css'
import Swal from 'sweetalert2';
import { useSession } from 'next-auth/react'  

export default function PntAcceptBox() {
  const { data: session } = useSession();
  const [giftData, setGiftData] = useState(null); // 서버에서 받은 선물 데이터를 저장할 상태
  const [hasPendingGift, setHasPendingGift] = useState(false); // 선물 수락 대기중인 선물이 있는지 확인
  console.log(session);
  console.log(giftData);

  useEffect(() => {
    let accessToken: any;
    // 페이지가 로드될 때 실행되는 함수
    if (session) {
      // 로그인한 사용자 세션이 존재하는 경우
      const fetchGiftData = async () => {
        try {
          const response = await fetch('https://newbiefive.store/api/v1/gift/Pending', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `${accessToken}`, // 사용자 토큰을 헤더에 추가
            },
          });

          if (response.ok) {
            const data = await response.json();
            if (data.code === 0){
              setGiftData(data.result);
              setHasPendingGift(true); // 선물 대기 중인 경우 상태 업데이트
            } else if (data.code === 200){
              setHasPendingGift(false);  // 선물 대기 중이 아닌 경우 상태 업데이트
            }
          } else {
            // 오류 처리
            console.error('서버 응답 오류:', response.status);
            // Swal.fire({
            //   icon: 'error',
            //   title: '오류',
            //   text: '서버 요청 중 오류가 발생했습니다.',
            // });
          }
        } catch (error) {
          // 네트워크 오류 등을 처리
          console.error('서버 요청 오류:', error);
          // Swal.fire({
          //   icon: 'error',
          //   title: '오류',
          //   text: '서버 요청 중 오류가 발생했습니다.',
          // });
        }
      };

      fetchGiftData(); // 서버로 요청 보내는 함수 호출
    }
  }, [session]); // 로그인 세션이 변경될 때마다 실행


  return (
            // hasPendingGift 상태에 따라 표시 : 미표시
            <section className={hasPendingGift ? "" : "hidden"}>
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
