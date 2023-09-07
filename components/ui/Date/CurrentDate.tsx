import React from 'react';

export default function CurrentDate() {
  const today = new Date(); // 현재 날짜 가져오기
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const date = String(today.getDate()).padStart(2, '0'); // 일자 가져오기

  const formattedDate = `${year}-${month}-${date}`;

  return (
    <div>
      {formattedDate}
    </div>
  );
}