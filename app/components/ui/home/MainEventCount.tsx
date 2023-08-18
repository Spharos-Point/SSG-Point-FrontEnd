'use client'

import React, {useState} from 'react'

function MainEventCount() {


    const [count, setcount] = useState(1);

    const slideCount = () => {
        
        setcount(count + 1);
    }

    return (
        <div onChange={slideCount}>
            {count} / 6
        </div>
        
    )
}

export default MainEventCount