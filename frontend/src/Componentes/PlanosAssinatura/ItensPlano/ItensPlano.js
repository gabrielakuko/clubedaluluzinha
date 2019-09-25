import React from 'react'

import './ItensPlano.css'
import ButtonLink from '../../ButtonLink/ButtonLink'

const ItensPlano = props => (
  <div className="itemPlanos">
    <img src={props.imagem} className="iconePlanos" alt="Doses de Insight Símbolo"/>
    <h3>{props.titulo}</h3>
    <p>{props.texto}</p>
    <ButtonLink color="secondary" text="Conheça" path={props.link} />
  </div>
)

export default ItensPlano