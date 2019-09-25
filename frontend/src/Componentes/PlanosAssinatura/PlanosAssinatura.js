import React from 'react'

// Importando Imagens
import dosesDeInsight from '../../Assets/dosesdeinsight.svg'
import donaDoTempo from '../../Assets/donadotempo.svg'
import tenhoAsas from '../../Assets/donadotempo2.svg'
import maisBusiness from '../../Assets/donadotempo3.svg'

// Importando Componente
import ItensPlano from './ItensPlano/ItensPlano'

import './PlanosAssinatura.css'

const PlanosAssinatura = props => (
  <div className="planosDeAssinatura">
    <div className="container">
      <h2>Planos de Assinatura</h2>
      <div className="itensPlano">
        <ItensPlano titulo="Doses de Insight" imagem={dosesDeInsight} texto="Conteúdo rico para mexer com seu mindset." link="/planos/dosesinsight" />
        <ItensPlano titulo="Dona do Tempo" imagem={donaDoTempo} texto="Conteúdo rico para mexer com seu mindset." link="/planos/donadotempo" />
        <ItensPlano titulo="Tenho Asas" imagem={tenhoAsas} texto="Conteúdo rico para mexer com seu mindset." link="/planos/tenhoasas"/>
        <ItensPlano titulo="Mais Business" imagem={maisBusiness} texto="Conteúdo rico para mexer com seu mindset." link="/planos/maisbusiness"/>
      </div>
    </div>
  </div>
)

export default PlanosAssinatura