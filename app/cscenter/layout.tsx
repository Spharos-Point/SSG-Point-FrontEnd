// 'use client'
// import Link from "next/link";
// import React from 'react';
// import styles from './layout.module.css';
// import { usePathname } from 'next/navigation'


// export default function mypointLayout({ children }: { children: React.ReactNode }) {
//   const pathName = usePathname();
//   console.log(pathName);

//   return (
//     <>
//       <div className="flex pt-[70px] box-border text-center ">
//             <li role="presentation" className={pathName === "/mypoint/pntHistory" ? styles.gnb_depth2_active : styles.gnb_depth2_default}>
//               <Link href="/mypoint/pntHistory">포인트 내역
//               </Link>
//             </li>
//             <li role="presentation" className={pathName === "/mypoint/cardManage" ? styles.gnb_depth2_active : styles.gnb_depth2_default}>
//               <Link href="/mypoint/cardManage">포인트카드 관리
//               </Link>
//             </li>
//             <li role="presentation" className={pathName === "/mypoint/regAffiliatePntCard" ? styles.gnb_depth2_active : styles.gnb_depth2_default}>
//               <Link href="/mypoint/regAffiliatePntCard">제휴포인트 카드 관리
//               </Link>
//             </li>
//       </div>
//       {children}
//     </>
//   )
// }


import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'

import Footer from '@/components/layout/Footer';
import Cscenter_Header from '@/components/layout/Cscenter_Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '신세계포인트 - 공지사항',
  description: '신세계포인트 이용 정보는 물론 쇼핑과 라이프 스타일 혜택까지 볼거리가 풍성한 신세계포인트 앱으로 일상에 신세계를 더해보세요.',
}

export default function MemberRouter({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}> 
          <Cscenter_Header/>
          {children}
      </body>
    </html>
  )
}
