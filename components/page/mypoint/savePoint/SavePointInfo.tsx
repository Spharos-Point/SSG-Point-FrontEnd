import React from 'react'
import styles from './SavePointInfo.module.css'

export default function SavePointInfo() {
  return (
    <div className='px-[20px] pb-[40px]'>
      <p className='text-[16px] font-bold leading-[26px] mb-[16px]'>
        영수증 정보 등록
      </p>

      <div className='box-border pt-[16px]'>
        <p className='pb-[8px] text-[13px] font-bold leading-[21px]'>제휴사</p>
        <div className='relative inside-block align-top bg-white rounded-[8px] w-full '>
          <select name="제휴사 선택" id="" className={styles.select_box}>
            <option value="001">이마트</option>
            <option value="002">신세계백화점</option>
            <option value="003">이마트 에브리데이</option>
          </select>
        </div>
      </div>

      <div className='box-border pt-[16px]'>
        <p className='pb-[8px] text-[13px] font-bold leading-[21px]'>브랜드</p>
        <div className='relative inside-block align-top bg-white rounded-[8px] w-full '>
          <select name="" id="" className={styles.select_box}>
            <option value="0001">이마트</option>
            <option value="0002">PK마켓</option>
            <option value="0003">트레이더스</option>
            <option value="0004">노브랜드</option>
            <option value="0005">데이즈</option>
            <option value="0006">라이프컨테이너</option>
            <option value="0007">마몰로</option>
            <option value="0008">메종티시아</option>
            <option value="0009">몰리스</option>
            <option value="0010">베이비서클</option>
            <option value="0011">삐에로쑈핑</option>
            <option value="0012">센텐스</option>
            <option value="0013">쇼앤텔</option>
            <option value="0014">스톤브릭</option>
            <option value="0015">일렉트로마트</option>
            <option value="0016">토이킹덤</option>
            <option value="0017">토이킹덤플레이</option>
            <option value="0018">파코크</option>
            <option value="0019">하우디</option>
          </select>
        </div>
      </div>

      <div className='box-border pt-[16px]'>
        <p className='pb-[8px] text-[13px] font-bold leading-[21px]'>매장명</p>
        <div className='relative inside-block align-top bg-white rounded-[8px] w-full '>
          <select name="" id="" className={styles.select_box}>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
      </div>
      {/* 도움..! */}
      <div className='box-border'>
        <div className='my-[13px] '>
          <label className='inline-block pb-0 text-[13px] font-bold leading-[21px]'>영수증 일련번호</label>
          <span className='relative inline-block align-top text-0 top-[4px] ml-[3px]'>
            <button className={styles.info_ico}>정보보기</button>
          </span>
        </div>
        <input type="tel" id="receiptNumber0" className={styles.input_box} />
      </div>
      <div className='pt-[24px]'>
        <button className={styles.btn_box}>
          <a href="" className=''>등록하기</a>
        </button>
      </div>
    </div>
  )
}
