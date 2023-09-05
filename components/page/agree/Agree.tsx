import { formAgreements } from '@/data/agreeData'
import { Agreement } from '@/types/agreeDataType'
import React from 'react'

function Agree(props: {agree :Agreement[]}) {

    const {agree} = props;
  return (
    <ul>
        {
            agree.map((items:Agreement) => (
                <li key={items.id} className='relative pr-[22px] mb-4'>
                    <div className='chk_box'>
                        <input
                            className='absolute left-0 top-0 w-5 h-5 rounded-full border border-black appearance-none cursor-pointer align-middle'
                            id={items.id}
                            type='checkbox'
                        />
                        <label htmlFor={items.id} className='block min-h-5 pt-px pl-7 text-[11px] leading-4 break-keep font-bold'>
                            {items.label}
                        </label>
                    </div>
                </li>
            ))
        }
    </ul>
  )
}

export default Agree