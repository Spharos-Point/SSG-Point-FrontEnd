import React from 'react'
import styles from '@/components/page/mypoint/pntHistory/pntHistory.module.css'
import PntHistoryPointBox from '@/components/page/mypoint/pntHistory/pntHistoryPointBox'

export default function pntHistory() {
  return (
    <>
      <div>
        <PntHistoryPointBox />
      </div>
    <br/><br/>
    <div>내가 어디서 뭘 샀더라  페이지 내에서 구현 + 팝업</div>
    <br/><br/>
    <div>컴포넌트 - 포인트 내역 리스트 (전체, 적립/사용, 선물, 전환, 기간, 적용 기간 표시)</div>
    <br/><br/>
    </>
  )
}
