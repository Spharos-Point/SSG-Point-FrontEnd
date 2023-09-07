'use client'

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

function EventImage(props : {id: number, url: string, imgUrl: string, imgAlt: string}) {

    const {id, url, imgUrl, imgAlt} = props;

    return (
        <div className='main_event object-cover w-full'>
            <Link href={url}>
                <Image 
                    src={imgUrl}
                    alt={imgAlt}
                    width={1960}
                    height={240}
                />
            </Link>
        </div>
    )
}

export default EventImage