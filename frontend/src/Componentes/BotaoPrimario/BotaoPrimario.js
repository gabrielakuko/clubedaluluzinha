import React from 'react'

import './BotaoPrimario.css'

const BotaoPrimario = props => (
  <a href={props.linkBotaoPrimario} className="botaoPrimario">{props.textoBotao}</a>
)

export default BotaoPrimario