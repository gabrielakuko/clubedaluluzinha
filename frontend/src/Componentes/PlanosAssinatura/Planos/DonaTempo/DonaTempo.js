import React from 'react'

import donatempoimagem from '../../../../Assets/donadotempo2.jpg'


// Importando Componente
import SecaoTextoImagem from '../../../SecaoTextoImagem/SecaoTextoImagem'
import Menu from '../../../Menu/Menu'
import BannerInicial from '../../../BannerInicial/BannerInicial'


import './DonaTempo.css'
import BotaoSecundario from '../../../BotaoSecundario/BotaoSecundario'

const DonaTempo = props => (
  <div className="donatempo">
    <Menu />

    <BannerInicial banner="donatempo">
      <h1>Dona do Tempo</h1>
    </BannerInicial>

    <div className="container">
      <SecaoTextoImagem titulo="Como Funciona?" imagem={donatempoimagem}>
        <p>Vivemos em um oceano de informações, em tempos líquidos, onde nada foi feito para durar, como já dizia Zigmunt Bauman. Nesse mar agitado, como vc tem remado o seu barco para construir conexões de valor?</p>

        <p>Aqui você terá:</p>
        <ul className="listaDonaTempo">
          <li>Conteúdo Mensal via email com uma Jornada de Conhecimento;</li>
          <li>Acesso a 1 café de negócio/mês</li>
          <li>Acesso ao grupo fechado de whatsapp, na sua cidade!</li>
          <li>Vai gerar conexões verdadeiras e de longo prazo.</li>
        </ul><br></br>

        <div className="formasAssinatura">
          <p>FORMAS DE ASSINATURA:</p>
          <p>Plano A: 6 meses (6x de R$ 66,00)</p>
          <p>Plano B: 12 meses (12x de R$ 49,90)</p>
        </div>
        
        <div className="areaBotoesPlano">
          <BotaoSecundario  textoBotao="Assinar 6 meses" linkBotaoSecundario="http://pag.ae/7Vhe64r-r"/>
          <BotaoSecundario  textoBotao="Assinar 12 meses" linkBotaoSecundario="http://pag.ae/7VhovR74r"/>
        </div>
        
      </SecaoTextoImagem>
    </div>
  </div>
)

export default DonaTempo