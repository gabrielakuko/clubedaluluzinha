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
        <ItensPlano titulo="Doses de Insight" imagem={dosesDeInsight} texto="Conteúdo rico para mexer com seu mindset." />
        <ItensPlano titulo="Doses de Insight" imagem={donaDoTempo} texto="Conteúdo rico para mexer com seu mindset." />
        <ItensPlano titulo="Tenho Asas" imagem={tenhoAsas} texto="Conteúdo rico para mexer com seu mindset." />
        <ItensPlano titulo="Mais Business" imagem={maisBusiness} texto="Conteúdo rico para mexer com seu mindset." />
      </div>
    </div>
  </div>
)

export default PlanosAssinatura