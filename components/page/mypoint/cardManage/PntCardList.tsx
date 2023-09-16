import { PointCardType } from '@/data/pointCardType';

export const NoDataView = () => {
  return (
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
  )
}

export default function PntCardList({ pointCardList }: { pointCardList: PointCardType[] }) {

  console.log(pointCardList)

  const noData = !pointCardList || pointCardList.length === 0 ? <NoDataView /> : null;

  return (
    <div className='px-[20px] py-[40px]'>
      {/* 온라인카드 리스트 */}
      <div className='pb-[16px] text-[16px] font-medium leading-[26px]'>
        온라인 카드
      </div>

      <div className='relative pb-[40px]'>
        <table className='w-full table-fixed border-t-[1px] border-t-black'>
          <colgroup>
            <col className="w-2/5" />
            <col className="w-auto" />
            <col className="w-[81px]" />
          </colgroup>
          <thead>
            <tr className='font-normal text-center text-[13px] border-b-[1px] box-border leading-[21px] '>
              <th scope='col' className='py-3'>
                카드번호
              </th>
              <th scope='col' className='py-3'>
                발급처
              </th>
              <th scope='col' className='py-3'>
                발급일자
              </th>
            </tr>
          </thead>
          <tbody className='font-normal text-center align-center border-b-[1px] leading-[21px] break-keep'>
            {pointCardList.map((card, index) => (
              <tr key={index}>
                <td className='text-[12px] text-[#767676] py-3'>{card.cardNumber}</td>
                <td className='text-[13px] text-[#767676] py-3'>
                {card.brandId === 1
                    ? '삼성전자 멤버십'
                    : card.brandId === 2
                    ? '대한항공'
                    : card.brandId === 3
                    ? '아시아나항공'
                    : card.brandId === null || card.brandId === undefined 
                    ? '신세계 포인트'
                    : '신세계 포인트 제휴사'}
                </td>
                <td className='text-[12px] text-[#767676] py-3'>
                  {new Date(card.createAt).toLocaleDateString('ko-KR', { timeZone: 'UTC' })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {noData}
    </div>
  );
}

