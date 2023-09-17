'use client'
import React, {useState, useEffect}from 'react'
import styles from './pntHistory.module.css'
import { PointDataType, UserPointListDataType, purchaseDataType, transDataType } from '@/types/userPointListDataType';
import { useSession } from 'next-auth/react';
import { BaseResDataType } from '@/types/baseResDataType';

export default function PntHistoryDetail( {data} : {data: UserPointListDataType[]} ) {
 
  console.log(data && data)

  return (
    <ul className='pr-[5px] pl-[8px]'>
      {data && data.map((item:UserPointListDataType) => (
        <PointListView key={item.id} item={item} />
      ))}
    </ul>
  );
}


export const PointListView = ({item}:{item:UserPointListDataType}) => {

  const {data: session} = useSession();
  const [receiptDetail, setReceiptDetail] = useState<purchaseDataType>({} as purchaseDataType);
  const [giftDetail, setGiftDetail] = useState<purchaseDataType>({} as purchaseDataType);
  const [transDetail, setTransDetail] = useState<transDataType>({} as transDataType);
  const [pointDetail, setPointDetail] = useState<PointDataType>({} as PointDataType);
  console.log(new Date(item.createAt).toLocaleDateString('ko-KR', { timeZone: 'UTC' }))


  useEffect(() => {
    const getPointDetail = async () => {
      try {
        const response = await fetch(`${process.env.BASE_API_URL}/api/v1/pointRead/${item.pointId}`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.user.token}`,
          },
        });
        const jsonData: BaseResDataType = await response.json();
        console.log(jsonData)
        setPointDetail(jsonData.result);
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      }
    }

    getPointDetail()

    const getReceiptDetail = async () => {
      try {
        const response = await fetch(`${process.env.BASE_API_URL}/api/v1/point/PurchaseUserHistory/${item.pointTypeById}`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.user.token}`,
          },
        });
        const jsonData: BaseResDataType = await response.json();
        console.log(jsonData)
        setReceiptDetail(jsonData.result);
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      }
    }

    const getTransDetail = async () => {
      try {
        const response = await fetch(`${process.env.BASE_API_URL}/api/v1/point/TransUserHistory/${item.pointTypeById}`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.user.token}`,
          },
        });
        const jsonData: BaseResDataType = await response.json();
        console.log(jsonData)
        setTransDetail(jsonData.result);
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      }
    }
          
    if(item.pointType === '영수증') {
      getReceiptDetail()
    } else if(item.pointType === '선물') {
      // getGiftDetail(item.pointTypeById)
    } else if(item.pointType === '전환') {
      getTransDetail()
    }
  }, [])

  return (
    <li
      className='relative border-b-[1px] flex items-center min-h-[74px] py-[5px] tracking-tight'
    >
      <p className={pointDetail.used ? styles.p_use : styles.p_accumulate }>
        {pointDetail.point}P<br/>
        <span className='pl-[23px] text-[11px] leading-[11px] font-normal break-keep'>
          { !pointDetail.used ? '결제적립' : '사용' }
        </span>
      </p>

      <p className={styles.p_location}>
          { item.pointType === '영수증' ? receiptDetail.branchName : item.pointType === '선물' ? giftDetail.brandName : transDetail.extraId }
      </p>
      <div className='absolute top-[16px] right-[5px]'>
        <p className='text-[11px] leading-[19px] text-[#767676] min-w-[62px]'>
          {new Date(item.createAt).toLocaleDateString('ko-KR', { timeZone: 'UTC' })}
        </p>
      </div>
    </li>
  )
}
