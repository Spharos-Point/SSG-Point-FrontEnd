import React from 'react'
import Image from 'next/image'

const loading = () => {
  return (
    <div className='myLoader'>
      <div className='loader'>
        <Image src="/public/assets/images/loader.svg" width={30} height={30} alt='loader'/>
      </div>
    </div>
  )
}

export default loading