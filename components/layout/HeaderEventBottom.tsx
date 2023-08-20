'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

function HeaderEventBottom() {

    const pathname = usePathname();

  return (
    <div>
        <div className='event_tab_menu'>
            <ul>
                <li>진행 이벤트</li>
                <li>종료 이벤트</li>
                <li>당첨 확인</li>
            </ul>
        </div>
    </div>
  )
}

export default HeaderEventBottom