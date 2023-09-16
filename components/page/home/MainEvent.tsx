'use client'

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

function MainEvent(props : {id: number, url: string, imgUrl: string, imgAlt: string}) {

    const {id, url, imgUrl, imgAlt} = props;

    return (
        <div className='main_event object-cover'>
            <Link href={url}>
                <Image 
                    src={imgUrl}
                    alt={imgAlt}
                    width={1960}
                    height={326}
                    priority
                />
            </Link>
        </div>
    )
}

export default MainEvent