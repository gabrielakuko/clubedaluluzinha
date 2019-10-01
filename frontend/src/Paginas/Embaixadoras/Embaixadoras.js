import React, { useState } from 'react'

// Importando Imagens
import Fran from '../../Assets/embaixadorafran.jpg'
import Jani from '../../Assets/embaixadorajanidemenezes.jpg'
import Renata from '../../Assets/embaixadorarenatabrasilia.jpg'
import Greice from '../../Assets/embaixadoragreice.jpg'
import Karine from '../../Assets/karine-graeff.jpg'
import Janaina from '../../Assets/janaina-rosa.jpg'
import Liana from '../../Assets/liana-de-brum.jpg'
import Moara from '../../Assets/moara-rocha.jpg'

// Importando componentes
import Embaixadora from '../../Componentes/NossasEmbaixadoras/Embaixadora/Embaixadora'
import Menu from '../../Componentes/Menu/Menu'
import BannerInicial from '../../Componentes/BannerInicial/BannerInicial'
import Newsletter from '../../Componentes/Newsletter/Newsletter'
import Rodape from '../../Componentes/Rodape/Rodape'
import Popup from '../../Componentes/Popup/Popup'
import Flickity from 'react-flickity-component'
import ButtonLink from '../../Componentes/ButtonLink/ButtonLink'
import Button from '../../Componentes/Button/Button'


import "flickity/css/flickity.css";

// Importando Data
import Eventos from '../../Data/Eventos.json'

import './Embaixadoras.css'

const Embaixadoras = props => {

  const arrayEmbaixadoras = ([
    { "id": 1, "imagem": Greice, "nome": "Greice Philippi", "cidade": "Rio do Sul - SC", "possuiEvento": true },
    { "id": 2, "imagem": Fran, "nome": "Fran de Morais", "cidade": "Blumenau - SC", "possuiEvento": true },
    { "id": 3, "imagem": Renata, "nome": "Renata", "cidade": "Brasília - DF", "possuiEvento": true },
    { "id": 4, "imagem": Jani, "nome": "Jani de Menezes", "cidade": "Chapeço - SC", "possuiEvento": true },
    { "id": 5, "imagem": Karine, "nome": "Karine Graeff", "cidade": "Balneário Cambúriu - SC", "possuiEvento": false },
    { "id": 6, "imagem": Janaina, "nome": "Janaina Rosa", "cidade": "Caixas do Sul - RS", "possuiEvento": false },
    { "id": 7, "imagem": Liana, "nome": "Liana de Brum", "cidade": "São José - SC", "possuiEvento": false },
    { "id": 8, "imagem": Moara, "nome": "Moara Rocha", "cidade": "Aracaju - SE", "possuiEvento": false }

  ]);

  const FlickityOptions = {
    wrapAround: true,
    adaptiveHeight: true
  };

  const [abrirPopup, setPopupState] = useState(false)
  const [embaixadoraId, setId] = useState(0)

  let popupAberto

  if (abrirPopup) {
    popupAberto =
      <Popup fecharPopup={() => setPopupState(false)} tituloPopup="Agenda de Eventos">
        <Flickity
          className={'carousel'}
          elementType={'div'}
          disableImagesLoaded={false}
          options={FlickityOptions}
          reloadOnUpdate
          static
        >
          {
            Eventos.map((detalheEvento, index) => {
              let idAtual = embaixadoraId
              if (idAtual === detalheEvento.idEmbaixadora) {
                return (
                  <div key={index} className="carousel-cell agenda">
                    <div className="itemAgenda">
                      <h4>{detalheEvento.dataEvento} - {detalheEvento.nomeEvento}</h4>
                      <p>{detalheEvento.resumoEvento}</p>
                      <a href={detalheEvento.linkEvento} className="botaoAgenda">Inscreva-se</a>
                    </div>
                  </div>
                )
              }
              return '';
            })
          }
        </Flickity>
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
        <p>As Embaixadoras são licenciadas do Clube que <b>replicam o nosso trabalho mundo a fora.</b></p>
        <p>Elas desenvolvem nosso formato de eventos, engajam o empresariado feminino a fomentar mais e mais negócios, desenvolvem o mindset de todas que estão sob o guarda-chuvas do Clube, bem como são mentoradas para <b>atingir resultados de alta performance.</b></p>
        <p>Para se tornar uma Embaixadora, a candidata passa pelo crivo das nossas conselheiras para identificarmos se ela <b>compartilha do perfil e dos objetivos do Clube.</b> </p>
        <p>Uma vez alinhados, ela adquire uma licença anual para fomentar o formato de negócios  na sua cidade e ser uma de nossas líderes oficiais.</p>

        <p>Se identificou? Então vem fazer parte do time do nosso time de Embaixadoras Licenciadas!</p>
        <p>Entre em contato que conversamos para te explicar bem detalhadamente como funciona e o quanto podemos evoluir juntas!</p>

        <h2>Nossas Embaixadoras</h2>

        <div className="paginaEmbaixadoras">

          {arrayEmbaixadoras.map((embaixadora, index) => {
            if(embaixadora.possuiEvento) {
              return (
                <Embaixadora key={embaixadora.id} imagemEmbaixadora={embaixadora.imagem} descricaoImagem="Imagem da embaixadora Greice" nomeEmbaixadora={embaixadora.nome} cidadeEmbaixadora={embaixadora.cidade} idEmbaixadora={embaixadora.id}>
                  <Button color="secondary" text="Eventos" onClick={() => {
                    setPopupState(true)
                    setId(embaixadora.id)
                  }} />
                </Embaixadora>
              )
            }
            else {
              return (
                <Embaixadora key={embaixadora.id} imagemEmbaixadora={embaixadora.imagem} descricaoImagem="Imagem da embaixadora Greice" nomeEmbaixadora={embaixadora.nome} cidadeEmbaixadora={embaixadora.cidade} idEmbaixadora={embaixadora.id} />
              )
            }
            
          })}

        </div>

        <div className="botaoEmbaixadoras">
          <ButtonLink color="primary" text="Quer ser uma embaixadora?" path="/contato" tipo="link"/>
        </div>


      </div>

      <Newsletter />
      <Rodape />

    </div>
  )
}

export default Embaixadoras