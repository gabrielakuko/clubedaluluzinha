import React from 'react'

import './ItensPlano.css'

import BotaoSecundario from '../../../Componentes/BotaoSecundario/BotaoSecundario'

const ItensPlano = props => (
  <div className="itemPlanos">
    <img src={props.imagem} className="iconePlanos" alt="Doses de Insight Símbolo"/>
    <h3>{props.titulo}</h3>
    <p>{props.texto}</p>
    <BotaoSecundario  textoBotao="Conheça"/>
  </div>
)

export default ItensPlano