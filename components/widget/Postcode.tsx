'use client'

import { basename } from 'path';
import React from 'react'
import { useDaumPostcodePopup } from 'react-daum-postcode';

function Postcode() {
    const open = useDaumPostcodePopup();

    const handleComplete = (data:any) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }
        console.log(fullAddress)
    };

    const handlePostcodeClick = () => {
        open({ onComplete: handleComplete });
    };

    return (
        <div>
            <button onClick={handlePostcodeClick}>우편번호 찾기</button>
        </div>
    );
}

export default Postcode