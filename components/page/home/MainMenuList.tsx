'use client'

import { mainMenuData } from '@/data/homeData'
import React from 'react'
import MainMenu from './MainMenu'


function MainMenuList() {
  return (
    <div className='main_menu_nav '>
      <div className='main_menu'>
        <ul>
              {
                mainMenuData.map((item) => (   
                
                  <li key={item.id}>
                    <MainMenu
                    id={item.id}
                    url={item.url}
                    imgUrl={item.imgUrl}
                    imgAlt={item.imgAlt}
                    name={item.name}
                    />
                  </li>
                ))         
              }
          </ul>
      </div>
    </div>
  )
}

export default MainMenuList