'use client'
import React, { useEffect, useState } from 'react';
import { PointCardType } from '@/data/pointCardType';
import { useSession } from 'next-auth/react';

function maskCardNumber(cardNumber) {
  if (cardNumber && cardNumber.length === 16) {
    const visibleDigits = cardNumber.substr(0, 4) + '-****-****-' + cardNumber.substr(12);
    return visibleDigits;
  }
  return cardNumber;
}

export default function PntCardList() {
  const { data: session } = useSession();
  const [pointCardList, setPointCardList] = useState<PointCardType[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        if (session && session.user.token) {
          const response = await fetch('https://newbiefive.store/api/v1/myinfo/pointCardList', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${session.user.token}`,
            },
          });

          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }

          const data = await response.json();
          const cardList = data.result.map((card) => ({
            ...card,
            cardNumber: maskCardNumber(card.cardNumber),
            createAt: card.createAt.substr(0, 10),
          }));
          setPointCardList(cardList);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [session]);

  return (
    <div className='px-[20px] py-[40px]'>
      {/* 온라인카드 리스트 */}
      <div className='pb-[16px] text-[16px] font-medium leading-[26px]'>
        온라인 카드
      </div>

      <div className='relative pb-[40px]'>
        {pointCardList.length > 0 ? (
          <table className='w-full table-fixed border-t-[1px] border-t-black'>
            <colgroup>
              <col className="w-2/5" />
              <col className="w-auto" />
              <col className="w-[81px]" />
            </colgroup>
            <thead>
              <tr className='font-normal text-center text-[13px]
                border-b-[1px] box-border leading-[21px] '>
                <th scope='col' className='py-3'>카드번호</th>
                <th scope='col' className='py-3'>발급처</th>
                <th scope='col' className='py-3'>발급일자</th>
              </tr>
            </thead>
            <tbody className='font-normal text-center align-center border-b-[1px] leading-[21px] break-keep'>
              {pointCardList.map((card, index) => (
                <tr key={index}>
                  <td className='text-[12px] text-[#767676] py-3'>{card.cardNumber}</td>
                  <td className='text-[13px] text-[#767676] py-3'>{card.branchName}</td>
                  <td className='text-[12px] text-[#767676] py-3'>{card.createAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <>
            <table className='w-full table-fixed border-t-[1px] border-t-black'>
              <colgroup>
                <col className="w-2/5" />
                <col className="w-auto" />
                <col className="w-[81px]" />
              </colgroup>
              <thead>
                <tr className='font-normal text-center text-[13px]
                border-b-[1px] box-border leading-[21px] '>
                  <th scope='col' className='py-3'>카드번호</th>
                  <th scope='col' className='py-3'>발급처</th>
                  <th scope='col' className='py-3'>발급일자</th>
                </tr>
              </thead>
            </table>
            <p className='text-[13px] text-center text-[#767676] py-[28px]'>
              보유하신 카드가 없습니다.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
