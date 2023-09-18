'use client'
import Link from "next/link";
import React from 'react';
import styles from './layout.module.css';
import { usePathname } from 'next/navigation'


export default function mypointLayout({ children }: { children: React.ReactNode }) {
    const pathName = usePathname();

    return (
        <section className='mt-10' style={{ marginTop: '60px' }}>
            <div className="p-0 min-w-[370px] justify-">
                <ul className="flex">
                    <li className={pathName === "/cscenter/notice" ? styles.gnb_depth2_active : styles.gnb_depth2_default}>
                        <Link href="/cscenter/notice">공지사항
                        </Link>
                    </li>
                    <li className={pathName === "/cscenter/faq" ? styles.gnb_depth2_active : styles.gnb_depth2_default}>
                        <Link href="/cscenter/faq">FAQ
                        </Link>
                    </li>
                    <li className={pathName === "/cscenter/consult/write" ? styles.gnb_depth2_active : styles.gnb_depth2_default}>
                        <Link href="/cscenter/consult/write">1:1 상담
                        </Link>
                    </li>
                </ul>
            </div>
            {children}
        </section>
    )
}
