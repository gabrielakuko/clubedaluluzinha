import React, { useState } from 'react'

// Importando Imagens
import Fran from '../../Assets/embaixadorafran.jpg'
import Jani from '../../Assets/embaixadorajanidemenezes.jpg'
import Renata from '../../Assets/embaixadorarenatabrasilia.jpg'
import Greice from '../../Assets/embaixadoragreice.jpg'

// Importando componentes
import BotaoPrimario from '../../Componentes/BotaoSecundario/BotaoSecundario'
import BotaoSecundario from '../../Componentes/BotaoSecundario/BotaoSecundario'
import Embaixadora from '../../Componentes/NossasEmbaixadoras/Embaixadora/Embaixadora'
import Menu from '../../Componentes/Menu/Menu'
import BannerInicial from '../../Componentes/BannerInicial/BannerInicial'
import Newsletter from '../../Componentes/Newsletter/Newsletter'
import Rodape from '../../Componentes/Rodape/Rodape'
import Popup from '../../Componentes/Popup/Popup'
import Slider from '../../Componentes/Slide/Slide'

// Importando Data
import Eventos from '../../Data/Eventos.json'

import './Embaixadoras.css'

const Embaixadoras = props => {

  const arrayEmbaixadoras  = ([
    {"id": 1, "imagem": Greice, "nome": "Greice Maria", "cidade": "Rio do Sul - SC"},
    {"id": 2, "imagem": Fran, "nome": "Fran de Morais", "cidade": "Blumenau - SC"},
    {"id": 3, "imagem": Renata, "nome": "Renata", "cidade": "Brasília - DF"},
    {"id": 4, "imagem": Jani, "nome": "Jani de Menezes", "cidade": "Chapeço - SC"}
  ])

  const [abrirPopup, setPopupState] = useState(false)
  const [embaixadoraId, setId] = useState(0)

    let popupAberto

    if(abrirPopup) {
      popupAberto = 
      <Popup fecharPopup={() => setPopupState(false)}>
        {/* <Slider
          options={{
          autoPlay: 4000,
          pauseAutoPlayOnHover: true,
          wrapAround: true,
          fullscreen: false,
          adaptiveHeight: false,
          }}
          >
          {Eventos.map((evento, index) => {
            let idAtual = embaixadoraId
            if ( idAtual == detalheEvento.idEmbaixadora) {
              return (
                <div className="agenda">
                  <div className="itemAgenda" key={index}>
                    <h4>{detalheEvento.dataEvento} - {detalheEvento.nomeEvento}</h4>
                    <p>{detalheEvento.resumoEvento}</p>
                    <a href={detalheEvento.linkEvento} className="botaoAgenda">Inscreva-se</a>
                  </div>
                </div>
                
              )
            }
          })} 
        </Slider> */}
        <Slider
          options={{
          autoPlay: 4000,
          pauseAutoPlayOnHover: true,
          wrapAround: true,
          fullscreen: true,
          adaptiveHeight: false,
          }}
          >
          {Eventos.map((evento, index) => {
            let idAtual = embaixadoraId
            if ( idAtual == evento.idEmbaixadora) {
            return (
              <div className="agenda">
                <div className="itemAgenda" key={index}>
                  <h4>{evento.dataEvento} - {evento.nomeEvento}</h4>
                  <p>{evento.resumoEvento}</p>
                  <a href={evento.linkEvento} className="botaoAgenda">Inscreva-se</a>
                </div>
              </div>
              )
            }
          })}
        
        </Slider>
      </Popup> 
    }
    

  return (
    <div className="embaixadoras">

      {popupAberto}

      <Menu />

      <BannerInicial banner="embaixadoras">
        <h1>Quem nos <strong>ajuda</strong><br></br>a fazer a<strong> diferença</strong></h1>
      </BannerInicial>

      <div className="container">

          <h2>Nossas Embaixadoras</h2>

          <div className="paginaEmbaixadoras">

          {arrayEmbaixadoras.map((embaixadora, index) => {
            return (
              <Embaixadora key={embaixadora.id} imagemEmbaixadora={embaixadora.imagem} descricaoImagem="Imagem da embaixadora Greice" nomeEmbaixadora={embaixadora.nome} cidadeEmbaixadora={embaixadora.cidade} idEmbaixadora={embaixadora.id} 
              funcoes={() => {
                setPopupState(true)
                setId(embaixadora.id)
              }} /> 
            )
          })} 
            
          </div>
          
      </div>

      <Newsletter />
      <Rodape />

    </div>
  )
}

export default Embaixadoras