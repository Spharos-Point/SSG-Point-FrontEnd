'use client'
import { cscenternoticeData } from '@/data/cscenterData'
import React from 'react'
import Link from 'next/link'


function  Noticelist() {
  return (
        <ul>
              {
                cscenternoticeData.map((props) => (
                  <div className='box-border p-4 border'>
                    <ul className='hidden'>{props.id}</ul>
                    <Link href={props.url}>
                    <p className='text-[14px] leading-[24px] break-all'>{props.title}</p>
                    <p className='text-[#767676] text-[11px] pt-[4px]'>{props.date}</p>
                    </Link>
                  </div>
                
                ))         
              }
          </ul>
  )
}

export default Noticelist

{/*id={props.id}<br/>
url={props.url}<br/>
title={props.title}<br/>
date={props.date}<br/>*/}