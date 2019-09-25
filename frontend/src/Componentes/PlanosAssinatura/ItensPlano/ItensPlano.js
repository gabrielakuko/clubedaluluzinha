import React from 'react'

import './ItensPlano.css'
import Button from '../../Button/Button'

const ItensPlano = props => (
  <div className="itemPlanos">
    <img src={props.imagem} className="iconePlanos" alt="Doses de Insight Símbolo"/>
    <h3>{props.titulo}</h3>
    <p>{props.texto}</p>
    <Button color="secondary" text="Conheça" path={props.link} />
  </div>
)

export default ItensPlano