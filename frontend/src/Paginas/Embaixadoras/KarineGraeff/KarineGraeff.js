import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// Importando Data
import Eventos from '../../../Data/Eventos.json'
import './KarineGraeff.css'

import Karine from '../../../Assets/karine-graeff.jpg'

// Importando componentes
import Embaixadora from '../../../Componentes/NossasEmbaixadoras/Embaixadora/Embaixadora'
import Menu from '../../../Componentes/Menu/Menu'
import BannerInicial from '../../../Componentes/BannerInicial/BannerInicial'
import Rodape from '../../../Componentes/Rodape/Rodape'
import Popup from '../../../Componentes/Popup/Popup'
import Flickity from 'react-flickity-component'
import ButtonLink from '../../../Componentes/ButtonLink/ButtonLink'
import Button from '../../../Componentes/Button/Button'

const KarineGraeff = props => {

  const arrayEmbaixadoras = ([
    { "id": 5, "imagem": Karine, "nome": "Karine Graeff", "cidade": "Balneário Camburiú - SC", "possuiEvento": true}
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
	<div className="KarineGraeff Embaixadora">
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
          <p>Lhes apresentamos nossa embaixadora de Balneário Camboriú @karineetulio </p>
          <p>Ela chega com tudo para somar ao nosso time de girls power e já chegou mostrando que resiliência é com ela mesmoooo! Sabe pq?
          Vou contar pra vcs terem uma noção do poder desta mulher: quando apresentamos o plano de negócios e a proposta de licença para ser embaixadora, ela pensou. Estava a algumas horas de decidir quando ficou sabendo que estava com problema de saúde e precisaria fazer uma grande cirurgia e isso demandaria tempo, $ e uma recuperação cuidadosa.</p>
          <p>Vcs pensam que ela se abalou? Não “mo’bem”! Ela trabalhou até o dia da operação em questão! E pensa que ela deixou a ideia de ser a embaixadora por causa disso? Muito menos! A gente pensou: “Bom, ela precisa se recuperar e se não der pra ser ela, paciência, afinal saúde em primeiro lugar”. Mas ela foi enfática: “Meninas, a embaixadora de BC serei eu e sei disso desde o primeiro dia que as conheci! 
          Precisa mais!?</p>
          <p>Então toma mais...heheheh...não bastasse ela já ser uma mulher de pro-atividade na veia, ela ainda tem um currículo todo recheado de competências: a bendita é especialista em gestão da produtividade, mkt, vendas, supervisão de metas, orientadora e coord. de cursos para gestão de negócios, gestão de pessoas. Tem mais de 20 anos em gestão de equipes e é trainee de alta performance. É mole? 
          Ser embaixadora requer ser uma mulher pró-ativa, buscar fazer acontecer e isso ela já mostrou que faz com uma mão nas costas...hehheheheh. </p>
          <p>Bem vinda ao Clube da Luluzinha @karineetulio Vc certamente vai somar junto a nós e engajar as empresarias de Balneário Camboriú com maestria!⚜⚜. Se vc é empresária de BC e quer ampliar o network empresarial e se desenvolver sob o guarda chuvas do Clube, junte-se a nós!!. 
          </p>
        </div>  
      </div>

      </div>

    <Rodape />
  </div>
  
  )
}
export default KarineGraeff