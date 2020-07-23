import React from 'react'

// Importando Imagens
import Paula from '../../Assets/paulasteffen.jpg'
import Daiane from '../../Assets/daianesteffen.jpg'

// Importando componentes
import Equipe from '../Equipe/Equipe'

import './SecaoTime.css'

const SecaoTime = props => (
  <div className="secaoTime container">

    <h2 className="fundadorasTitulo">Fundadoras Clube da Luluzinha</h2>

    <Equipe nomeEquipe="Daiane Steffen" imagemEquipe={Daiane} >
      <ul className="lista-equipe" id="daiane">
        <li>+ de 15 anos de experiência em planejamento estratégico, marketing e vendas</li>
        <li>Pós Graduação em Marketing pela Master of Business Administration - Universidade de Salamanca na Espanha</li>
        <li>Planejamento e Gestão Comercial com foco em influência na estratégia de gestão</li>
        <li>Integração de processos CRM</li>
        <li>Estruturação de equipe e inteligência mercadológica</li>
        <li>Gestão de experiência do cliente e estratégia comercial</li>
        <li><a href="https://www.linkedin.com/in/daiane-steffen-feijo-37b6ba20/">Linkedin</a></li>
      </ul>
    </Equipe>

    <Equipe nomeEquipe="Paula Steffen" imagemEquipe={Paula}>
      <ul className="lista-equipe" id="paula">
        <li>+ de 15 anos de experiência em Gestão Comercial e Gerenciamento de Competências</li>
        <li>Especialização em Marketing para Gestão Empresarial - UFSC</li>
        <li>MBA em Gestão de Pessoas pela Universidade Candido Mendes - RJ</li>
        <li>Gestão de projetos comerciais e formação de equipes engajadas</li>
        <li>Coordenação de comunicação e imagem da marca</li>
        <li>Vivências internacionais por mais de 11 países</li>
        <li><a href="https://www.linkedin.com/in/paula-steffen-b88b6a186/">Linkedin</a></li>
      </ul>
    </Equipe>
    
    <div className="resultadosFundadoras">
      <h5>JUNTAS</h5>
      <ul>
        <li>+ 11.000 mulheres impactadas</li>
        <li>+ 400 empresas  fomentando negócios conosco</li>
        <li>+ Em apenas 1 ano e meio, escalaram para 8 cidades com licenciadas</li>
      </ul>
    </div>
    
</div> /* Final DIV principal*/
)

export default SecaoTime