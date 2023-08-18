'use client'

import Link from 'next/link';
import React from 'react'
import Image from 'next/image';


function MainMenu(props : {url: string, imgUrl: string, imgAlt: string, name: string}) {

    const {url, imgUrl, imgAlt, name} = props;

  return (
    <div>
        <Link href={url}>
            <Image
                src={imgUrl}
                alt={imgAlt}
                width={60}
                height={41}
            />
            <div className='text-xs text-center'>
                {name}
            </div>
        </Link>
    </div>
  )
}

export default MainMenu