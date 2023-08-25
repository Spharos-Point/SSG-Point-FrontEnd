import React from 'react'
import styles from './pntHistory.module.css'


export default function PntHistoryPointBox(){
    return(
        <div className='pt-[24px]'>
        <div className={styles.cardbox}>
          <div className="flex">
            <h3 className=''>신세계 포인트 로고</h3>
            <button className=''> 정보 팝업 버튼</button>
          </div>
            <div className={styles.item_cnt}>
                <dl className={styles.total_point}></dl>
                <dl className='flex'>
                  <dt className='text-[13px] font-medium leading-6 grow shrink basis-0'>사용가능</dt>
                  <dd className='basis shrink'>70</dd>
                </dl>
                <dl className='flex'>
                  <dt >적립 예정</dt>
                  <dd>0p</dd>
                </dl>
                <dl className=''>
                  <dt className=''>소멸 예정</dt>
                  <dd>
                    <span className='flex'>
                        <em className={styles.date}>2023-09-01</em>
                        <em>0p</em>
                    </span>
                    <span className='flex'>
                        <em className={styles.date}>2023-10-01</em>
                        <em>0p</em>
                    </span>
                  </dd>
                </dl>
            </div>
        </div>
      </div>

    )
}