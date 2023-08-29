import React from 'react'
import styles from '@/components/page/mypoint/pntHistory/pntHistory.module.css'
import PntHistoryPointBox from '@/components/page/mypoint/pntHistory/PntHistoryPointBox'
import PntHistoryPonintList from '@/components/page/mypoint/pntHistory/PntHistoryPonintList'

export default function pntHistory() {
  return (
    <>
      <div>
        <PntHistoryPointBox />
      </div>
    <div className ="bg-pink-100 h-[65px] ">
      <div className =
        "relative box-border w-[308px] mx-auto pt-[12px] pl-[56px] h-full bg-">
          <div className={styles.in_box}></div>
          <p className="text-[13px] text-[#d9044b] text-left font-bold leading-[21px] ">내가 어디서 뭘 샀더라</p>
          <button className="text-[12px] leading-[22px] text-left cursor-pointer">신세계 포인트 영수증 한 번에 모아보기
            <button className={styles.btn}></button>
          </button>
      </div>
    </div>
    <div><PntHistoryPonintList/></div>
    <br/><br/>
    </>
  )
}
