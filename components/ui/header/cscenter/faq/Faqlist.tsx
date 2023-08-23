'use client'
import { cscenterfaqData } from '@/data/cscenterData'
import React from 'react'

function  Faqlist() {
  return (
        <ul>
              {
                cscenterfaqData.map((props) => (
                    <ul>
                        <li key={props.id}>
                            <div className=''>
                                <p className=''>{props.id}</p>
                                <p className=''>Q</p>
                                <p className=''>{props.q_type1}</p>
                                <p className=''>{props.q_type2} {props.q_txt}</p>
                                <button></button>
                            </div>
                            <div className=''>
                                <p className=''>A</p>
                                <p className=''>{props.a_txt}</p>
                            </div>
                        </li>
                    </ul>
                
                ))         
              }
          </ul>
  )
}

export default Faqlist
