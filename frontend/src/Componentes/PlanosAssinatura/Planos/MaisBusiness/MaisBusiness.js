import React from 'react'

import maisbusinessimagem from '../../../../Assets/maisbusiness.jpg'


// Importando Componente
import SecaoTextoImagem from '../../../SecaoTextoImagem/SecaoTextoImagem'
import Menu from '../../../Menu/Menu'
import BannerInicial from '../../../BannerInicial/BannerInicial'


import './MaisBusiness.css'
import BotaoSecundario from '../../../BotaoSecundario/BotaoSecundario'

const MaisBusiness = props => (
  <div className="maisbusiness">
    <Menu />

    <BannerInicial banner="maisbusiness">
      <h1>Mais Business</h1>
    </BannerInicial>

    <div className="container">
      <SecaoTextoImagem titulo="Como Funciona?" imagem={maisbusinessimagem}>
        <p>Aqui é foco em resultado meu bem! Este é o plano para quem está determinada em consolidar seu negócio, seu network, expor sua marca e atingir a alta performance com quem também tem o mesmo propósito!</p>

        <p>Aqui você terá:</p>
        <ul className="listaDonaTempo">
          <li>Conteúdo Mensal via email com uma Jornada de Conhecimento;</li>
          <li>Acesso a 1 café de negócio/mês</li>
          <li>Acesso ao grupo fechado de whatsapp, na sua cidade!</li>
          <li>Vai gerar conexões verdadeiras e de longo prazo</li>
          <li>Receberá uma trilha do conhecimento  através de uma série de 15 vídeos passando por 3 áreas da vida que irão te provocar!!</li>
          <li>Repost de seus Stories (seus produtos) pela embaixadora do Clube da Luluzinha.</li>
          <li>Desconto 20% em mentorias e consultorias</li>
          <li>Seu logo no Site do Clube  (aqui deixaria)</li>
          <li>No Plano de 08 meses = Ganha espaço em 1 workshop e 50% nos próximos 2, para colocar a vivencia da sua empresa</li>
          <li>No Plano de 12 meses = Ganha espaço em 3 workshop para colocar a vivencia da sua empresa</li>
          <li>30 minutos de palco para palestrar em 1 café de negócios (benefício limitado)</li>
          <li>10 min de palco para falar em um dos workshops que faremos na sua cidade. (benefício limitado)</li>
        </ul><br></br>

        <div className="formasAssinatura">
          <p>FORMAS DE ASSINATURA:</p>
          <p>Plano A: 6 meses (6x de R$ 349,00)</p>
          <p>Plano B: 12 meses (12x de R$ 299,90)</p>
        </div>
        
        <div className="areaBotoesPlano">
          <BotaoSecundario  textoBotao="Assinar 6 meses" linkBotaoSecundario="http://pag.ae/7VhoDb77H"/>
          <BotaoSecundario  textoBotao="Assinar 12 meses" linkBotaoSecundario="http://pag.ae/7VhoEkpnN"/>
        </div>
      </SecaoTextoImagem>
    </div>
  </div>
)

export default MaisBusiness