import React from 'react'
import Image from 'next/image'
import styles from './MyLuck.module.css'
import Link from 'next/link'

function MyLuck() {
    return (
        <>
            <div className='py-10 px-5 text-center'>
                <p className='mb-6 w-full h-auto'>
                    <Image
                        src='https://storage.googleapis.com/team3_spharos_bucket/img/logo/luck_img.png'
                        alt='운세서비스'
                        width={1980}
                        height={1080}
                    />
                </p>
                <p className='font-bold text-2xl leading-[34px] break-keep'>
                    신세계포인트
                    <span className={styles.luck_service}>운세서비스</span>
                </p>
                <p className='mt-2 text-xl leading-[30px] font-bold break-keep tracking-tighter'>
                    2023년 무료 신토정비결
                </p>
                <p className='text-sm break-keep leading-6 text-[#767676] pt-2'>
                    오늘의 운세, 오늘의 띠별운세
                    <br/>
                    오늘의 타로, 신년타로 제공
                </p>
            </div>
            <div className='pt-0 px-5 pb-10'>
                <div className='btn_box'>
                    <Link href='https://shinsegaepoint.sinbiun.com/mobile/' className='btn_primary'>
                        나의 운세 보러가기
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MyLuck