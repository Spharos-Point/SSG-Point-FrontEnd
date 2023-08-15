import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

function MainEvent(props : {url: string, imgUrl: string, imgAlt: string}) {

    const {url, imgUrl, imgAlt} = props;

    return (
        <div className='main_event'>
            <Link href={url}>
                <Image 
                    src={imgUrl}
                    alt={imgAlt}
                    width={1960}
                    height={326}
                                        
                />
            </Link>
        </div>
    )
}

export default MainEvent