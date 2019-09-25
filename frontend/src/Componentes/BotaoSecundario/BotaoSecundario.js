import React from 'react'
import { Link } from 'react-router-dom'; // Importando react router dom


import './BotaoSecundario.css'

const BotaoSecundario = props => {
  if (props.linkBotaoSecundario) {
    return (
      <Link to={props.linkBotaoSecundario} className="botaoSecundario" onClick={props.cliqueFuncao}>{props.textoBotao}</Link>
    );
  }
  return '';
}

export default BotaoSecundario