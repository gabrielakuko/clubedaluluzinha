import React, { useState } from 'react'

import logo from '../../Assets/coroa.svg'
import './Menu.css'

// Importando componentes
import MenuExpandido from './MenuExpandido/MenuExpandido'


const Menu = (props) => {

    const [abrirMenu, setMenu] = useState(false)

    const abrindoEFechandoMenu = () => {
      setMenu((prevState) => {
            return {abrirMenu: !prevState.abrirMenu}
      })
    }

    let menuExpandido

    if(abrirMenu) {
      menuExpandido = <MenuExpandido />
    }
    if (!abrirMenu.abrirMenu) {
      menuExpandido = null
    }

    let classesBotao = 'iconeMenu'
    if(abrirMenu) {
      classesBotao = 'iconeMenu menuAtivo'
    }
    if (!abrirMenu.abrirMenu) {
      classesBotao = 'iconeMenu'
    }
    
 
    return (
      <div>
          <header className="headerMenu">
              <nav className="navbar">
                  <div className="area-logo">
                      <a href="/"><img src={logo} className="logo-svg" alt="Logo"/></a>
                  </div>
                  <button className={classesBotao} onClick={abrindoEFechandoMenu}>
                      <div className="linhaMenu"></div>
                      <div className="linhaMenu"></div>
                      <div className="linhaMenu"></div>
                  </button>
              </nav>
          </header>
          {menuExpandido}
      </div>
    )
}

export default Menu