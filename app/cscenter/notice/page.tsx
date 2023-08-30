//to do: 페이지네이션 기능 구현
import React from 'react'
import Noticelist from '@/components/ui/cscenter/notice/Noticelist'
import Cscenter_Header from '@/components/layout/Cscenter_Header'
import Pagination from '@/components/ui/cscenter/Pagination'

export default function notice() {
    return (
        <div>
            <main className='mt-[104px]'>
                <section>
                    <Noticelist/>
                </section>
            </main>
        </div>
    )
}

