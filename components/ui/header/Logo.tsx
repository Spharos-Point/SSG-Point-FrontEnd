import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


function Logo(props : {url: string, imgUrl: string, imgAlt: string}) {
    const {url, imgUrl, imgAlt} = props;
    return (
        <div className='header_logo w-14 h-auto object-cover'>
            <Link href={url}>
                <Image src={imgUrl} alt={imgAlt} width={200} height={100} priority/>
            </Link>
        </div>
    )
}

export default  Logo;