import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// Importando Data
import Eventos from '../../../Data/Eventos.json'
import './CharleneMoraes.css'

import Charlene from '../../../Assets/Embaixadoras/chaymoraes.jpg'

// Importando componentes
import Embaixadora from '../../../Componentes/NossasEmbaixadoras/Embaixadora/Embaixadora'
import Menu from '../../../Componentes/Menu/Menu'
import BannerInicial from '../../../Componentes/BannerInicial/BannerInicial'
import Rodape from '../../../Componentes/Rodape/Rodape'
import Popup from '../../../Componentes/Popup/Popup'
import Flickity from 'react-flickity-component'
import ButtonLink from '../../../Componentes/ButtonLink/ButtonLink'
import Button from '../../../Componentes/Button/Button'

const CharleneMoraes = props => {

  const arrayEmbaixadoras = ([
    { "id": 4, "imagem": Charlene, "nome": "Charlene Moraes da Silva", "cidade": "Santo Amaro da Imperatriz - SC", "possuiEvento": true }
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
	<div className="CharleneMoraes Embaixadora">
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
          <p>A manezinha que chega com todo gás para somar lindamente junto ao nosso time de girls power não perde tempo e já chegou agitando o empresariado da região. Bem do jeitinho que a gente gosta, fazendo acontecer! </p>
          <p>Pra vcs tbém conhecerem um pouquinho mais sobre a Chay, a gente conta:
          Ela é formada em adm e já é empresária desde os 18 anos. Porém, somente há 6 anos atrás identificou seu real propósito de vida, o que faz seu coração sorrir: VIVER COM SAÚDE E BEM ESTAR ATRAVÉS DAS CONEXÕES COM A NATUREZA e levar esse sentir também à outras pessoas.</p>
          <p>A partir disso iniciou sua virada empresarial. Resolveu mudar de vida e de cidade. Foi para Sto Amaro da Imperatriz, se tornou Terapeuta Natural e hoje virou referência no assunto, onde já soma formação em + de 20 tecnicas terapêuticas e já está construindo seu próprio spa terapêutico! É mole? ⚜️⚜️. Isso era Spolier....pronto, falei! </p>
          <p>Hoje ela se considera uma Mulher Medicina: "Mulheres fortes que nutrem o coração daqueles que cruzam o seu caminho. A Mulher Medicina é aquela cuja energia é contagiante. Traz consigo uma energia transformadora e uma aura extremamente magnética que a ajuda a cumprir o seu propósito. Ela nos dá força e alento para reconhecer os nossos dons e foco para atingirmos as nossas metas.”</p>
          <p>Ela é daquelas pessoas que só de estar perto vc já se sente em paz....Mas pensa que por isso ela é calmaria? Não “mobem”, ela é um turbilhão em uma só. Tanto que amanhã a Chay já realiza o seu primeiro Café de Negócios enquanto Embaixadora Oficial e a gente tá que é um orgulho só! </p>
          <p>Se vc é empresária da região e quer impulsionar negócios, vem com a gente amanhã. Segue a @chaymoraesterapeuta Será o start de muitas conexões, vem com a gente!!!
          </p>
        </div>  
      </div>

      </div>

    <Rodape />
  </div>
  
  )
}
export default CharleneMoraes