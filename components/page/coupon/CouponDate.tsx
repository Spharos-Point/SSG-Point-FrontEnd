import React from 'react'

function CouponDate(props: {regDate:string, endDate:string}) {

    const {regDate, endDate} = props;

    const date = new Date();
    const ed = new Date(endDate);

    ed.setHours(0);
    const difDate = Math.ceil((ed.getTime() - date.getTime()) / (1000 * 60 *60 * 24));

    return (
        <>
            {
                difDate <= 30 && difDate > 0
                ?
                <span>
                    {difDate}일 남음
                </span> 
                :
                ""
            }
        </>
    )
}

export default CouponDate