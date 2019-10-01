import React from 'react'

// Importando Imagens
import Paula from '../../Assets/paulasteffen.jpg'
import Daiane from '../../Assets/daianesteffen.jpg'

// Importando componentes
import Equipe from '../Equipe/Equipe'

import './SecaoTime.css'

const SecaoTime = props => (
  <div className="secaoTime container">

    <Equipe nomeEquipe="Daiane Steffen" imagemEquipe={Daiane} >
      <ul className="lista-equipe">
        <li>+ de 15 anos de experiência em planejamento estratégico, marketing e vendas</li>
        <li>Pós Graduação em Marketing pela Master of Business Administration - Universidade de Salamanca na Espanha</li>
        <li>Planejamento e Gestão Comercial com foco em influência na estratégia de gestão</li>
        <li>Integração de processos CRM</li>
        <li>Estruturação de equipe e inteligência mercadológica</li>
        <li>Gestão de experiência do cliente e estratégia comercial</li>
      </ul>
    </Equipe>

    <Equipe nomeEquipe="Paula Steffen" imagemEquipe={Paula}>
      <ul className="lista-equipe">
        <li>+ de 15 anos de experiência em Gestão Comercial e Gerenciamento de Competências</li>
        <li>Especialização em Marketing para Gestão Empresarial - UFSC</li>
        <li>MBA em Gestão de Pessoas pela Universidade Candido Mendes</li>
        <li>Gestão de projetos comerciais e formação de equipes engajadas</li>
        <li>Coordenação de comunicação e imagem da marca</li>
        <li className="sem-list">"Já fui aquela que dava o sangue pela empresa e trazia resultados para um só. Agora faço isso para impulsionar vários."</li>
      </ul>
    </Equipe>
    
  </div>
)

export default SecaoTime