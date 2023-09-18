import LoginForm from '@/components/page/login/LoginForm'
import React from 'react'
import LoginSns from '@/components/page/login/LoginSns'
import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'

async function Login() {

  const data = await getServerSession(options)
  return (
    <section className='min-h-screen '>
      <div className='login_cnt flex flex-col justify-between'>
        <h2 className='logo'>
        </h2>
        <div className='login_input_area'>
          <LoginForm/>  
        </div>
      </div>
      <LoginSns/>
    </section>
  )
}

export default Login