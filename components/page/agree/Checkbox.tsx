import React from 'react'

function Checkbox(props: { checked: boolean, handler: Function, label: string, checkId: number, name: string, size?: number,}) {

    const { checked, handler, checkId, label, name, size} = props

    return (
        <ul>
            <li className='relative pr-5 mb-4'>
                <div className='chk_box relative inline-block align-top'>
                    <input 
                        id={label}
                        name={name}
                        type="checkbox" 
                        checked={checked} 
                        onChange={()=>handler(checkId, !checked)} 
                        className={`absolute rounded-full border border-black appearance-none cursor-pointer align-middle`}
                        style={{ width: `${size??5}rem`, height: `${size??5}rem` }} 
                    />
                    <label htmlFor={label} className='block min-h-5 pt-px pl-8 text-[11px] leading-4 break-keep font-bold'>{label}</label>
                </div>
            </li>
        </ul>
    )
}

export default Checkbox