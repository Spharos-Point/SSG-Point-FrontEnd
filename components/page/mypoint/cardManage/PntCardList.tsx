import React from 'react'

function PntCardList() {
  return (
    <div className='px-[20px] py-[40px]'>
      {/* 온라인카드 리스트 */}
      <div className='pb-[16px] text-[16px] font-medium leading-[26px]'>
        온라인 카드</div>

      <div className='relative pb-[40px]'>
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
            {/* 온라인 카드 리스트 본문 */}
          </thead>
          <tbody className='font-normal text-center align-center border-b-[1px] leading-[21px] break-keep'>
            <td className='text-[12px] text-[#767676] py-3'>9350-****-****-4486</td>
            <td className='text-[13px] text-[#767676] py-3'>신세계포인트닷컴</td>
            <td className='text-[12px] text-[#767676] py-3'>2023-07-27</td>
          </tbody>
          <tbody className='font-normal text-center align-center border-b-[1px] leading-[21px] break-keep'>
            <td className='text-[12px] text-[#767676] py-3'>9350-****-****-9124</td>
            <td className='text-[13px] text-[#767676] py-3'>신세계포인트XSSG.COM</td>
            <td className='text-[12px] text-[#767676] py-3'>2019-04-03</td>
          </tbody>
          <tbody className='font-normal text-center align-center border-b-[1px] leading-[21px] break-keep'>
            <td className='text-[12px] text-[#767676] py-3'>9350-****-****-1745</td>
            <td className='text-[13px] text-[#767676] py-3'>사이먼(ON)</td>
            <td className='text-[12px] text-[#767676] py-3'>2023-08-02</td>
          </tbody>
          <tbody className='font-normal text-center align-center border-b-[1px] leading-[21px] break-keep'>
            <td className='text-[12px] text-[#767676] py-3'>9350-****-****-7969</td>
            <td className='text-[13px] text-[#767676] py-3'>쓱고우</td>
            <td className='text-[12px] text-[#767676] py-3'>2023-08-02</td>
          </tbody>
        </table>
      </div>

      {/* 제휴카드 리스트 */}
      <div className='pb-[16px] text-[16px] font-medium leading-[26px]'>
        제휴 신용카드</div>

      <div className='relative pb-[40px]'>
        <table className='w-full table-fixed border-t-[1px] border-t-black'>
          <colgroup>
            <col className="w-2/5" />
            <col className="w-auto" />
            <col className="w-[81px]" />
          </colgroup>
          <thead>
            <tr className='font-normal text-center text-[13px]
                border-b-[1px] box-border leading-[21px] '>
              <th scope='col' className='py-3'>카드명</th>
              <th scope='col' className='py-3'>발급처</th>
              <th scope='col' className='py-3'>발급일자</th>
            </tr>
            {/* 제휴 카드 리스트 본문 */}
          </thead>
          <tbody className='font-normal text-center align-center border-b-[1px] leading-[21px] break-keep'>
            <td className='col-span-3 text-[12px] text-[#767676] py-3'>
              <div className='py-[28px]'>
                <p className='relative text-[13px] text-center pt-[64px] after:bg-[url(../public/noneinfoicon.png)]'>
                  보유하신 제휴 신용카드가 없습니다.
                </p>
              </div>
            </td>
          </tbody>
        </table>
      </div>

      {/* 오프라인 카드 리스트 */}
      <div className='pb-[16px] text-[16px] font-medium leading-[26px]'>
        오프라인 카드</div>

      <div className='relative pb-[40px]'>
        <table className='w-full table-fixed border-t-[1px] border-t-black'>
          <colgroup>
            <col className="w-2/5" />
            <col className="w-auto" />
            <col className="w-[81px]" />
          </colgroup>
          <thead>
            <td>
              <tr className='font-normal text-center text-[13px]
                  border-b-[1px] box-border leading-[21px] '>
                <th scope='col' className='py-3'>카드번호</th>
                <th scope='col' className='py-3'>발급처</th>
                <th scope='col' className='py-3'>발급일자</th>
              </tr>
            </td>
            {/* 오프라인 카드 리스트 본문 */}
          </thead>
          <tbody className='font-normal text-center align-center border-b-[1px] leading-[21px] break-keep'>
            <td className='text-[12px] text-[#767676] py-3'>9350-****-****-4486</td>
            <td className='text-[13px] text-[#767676] py-3'>신세계포인트닷컴</td>
            <td className='text-[12px] text-[#767676] py-3'>2023-07-27</td>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PntCardList