import React from 'react'

// Importando Imagens
import Paula from '../../Assets/paulasteffen.jpg'
import Daiane from '../../Assets/daianesteffen.jpg'
import Luciano from '../../Assets/lucianovital.jpg'

// Importando componentes
import BotaoPrimario from '../BotaoPrimario/BotaoPrimario'
import BotaoSecundario from '../BotaoSecundario/BotaoSecundario'
import Equipe from '../Equipe/Equipe'

import './SecaoTime.css'

const SecaoTime = props => (
  <div className="secaoTime container">

    <Equipe nomeEquipe="Daiane Steffen" imagemEquipe={Daiane} descricaoEquipe="Você vai ser provocado a repensar seus processos, suas metas e como atingir objetivos comerciais práticos."/>

    <Equipe nomeEquipe="Paula Steffen" imagemEquipe={Paula} descricaoEquipe="Você vai ser provocado a repensar seus processos, suas metas e como atingir objetivos comerciais práticos."/>

    <Equipe nomeEquipe="Luciano Vital" imagemEquipe={Luciano} descricaoEquipe="Você vai ser provocado a repensar seus processos, suas metas e como atingir objetivos comerciais práticos."/>
    
  </div>
)

export default SecaoTime