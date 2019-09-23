import React from 'react'

import './MenuExpandido.css'

const MenuExpandido = props => {

    return (
      <div className="MenuExpandido">
          <ul className="itensMenu">
              <li><a href="/">Home</a></li>
              <li><a href="/quem-somos">Quem Somos</a></li>
              <li><a href="/embaixadoras">Embaixadoras</a></li>
              <li><a href="/mentorias">Mentorias</a></li>
              <li><a href="/contato">Contato</a></li>
          </ul>
      </div>
  )
}
export default MenuExpandido