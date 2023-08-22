import Footer from '@/components/layout/Footer'
import MemberHeader from '@/components/layout/MemberHeader'
import React from 'react'

function LoginLayout({ children } : { children: React.ReactNode }) {
  return (
    <div>
      <MemberHeader />
      {children}
    </div>
  )
}

export default LoginLayout