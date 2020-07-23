import React from 'react'

import './iconesParceiros.css'

const iconesParceiros = props => (
  <div className="iconesParceiros">
    <a href={props.linkParceiro}>
      <img src={props.imagemParceiro} alt={props.altParceiro}/>
    </a>
  </div>
)

export default iconesParceiros