import React from 'react'
import Faqlist from '@/components/ui/cscenter/faq/Faqlist';
import FaqCategory from '@/components/ui/cscenter/faq/FaqCategory';


function faq() {
  return (
    <div>
      <main>
        <section className=''>
          <div className=''><p className=''>자주 묻는 <strong className=''>질문과 답변</strong>을<br />모아 두었어요.</p></div>
          <div className=''>
            <p className=''>질문 분류를 선택해 주세요.</p>
            <FaqCategory />
          </div>
          <div className=''>
            <Faqlist />
          </div>
        </section>
      </main>
    </div>
  )
}

export default faq