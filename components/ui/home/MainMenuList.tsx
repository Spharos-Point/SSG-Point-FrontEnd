import { mainMenuData } from '@/data'
import React from 'react'
import MainMenu from './MainMenu'


function MainMenuList() {
  return (
    <div>
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
  )
}

export default MainMenuList