import React from 'react'

function Pagination() {
  return (
    <div className=''>
    <button className=''><span>첫 페이지 이동</span></button>
    <button className=''><span>이전 페이지 이동</span></button>
    <ul> {/*페이지 넘버*/}
    <li className=''><button><span>1</span></button></li>
    <li className=''><button><span>2</span></button></li>
    <li className=''><button><span>3</span></button></li>
    <li className=''><button><span>4</span></button></li>
    <li className=''><button><span>5</span></button></li>
    </ul>
    <button className=''><span>다음 페이지 이동</span></button>
    <button className=''><span>마지막 페이지 이동</span></button>
    </div>
  )
}

export default Pagination







