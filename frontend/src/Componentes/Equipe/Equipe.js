import React from 'react'

// Importando componentes
import BotaoPrimario from '../BotaoPrimario/BotaoPrimario'
import BotaoSecundario from '../BotaoSecundario/BotaoSecundario'

import './Equipe.css'

const Equipe = props => (
  <div className="equipe">
    <div className="containerImagemEquipe"><img src={props.imagemEquipe} className="imagemEquipe" alt="Imagem da embaixadora Greice"/></div>
    <h4>{props.nomeEquipe}</h4>
    <p>{props.descricaoEquipe}</p>
  </div>
)

export default Equipe