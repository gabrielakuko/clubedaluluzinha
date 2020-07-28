import React from 'react'
import { Link } from 'react-router-dom'; // Importando react router dom


import './depoimentos.css'

const depoimentos = props => (
  <div className="depoimentos">
    <h5>{props.nomeEmpresa}</h5>
    <img src={props.imagemDepoimento} alt={props.altDepoimento}/>
    <p>{props.depoimento}</p>
    <a href={props.linkInstagram1}>{props.instagram1}</a>
    <a href={props.linkInstagram2}>{props.instagram2}</a>
  </div>
)

export default depoimentos