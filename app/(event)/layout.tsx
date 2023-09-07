'use client'
import Link from "next/link";
import { useSession } from 'next-auth/react'
import { redirect, usePathname } from 'next/navigation'

export default function EventLayout({children}: {children: React.ReactNode}) {
  const pathName = usePathname()
  return (
    <section className='mt-10' style={{marginTop: '60px'}}>
      <div className="p-0">
        <ul className="flex">
          <li className={pathName === "/ingevents" ? 'gnb_depth2_active' : 'gnb_depth2_default'}>
            <Link href="/ingevents" className="m-auto">
              진행 이벤트
            </Link>
          </li>
          <li className={pathName === "/endevents" ? 'gnb_depth2_active' : 'gnb_depth2_default'}>
            <Link href="/endevents" className="m-auto">
              종료 이벤트
            </Link>
          </li>
          <li className={pathName === "/winevents" ? 'gnb_depth2_active' : 'gnb_depth2_default'}>
            <Link href="/winevents" className="m-auto">
              당첨 확인
            </Link>
          </li>
        </ul>
        {children}
      </div>
    </section>
  )
}