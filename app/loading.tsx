import React from 'react'
import Image from 'next/image'
import loadingimg from '/public/assets/images/login-loading.gif'

const loading = () => {
  return (
    <div className="w-full h-screen relative flex justify-center items-center bg-white bg-opacity-50 z-[9999]">
        <Image src={loadingimg} alt="loading" width={200} height={200} />
    </div>
  )
}

export default loading