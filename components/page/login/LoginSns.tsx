import React from 'react'
import styles from './LoginSns.module.css'
import Link from 'next/link'


function LoginSns() {
  return (
    <div className={styles.sns_list_box}>
      <h3 className={styles.tit}>간편 로그인</h3>
      <ul className={styles.sns_list}>
        <li className={styles.naver}>
          <Link href="/" className={styles.btn}>
            <span className='hidden'>naver</span>
          </Link>
        </li>
        <li className={styles.kakao}>
          <Link href="/" className={styles.btn}>
          <span className='hidden'>kakao</span>
          </Link>
        </li>
        <li className={styles.apple}>
          <Link href="/" className={styles.btn}>
          <span className='hidden'>apple</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default LoginSns