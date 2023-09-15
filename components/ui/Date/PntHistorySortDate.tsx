import React from 'react';

interface PntHistorySortDateProps {
  selectedOption: string; // 선택한 옵션에 따라 타입을 조정
}

export default function PntHistorySortDate({ selectedOption }: PntHistorySortDateProps) {
  const today = new Date(); // 현재 날짜 가져오기

  // 선택한 옵션에 따라 날짜를 계산
  const calculateStartDate = () => {
    const startDate = new Date(today);

    switch (selectedOption) {
      case '7':
        startDate.setDate(today.getDate() - 7); // 1주일 전
        break;
      case '1':
        startDate.setMonth(today.getMonth() - 1); // 1개월 전
        break;
      case '3':
        startDate.setMonth(today.getMonth() - 3); // 3개월 전
        break;
      case '6':
        startDate.setMonth(today.getMonth() - 6); // 6개월 전
        break;
      default:
        break;
    }

    return startDate;
  };

  const startDate = calculateStartDate();
  const endDate = today;

  const formattedStartDate = startDate.toISOString().slice(0, 10);
  const formattedEndDate = endDate.toISOString().slice(0, 10);

  return (
    <div>
      {formattedStartDate} ~ {formattedEndDate}
    </div>
  );
}
