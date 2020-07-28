import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// Importando Data
import Eventos from '../../../Data/Eventos.json'
import './greiceEmbaixadora.css'

import Greice from '../../../Assets/embaixadoragreice.jpg'

// Importando componentes
import Embaixadora from '../../../Componentes/NossasEmbaixadoras/Embaixadora/Embaixadora'
import Menu from '../../../Componentes/Menu/Menu'
import BannerInicial from '../../../Componentes/BannerInicial/BannerInicial'
import Rodape from '../../../Componentes/Rodape/Rodape'
import Popup from '../../../Componentes/Popup/Popup'
import Flickity from 'react-flickity-component'
import ButtonLink from '../../../Componentes/ButtonLink/ButtonLink'
import Button from '../../../Componentes/Button/Button'

const GreiceEmbaixadora = props => {

  const arrayEmbaixadoras = ([
    { "id": 1, "imagem": Greice, "nome": "Greice Philippi", "cidade": "Rio do Sul - SC", "possuiEvento": true }
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
	<div className="GreiceEmbaixadora Embaixadora">
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
          <p>Apresentamos nossa embaixadora number 1: @greiceschaadephilippi </p>
          <p>E ter uma mulher dessas no nosso time de girls power é motivo de orgulho! Pra vcs tbém conhecerem um pouquinho mais dela, vejam só, ela é administradora, expert em gestão de pessoas, tem formação em coach humanístico internacional na Alemanha (onde vamos e venhamos, não entra qualquer um), é atuante na área de desenvolvimento, treinamento e comportamento humano! Ta bom ou quer mais!?</p>
          <p>Ser embaixadora requer lidar com pessoas e se tem uma coisa que a nossa embaixadora tem habilidade, é nisso!</p>
          <p>Bem vinda ao Clube da Luluzinha @greiceschaadephilippi Vc certamente vai somar junto a nós e engajar as empresarias de Rio do Sul com maestria! Se vc é empresária de Rio do Sul e região e quer ampliar o network empresarial e se desenvolver sob o guarda chuvas do Clube, junte-se a nós!!</p>
        </div>  
      </div>

      </div>

    <Rodape />
  </div>
  
  )
}
export default GreiceEmbaixadora