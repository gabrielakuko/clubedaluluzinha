import React from 'react'

// Importando Imagens
import comoFunciona from '../../Assets/comofunciona.jpg'

// Importando componentes

import './Mentoria.css'
import Button from '../Button/Button'

const Mentoria = props => (
  <div className="mentoria">
    <img src={props.imagemMentoria} className="imagemMentoria" alt="Imagem da embaixadora Greice" />
    <h4>{props.nomeMentoria}</h4>
    <p>{props.resumoMentoria}</p>
    <Button color="secondary" text="Conheça" onClick={props.funcoes} />
  </div>
)

export default Mentoria