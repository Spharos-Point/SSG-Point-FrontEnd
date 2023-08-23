'use client'
import { cscenternoticeData } from '@/data/cscenterData'
import React from 'react'
import Link from 'next/link'

function  Noticelist() {
  return (
        <ul>
              {
                cscenternoticeData.map((props) => (
                    <li margin-top = "" key={props.id} className=''>
                    <ul className=''>{props.id}</ul>
                    <Link href={props.url}>
                    <p>{props.title}</p>
                    <p className=''>{props.date}</p>
                    </Link>
                    </li>
                
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