import React from 'react'

import tenhoasasimagem from '../../../../Assets/tenhoasas.jpg'


// Importando Componente
import SecaoTextoImagem from '../../../SecaoTextoImagem/SecaoTextoImagem'
import Menu from '../../../Menu/Menu'
import BannerInicial from '../../../BannerInicial/BannerInicial'


import './TenhoAsas.css'
import BotaoSecundario from '../../../BotaoSecundario/BotaoSecundario'

const TenhoAsas = props => (
  <div className="tenhoasas">
    <Menu />

    <BannerInicial banner="tenhoasas">
      <h1>Tenho Asas</h1>
    </BannerInicial>

    <div className="container">
      <SecaoTextoImagem titulo="Como Funciona?" imagem={tenhoasasimagem}>
        <p>Aqui vamos te provocar a sair do casulo.</p>

        <p>A frase que prega que “você é a média das 5 pessoas que mais convive” pode ter virado clichê mas você vai entender que estar perto de pessoas de alta performance de fato vai te ajudar a voar mais alto.</p>

        <p>Depois de virar borboleta, você não vai mais pensar no casulo.</p>

        <p>Aqui você terá:</p>
        <ul className="listaDonaTempo">
          <li>Conteúdo Mensal via email com uma Jornada de Conhecimento;</li>
          <li>Acesso a 1 café de negócio/mês</li>
          <li>Acesso ao grupo fechado de whatsapp, na sua cidade!</li>
          <li>Vai gerar conexões verdadeiras e de longo prazo</li>
          <li>Receberá uma trilha do conhecimento, através de uma série de 15 vídeos passando por 3 áreas da vida que irão te provocar!!</li>
          <li>Repost de seus Stories (seus produtos) pela embaixadora do Clube da Luluzinha.</li>
          <li>Desconto de 50% nos próximos 3 Workshops em sua cidade (benefício limitado)</li>
          <li>Desconto 20% em mentorias e consultorias</li>
        </ul><br></br>

        <div className="formasAssinatura">
          <p>FORMAS DE ASSINATURA:</p>
          <p>Plano A: 6 meses (6x de R$ 235,00)</p>
          <p>Plano B: 12 meses (12x de R$ 199,90)</p>
        </div>
        
        <div className="areaBotoesPlano">
          <BotaoSecundario  textoBotao="Assinar 6 meses" linkBotaoSecundario="http://pag.ae/7VhoyakEq"/>
          <BotaoSecundario  textoBotao="Assinar 12 meses" linkBotaoSecundario="http://pag.ae/7VhoBs6g5"/>
        </div>
        
      </SecaoTextoImagem>
    </div>
  </div>
)

export default TenhoAsas