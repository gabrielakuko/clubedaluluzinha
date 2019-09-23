import React from 'react'

// Importando Imagens
import comoFunciona from '../../Assets/comofunciona.jpg'

// Importando componentes
import BotaoPrimario from '../BotaoPrimario/BotaoPrimario'
import BotaoSecundario from '../BotaoSecundario/BotaoSecundario'

import './Mentoria.css'

const Mentoria = props => (
  <div className="mentoria">
    <img src={comoFunciona} className="imagemMentoria" alt="Imagem da embaixadora Greice"/>
    <h4>{props.nomeMentoria}</h4>
    <p>{props.resumoMentoria}</p>
    <BotaoSecundario textoBotao="Conheça"/>
  </div>
)

export default Mentoria