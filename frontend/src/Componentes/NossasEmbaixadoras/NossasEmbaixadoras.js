import React, { useState } from 'react'

// Importando Imagens
import Fran from '../../Assets/embaixadorafran.jpg'
import Jani from '../../Assets/embaixadorajanidemenezes.jpg'
import Renata from '../../Assets/embaixadorarenatabrasilia.jpg'
import Greice from '../../Assets/embaixadoragreice.jpg'

// Importando componentes
import BotaoPrimario from '../BotaoPrimario/BotaoPrimario'
import BotaoSecundario from '../BotaoSecundario/BotaoSecundario'
import Embaixadora from './Embaixadora/Embaixadora'
import Popup from '../../Componentes/Popup/Popup'


import './NossasEmbaixadoras.css'

// Importando Data
import Eventos from '../../Data/Eventos.json'

const NossasEmbaixadoras = props => {

  const arrayEmbaixadoras  = ([
    {"id": 1, "imagem": Greice, "nome": "Greice Maria", "cidade": "Rio do Sul - SC"},
    {"id": 2, "imagem": Fran, "nome": "Fran de Morais", "cidade": "Blumenau - SC"},
    {"id": 3, "imagem": Renata, "nome": "Renata", "cidade": "Brasília - DF"}  
  ])

  const [abrirPopup, setPopupState] = useState(true)
  const [embaixadoraId, setId] = useState(0)

    let popupAberto

    if(abrirPopup) {
      popupAberto = 
      <Popup fecharPopup={() => setPopupState(false)}>
        {Eventos.map((detalheEvento, index) => {
          let idAtual = embaixadoraId
          if ( idAtual == detalheEvento.idEmbaixadora) {
            return (
              <div className="agenda">
                <div className="itemAgenda">
                  <h4>{detalheEvento.dataEvento} - {detalheEvento.nomeEvento}</h4>
                  <p>{detalheEvento.resumoEvento}</p>
                  <a href={detalheEvento.linkEvento} className="botaoAgenda">Inscreva-se</a>
                </div>
              </div>
              
            )
          }
        })} 
      </Popup> 
    }

  return (
    <div className="nossasEmbaixadoras">
      {popupAberto}
      <div className="container">
        <h2>Nossas Embaixadoras</h2>
        <div className="chamadaEmbaixadoras">
          <p>As Embaixadoras são licenciadas do Clube que replicam o nosso trabalho mundo a fora.</p>

          <p>Elas desenvolvem nosso formato de eventos, engajam o empresariado feminino a fomentar mais e mais negócios, desenvolvem o mindset de todas que estão sob o guarda-chuvas do Clube, bem como são mentoradas para atingir resultados de alta performance.</p>

          <p>Para se tornar uma Embaixadora, a candidata passa pelo crivo das nossas conselheiras para identificarmos se ela compartilha do perfil e dos objetivos do Clube.</p>

          <p>Uma vez alinhados, ela adquire uma licença anual para fomentar o formato de negócios  na sua cidade e ser uma de nossas líderes oficiais.</p>
        </div>

        <div className="areaEmbaixadoras">

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
        <div className="botoesEmbaixadoras">
          <BotaoSecundario  textoBotao="Nossas embaixadoras"/>
          <BotaoPrimario  textoBotao="Quer ser uma embaixadora?"/>
        </div>
        
      </div>
    </div>
  )
}

export default NossasEmbaixadoras