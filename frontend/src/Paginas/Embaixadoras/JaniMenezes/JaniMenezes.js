import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// Importando Data
import Eventos from '../../../Data/Eventos.json'
import './JaniMenezes.css'

import Jani from '../../../Assets/embaixadorajanidemenezes.jpg'

// Importando componentes
import Embaixadora from '../../../Componentes/NossasEmbaixadoras/Embaixadora/Embaixadora'
import Menu from '../../../Componentes/Menu/Menu'
import BannerInicial from '../../../Componentes/BannerInicial/BannerInicial'
import Rodape from '../../../Componentes/Rodape/Rodape'
import Popup from '../../../Componentes/Popup/Popup'
import Flickity from 'react-flickity-component'
import ButtonLink from '../../../Componentes/ButtonLink/ButtonLink'
import Button from '../../../Componentes/Button/Button'

const JaniMenezes = props => {

  const arrayEmbaixadoras = ([
    { "id": 4, "imagem": Jani, "nome": "Jani de Menezes", "cidade": "Chapeço - SC", "possuiEvento": true }
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
	<div className="JaniMenezes Embaixadora">
    {popupAberto}
    <Menu />
    <div className="landingEmbaixadora container">
      <Link to="/embaixadoras" className="linkVoltaEmbaixadoras">Voltar para embaixadoras</Link>
      <div className="textoEventosEmbaixadora">
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
        <div className="textoEmbaixadora">
          <p>Lhes apresentamos nossa embaixadora de Chapecó: @janidemenezes e ter uma mulher dessas no nosso time de girls power é top demais!</p> 
          <p>Pra vcs tbem conhecerem um pouquinho mais da Jani, a gente conta: ela é Advogada por formação mas sempre teve o empreendedorismo correndo nas veias! Aos 19 anos pediu para ser emancipada (é mole ou quer mais?) saiu de casa e foi em busca da sua independência por conta própria!</p> 
          <p>Foi conquistando seu espaço e suas coisas com muito trabalho e vontade de fazer acontecer! Nessa caminhada passou por altos e baixos bem “punks” mas nunca baixou a cabeça, seguiu decidida!. Sim, ela é dessas que persistem! Um salve a elas!</p>
          <p>Hj ela é mãe, empresária e mulher com M maiúsculo! Mais do que nunca está engajada em conquistar espaço e uma vida empreendedora com propósito junto a nós! ⚜️⚜️. Seja bem vinda @janidemenezes vc certamente vai somar imensamente conosco e junto as empresárias do oeste de SC!</p>
          <p>Se vc tbem ficou com vontade de fazer parte, vem com a gente!</p>
        </div>  
      </div>

      </div>

    <Rodape />
  </div>
  
  )
}
export default JaniMenezes