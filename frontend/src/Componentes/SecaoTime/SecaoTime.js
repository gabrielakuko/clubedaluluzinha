import React from 'react'

// Importando Imagens
import Paula from '../../Assets/paulasteffen.jpg'
import Daiane from '../../Assets/daianesteffen.jpg'

// Importando componentes
import Equipe from '../Equipe/Equipe'

import './SecaoTime.css'

const SecaoTime = props => (
  <div className="secaoTime container">

    <Equipe nomeEquipe="Daiane Steffen" imagemEquipe={Daiane} descricaoEquipe="Administradora, especializada em Marketing e Gestão Comercial. Com mais de 15 anos de experiência em Planejamento Estratégico, Marketing e Vendas."/>

    <Equipe nomeEquipe="Paula Steffen" imagemEquipe={Paula} descricaoEquipe="Empresária, publicitária, é focada em resultados e gosta de fazer isso com leveza e sorriso aberto.
Com mais de 15 anos de experiência em gestão comercial e gerenciamento de competências."/>
    
  </div>
)

export default SecaoTime