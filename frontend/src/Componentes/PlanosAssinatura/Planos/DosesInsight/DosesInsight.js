import React from 'react'
import { Link } from 'react-router-dom'

import dosesinsightimagem from '../../../../Assets/dosesinsight2.jpg'


// Importando Componente
import SecaoTextoImagem from '../../../SecaoTextoImagem/SecaoTextoImagem'
import Menu from '../../../Menu/Menu'
import BannerInicial from '../../../BannerInicial/BannerInicial'


import './DosesInsight.css'
import Button from '../../../Button/Button'

const DosesInsight = props => (
  <div className="dosesinsight">
    <Menu />

    <BannerInicial banner="dosesinsight">
      <h1>Doses de Insight</h1>
    </BannerInicial>

    <div className="container">
      <SecaoTextoImagem titulo="Como Funciona?" imagem={dosesinsightimagem}>
        <p>Aqui você recebe conteúdos mensais via e-mail em doses controladas para não encher a sua caixa postal, mas o suficiente para te provocar a pensar! Doses recomendadas de conteúdo rico para mexer com seu mindset.</p>
        <p>Vamos te surpreender anexando a cada conteúdo um e-book e/ou teste!</p><br></br>

        <div className="formasAssinatura">
          <p>FORMAS DE ASSINATURA:</p>
          <p>Plano C: 12 meses (12 x de R$ 19,90)</p>
        </div>
        <Link to={{ pathname: '/contato', link: 'http://pag.ae/7VdvYx715', assunto: `Assinar Doses de Insight`}} className="botaoAssinatura">Quero Assinar</Link>
      </SecaoTextoImagem>
    </div>
  </div>
)

export default DosesInsight