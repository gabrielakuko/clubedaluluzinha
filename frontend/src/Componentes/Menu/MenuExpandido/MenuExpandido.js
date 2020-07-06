import React from 'react'
import { Link } from 'react-router-dom'; // Importando react router dom


import './MenuExpandido.css'

const MenuExpandido = (props) => {
    return (
      <div className="MenuExpandido">
          <ul className="itensMenu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/quem-somos">Quem Somos</Link></li>
              <li><Link to="/embaixadoras">Embaixadoras</Link></li>
              <li><Link to="/time-mentoras">Time de Mentoras</Link></li>
              <li><Link to="/mentorias-clube">Mentorias Clube</Link></li>
              <li><Link to="/workshops">Workshops</Link></li>
              <li><Link to="/lulu-talks">Lulu Talks</Link></li>
              <li><Link to="/parceiros-clube">Parceiros Clube</Link></li>
              <li><Link to="/respeitaminhahistsoria">#Respeitaminhahistória</Link></li>
              <li><Link to="/contato">Contato</Link></li>
          </ul>
      </div>
  )
}
export default MenuExpandido