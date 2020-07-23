import React from 'react'

import './iconesTexto.css'

const iconesTexto = props => (
  <div className="iconesTexto">
    <div className="iconeTextoWorkshop" id="empresariosMonitorados">
      <img src={props.icone} alt={props.altIcone} className="iconeWorkshop" />
      <p className="tituloIcone">{props.titulo}</p>
      <p className="descricaoIcone">{props.descricao}</p>
    </div>
  </div>
)

export default iconesTexto