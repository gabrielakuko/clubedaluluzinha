import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'; // Importando react router dom


import './BotaoSecundario.css'

const BotaoSecundario = props => (
  
  <a href={props.linkBotaoSecundario} className="botaoSecundario" onClick={props.cliqueFuncao}>{props.textoBotao}</a>
)

export default BotaoSecundario