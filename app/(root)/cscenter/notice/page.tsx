//to do: 페이지네이션 기능 구현
import React from 'react'
import Noticelist from '@/components/ui/cscenter/notice/Noticelist'
import Cscenter_Header from '@/components/layout/Cscenter_Header'
import Pagination from '@/components/ui/cscenter/Pagination'

export default function notice() {
    return (
        <div>
            <main>
                <section>
                    <Noticelist/>
                </section>
            </main>
        </div>
    )
}



// export default function notice() {
//   return (
//     <div>
//         <header>
//             <Cscenter_Header />
//         </header>
//         <main>
//             <section className='notice_list_padding'>
//             <Noticelist /> 
//             </section>
//             <Pagination />

//         </main>
//     </div>
// )
// } 
