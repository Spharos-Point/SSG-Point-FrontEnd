'use client'
import Link from "next/link";
import React from 'react';
import styles from './layout.module.css';
import { usePathname } from 'next/navigation'

export default function mypointLayout({ children }: { children: React.ReactNode }) {
    const pathName = usePathname();
    console.log(pathName);

    return (
        <>
            <div className="pt-[70px]">
                <ul className={styles.gnb_depth2} style={{paddingTop: '56px'}}>
                    <li role="presentation" className={pathName === "/mypoint/pntHistory" ? "" : ""}>
                        <Link href="">
                            마이 포인트
                        </Link>
                    </li>
                    <li role="presentation" className={pathName === "/mypoint/pntHistory" ? "" : ""}>
                        <Link href="">
                            마이 라운지
                        </Link>
                    </li>
                    <li role="presentation" className={pathName === "/mypoint/pntHistory" ? "" : ""}>
                        <Link href="">
                            마이 혜택
                        </Link>
                    </li>
                    <li role="presentation" className={pathName === "/mypoint/pntHistory" ? "" : ""}>
                        <Link href="">
                            마이 회원정보
                        </Link>
                    </li>
                </ul>
            </div>
            {children}
        </>
    )
}

