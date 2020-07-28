import React from 'react'
import { Link } from 'react-router-dom'; // Importando react router dom


import './iconesParceiros.css'

const iconesParceiros = props => (
  <div className="iconesParceiros">
    <Link to="/parceiros">
      <img src={props.imagemParceiro} alt={props.altParceiro}/>
    </Link>
  </div>
)

export default iconesParceiros