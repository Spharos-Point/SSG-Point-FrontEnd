import LoginForm from '@/components/page/login/LoginForm'
import React from 'react'
import styles from  './Login.module.css'
import LoginSns from '@/components/page/login/LoginSns'

function Login() {
  return (
    <section className='min-h-screen '>
      <div className='login_cnt flex flex-col justify-between'>
        <h2 className={styles.logo}>
        </h2>
        <div className={styles.login_input_area}>
          <LoginForm/>  
        </div>
      </div>
      <LoginSns/>
    </section>
  )
}

export default Login