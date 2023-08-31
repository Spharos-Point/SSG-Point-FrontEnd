'use client'
import React, { useEffect } from 'react'
import styles from './CardManage.module.css'
import BarcodeGenerator from '@/components/ui/Barcode/BarcodeGenerator'
import { usePathname } from 'next/navigation'

export default function CardManagePointBox(){

  const pathName = usePathname();
  console.log(pathName);
  const [isActive, setIsActive] = React.useState<boolean>(false);

  useEffect(() => {
    if(pathName === '/mypoint/cardManage'){
      console.log('true');
      setIsActive(true);
    }
    else{
      setIsActive(false);
    }
  }, [isActive]);

    return(
        <div className='p-[24px] bg-[#fbfbfb] font-inter'>
            <p className='text-[14px] mb-[16px] text-center leading-[24px] font-medium'>
              <strong>총 {4}건</strong>
              의 <span className={ isActive ? 'text-red-500' : ''}>신세계포인트 카드를 보유하고 있습니다.</span>
            </p>
            <div className={styles.cardbox}>
                <div className="h-[40px] relative items-center pr-[12px] pl-[20px] flex">
                    <h3 className={styles.tit_img}><span className='hidden'>신세계 포인트 로고</span></h3>
                    <button className='pl-[130px]'>
                      <BarcodeGenerator height={17} width={0.7}/>
                    </button>
                </div>
                <div className='relative bg-[#fff] rounded-[18px] h-full min-h-[160px] mx-[2px] px-[20px] pt-[73px]'>
                    <p className='text-[18px] leading-[21px] tracking-tight font-bold'>
                      {"0000 "}
                      <span className='text-[10px] text-[#bcbcbc] inline-block font-normal align-top'>-</span>
                      {" 0000 "}
                      <span className='text-[10px] text-[#bcbcbc] inline-block font-normal align-top'>-</span>
                      {" 0000 "}
                      <span className='text-[10px] text-[#bcbcbc] inline-block font-normal align-top'>-</span>
                      {" 0000"}
                    </p>
                    {/* 복사 기능 추가 필요 */}
                    <button className={styles.copy_btn} onClick={()=>{}}>복사</button>
                    <div>
                        <dl className='flex box-border absolute bottom-[20px] left-0 px-[20px] w-full items-center'>
                            <dt className='grow shrink basis-0 text-[12px] font-normal'>사용 가능</dt>
                            <dd className='flex justify-end flex-[2.5] items-center text-[16px] leading-[19px] font-medium 
                              after:ml-[7px] after:inline-block after:bg-contain after:bg-no-repeat after:w-[27px] after:h-[25px] after:bg-[url(../public/pntCell.png)]'>
                              {70}
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}


