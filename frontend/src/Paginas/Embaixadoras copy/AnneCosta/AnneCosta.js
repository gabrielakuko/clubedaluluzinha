import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// Importando Data
import Eventos from '../../../Data/Eventos.json'
import './AnneCosta.css'

import Anne from '../../../Assets/Embaixadoras/embaixadoraanne.jpg'

// Importando componentes
import Embaixadora from '../../../Componentes/NossasEmbaixadoras/Embaixadora/Embaixadora'
import Menu from '../../../Componentes/Menu/Menu'
import BannerInicial from '../../../Componentes/BannerInicial/BannerInicial'
import Rodape from '../../../Componentes/Rodape/Rodape'
import Popup from '../../../Componentes/Popup/Popup'
import Flickity from 'react-flickity-component'
import ButtonLink from '../../../Componentes/ButtonLink/ButtonLink'
import Button from '../../../Componentes/Button/Button'

const AnneCosta = props => {

  const arrayEmbaixadoras = ([
    { "id": 4, "imagem": Anne, "nome": "Anne G. Costa", "cidade": "Aracaju - SE", "possuiEvento": true }
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
	<div className="AnneCosta Embaixadora">
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
          <p>A Anne veio da área da saúde pois é enfermeira de formação e desde sempre tinha o desejo de cuidar das pessoas. Mas pensa que ela só aplicava protocolos? Não “mobem”, ela veio de cargo de liderança em cima de cargo de liderança, galgando uma carreira que naturalmente já a estava levando a olhar para o empreendedorismo com mais carinho. Ela foi se qualificando nesse outro lado, com treinamentos e cursos voltados para Liderença de Autodesempenho, Autoconhecimento com técnicas de PNL, Gestão de Pessoas e Gestão da Qualidade.</p>
          <p>Quando conversamos com ela, o que veio foi: “Acredito que todos somos capazes de realizar nossos sonhos e nos tornarmos o que quisermos ser. Decidi empreender, por conta disso, saí da empresa que trabalhava. Daí a vontade de transformar a vida das pessoas através do Clube da Luluzinha.” É mole ou quer mais!? É com essas duas top profissionais que o Clube chega a Aracaju! Aguardem!!! Se vc é empresaria da região e quer alavancar negócios , vem com a gente!</p>
        </div>  
      </div>

      </div>

    <Rodape />
  </div>
  
  )
}
export default AnneCosta