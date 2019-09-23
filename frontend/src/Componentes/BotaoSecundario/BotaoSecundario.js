import React from 'react'

import './BotaoSecundario.css'

const BotaoSecundario = props => (
  <button className="botaoSecundario" onClick={props.cliqueFuncao}>{props.textoBotao}</button>
)

export default BotaoSecundario