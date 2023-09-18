import React from 'react'
import styles from './join.module.css'
import Link from 'next/link'

function Join() {
    return (
        <section className='mt-10' style={{marginTop: '60px'}}>
        <div className='py-10 px-5'>
            <p className='text-2xl leading-9 font-normal whitespace-nowrap'>
            신세계 포인트
            <br />
            <strong>통합ID 회원가입</strong>
            으로
            <br />
            다양한 혜택을 누리세요!
            <br />
            </p>
        </div>
        <div className='p-0 px-5 pb-10'>
            <ol className={`${styles.step_list} my-4 ml-0 -mt-2.5`}>
            <li className='relative box-border h-92'>
                <span className={styles.txt0}>STEP. 1</span>
                <span className={styles.txt1}>본인인증</span>
            </li>
            <li className={`${styles.step2} relative box-border h-92 border-t-2 border-solid border-gray-200`}>
                <span className={styles.txt0}>STEP. 2</span>
                <span className={styles.txt1}>약관동의</span>
            </li>
            <li className={`${styles.step3} relative box-border h-92 border-t-2 border-solid border-gray-200`}>
                <span className={styles.txt0}>STEP. 3</span>
                <span className={styles.txt1}>정보입력</span>
            </li>
            <li className={`${styles.step4} relative box-border h-92 border-t-2 border-solid border-gray-200`}>
                <span className={styles.txt0}>STEP. 4</span>
                <span className={styles.txt1}>가입완료</span>
            </li>
            </ol>
            <div className={`${styles.btn_box} mt-6 mx-0 mb-20`}>
            <Link href='/member/join/cert' className={`${styles.btn_primary}`}>회원가입</Link>
            <p className='text-xs text-gray-500 text-center leading-5 break-normal mt-6'>
                만 14세 미만 아동은 회원가입 할 수 없습니다
            </p>
            </div>
        </div>
        </section>
    )
}

export default Join