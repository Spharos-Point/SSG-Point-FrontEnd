import React from 'react'

function FaqCategory() {
  return (
    <div>
        <div className=''>
            <select id="대분류">
                    <option value="">대분류</option>
                    <option value="04">회원</option>
                    <option value="01">신세계포인트</option>
                    <option value="02">신세계포인트카드</option>
                    <option value="06">이벤트/쿠폰</option>
                    <option value="03">가맹점</option>
                    <option value="07">개선사항</option>
                    <option value="09">신세계 유니버스 클럽</option>
                    <option value="10">이마트 EV 클럽</option>
                    <option value="08">기타</option>
            </select>
        </div>
        
        <div className=''>
            <select id="소분류">
                    <option value="">소분류</option>
                    <option value="04">회원</option>
                    <option value="01">신세계포인트</option>
                    <option value="02">신세계포인트카드</option>
                    <option value="06">이벤트/쿠폰</option>
                    <option value="03">가맹점</option>
                    <option value="07">개선사항</option>
                    <option value="09">신세계 유니버스 클럽</option>
                    <option value="10">이마트 EV 클럽</option>
                    <option value="08">기타</option>
            </select></div>
    </div>

  )
}

export default FaqCategory