import React from 'react'
import { Link } from 'react-router-dom'; // Importando react router dom


import './BotaoSecundario.css'

const BotaoSecundario = props => {
  if (!props.linkBotaoSecundario) {
    return '';
  }
  if (typeof props.linkBotaoSecundario === 'string') {
    return (
      <a href={props.linkBotaoSecundario} className="botaoSecundario" onClick={props.cliqueFuncao}>{props.textoBotao}</a>
    );  
  }

  return (
    <Link to={props.linkBotaoSecundario} className="botaoSecundario" onClick={props.cliqueFuncao}>{props.textoBotao}</Link>
  );
}

export default BotaoSecundario