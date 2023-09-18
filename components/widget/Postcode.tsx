'use client'

import React from 'react'
import DaumPostcode from 'react-daum-postcode';

function Postcode({isView, setIsView, setAddress}: {isView:boolean, setIsView: any, setAddress: React.Dispatch<React.SetStateAction<any>>}) {

    const handleComplete = (data:any) => {
       setAddress(data)
    };

   

    return (
        <div>
            {
                isView &&
                <DaumPostcode
                    className='postmodal fixed z-[9999] left-0 top-0 '
                    onComplete={handleComplete}
                />
            }
        </div>
    );
}

export default Postcode