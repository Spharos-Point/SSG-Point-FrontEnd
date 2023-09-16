import React, { Suspense } from 'react'
import styles from '@/components/page/mypoint/pntHistory/pntHistory.module.css'
import PntHistoryPointBox from '@/components/page/mypoint/pntHistory/pntHistoryPointBox'
import PntHistoryPonintList from '@/components/page/mypoint/pntHistory/PntHistoryPonintList'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { BaseResDataType } from '@/types/baseResDataType'

//토탈포인트 조회
const getTotalPoint = async () => {
  const session = await getServerSession(options)
  console.log(session?.user.token)
  const url = `${process.env.BASE_API_URL}/api/v1/pointRead/total`
  console.log(url)
  const totalPoint = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${session?.user.token}`,
    },
  });
  console.log(totalPoint)
  if (!totalPoint.ok) {
    throw new Error(await totalPoint.text())
  }
  return totalPoint.json() as Promise<BaseResDataType>
}

//포인트 리스트 조회


async function PntHistory() {
  const userTotalpoint: BaseResDataType = await getTotalPoint()
  console.log(userTotalpoint)
  return (
    <>
      <div>
        <PntHistoryPointBox userTotalpoint = {userTotalpoint.result}/>
      </div>
    <div className ="bg-pink-100 h-[65px] ">
      <div className =
        "relative box-border w-[308px] mx-auto pt-[12px] pl-[56px] h-full ">
          <div className={styles.in_box}></div>
          <p className="text-[13px] text-[#d9044b] text-left font-bold leading-[21px] ">내가 어디서 뭘 샀더라</p>
          <button className="text-[12px] leading-[22px] text-left cursor-pointer">신세계 포인트 영수증 한 번에 모아보기</button>
          <button className={styles.btn}></button>
          
      </div>
    </div>
    <div><PntHistoryPonintList/></div>
    <br/><br/>
    </>
  )
}
export default PntHistory;
