import React from 'react'
import Image from 'next/image'
import loadingimg from '/public/assets/images/login-loading.gif'

const loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
        <Image src={loadingimg} alt="loading" width={200} height={200} />
    </div>
  )
}

export default loading