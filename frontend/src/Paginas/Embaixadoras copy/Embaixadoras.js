import React, { useState } from 'react'
import { Link } from 'react-router-dom'


// Importando Imagens
import Anne from '../../Assets/Embaixadoras/embaixadoraanne.jpg'
import Jani from '../../Assets/embaixadorajanidemenezes.jpg'
import Charlene from '../../Assets/Embaixadoras/chaymoraes.jpg'
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
    { "id": 1, "imagem": Greice, "nome": "Greice Philippi", "cidade": "Rio do Sul - SC", "possuiEvento": true, "link": "/embaixadoras/greice" },
    { "id": 2, "imagem": Anne, "nome": "Anne G. Costa", "cidade": "Aracaju - SE", "possuiEvento": true, "link": "/embaixadoras/anne" },
    { "id": 3, "imagem": Charlene, "nome": "Charlene", "cidade": "Sto Amaro da Imperatriz - SC", "possuiEvento": true, "link": "/embaixadoras/charlene" },
    { "id": 4, "imagem": Jani, "nome": "Jani de Menezes", "cidade": "Chapeço - SC", "possuiEvento": true, "link": "/embaixadoras/jani" },
    { "id": 5, "imagem": Karine, "nome": "Karine Graeff", "cidade": "Balneário Camburiú - SC", "possuiEvento": true, "link": "/embaixadoras/karine" },
    { "id": 6, "imagem": Janaina, "nome": "Monique Nogueira", "cidade": "Blumenau - SC", "possuiEvento": true, "link": "/embaixadoras/monique" }

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
                      <Link to={{ pathname: '/contato', assunto: `${detalheEvento.dataEvento} - ${detalheEvento.nomeEvento}`, link: detalheEvento.linkEvento, embaixadora: detalheEvento.nomeEmbaixadora}} className="botaoAgenda" onClick={document.body.classList.remove("no-scroll")}>Inscreva-se</Link>
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
        <p>As Embaixadoras são mulheres que entendem a importância da autoridade social e network de negócios para alavancar sua visibilidade. 
        Elas compartilham do propósito em prol do empreendedorismo feminino em dar voz e visibilidade as mulheres, impulsionar negócios e network através de conexões verdadeiras.</p>

        <p>A Embaixadora dá sequencia a este propósito na sua região. Faz parte de um grupo seleto que nos representa enquanto licenciada do Clube da Luluzinha!</p> 

        <p>Uma vez embaixadora, ela tem novas oportunidades de receita, uma rede de relacionamentos forte e toda expertise do Clube para ser impulsionada. </p>

        <h2>Nossas Embaixadoras</h2>

        <div className="paginaEmbaixadoras">

          {arrayEmbaixadoras.map((embaixadora, index) => {
            if(embaixadora.possuiEvento) {
              return (
                <Embaixadora key={embaixadora.id} imagemEmbaixadora={embaixadora.imagem} descricaoImagem="Imagem da embaixadora Greice" nomeEmbaixadora={embaixadora.nome} cidadeEmbaixadora={embaixadora.cidade} idEmbaixadora={embaixadora.id}>
                  {/* <Button color="secondary" text="Eventos" onClick={() => {
                    setPopupState(true)
                    setId(embaixadora.id)
                  }} /> */}
                  <ButtonLink path={embaixadora.link} color="primary" text="Saiba Mais" />
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