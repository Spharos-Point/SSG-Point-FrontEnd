import React from 'react'

const LoginModal = (props: {message:string, confirm:boolean}) => {

    const { message, confirm } = props;

  return (
    <div className='searchModalContent'>
        {message}

        <button> 
            확인
        </button>
    </div>
  )
}

export default LoginModal