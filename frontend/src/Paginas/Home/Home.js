import React, { useState } from 'react'

import './Home.css'

// Importando Imagens
import comoFunciona from '../../Assets/comofunciona.jpg'
import escalarResultados from '../../Assets/escalarseusresultados.jpg'
import Fran from '../../Assets/embaixadorafran.jpg'
import Renata from '../../Assets/embaixadorarenatabrasilia.jpg'
import Greice from '../../Assets/embaixadoragreice.jpg'

// Importando componentes
import Menu from '../../Componentes/Menu/Menu'
import BannerInicial from '../../Componentes/BannerInicial/BannerInicial'
import SecaoTextoImagem from '../../Componentes/SecaoTextoImagem/SecaoTextoImagem'
import SecaoTextoImagemDireita from '../../Componentes/SecaoTextoImagemDireita/SecaoTextoImagemDireita'
import PlanosAssinatura from '../../Componentes/PlanosAssinatura/PlanosAssinatura'
import Embaixadora from '../../Componentes/NossasEmbaixadoras/Embaixadora/Embaixadora'
import Newsletter from '../../Componentes/Newsletter/Newsletter'
import Rodape from '../../Componentes/Rodape/Rodape'
import SecaoTime from '../../Componentes/SecaoTime/SecaoTime'
import Popup from '../../Componentes/Popup/Popup'
import Flickity from 'react-flickity-component'
import "flickity/css/flickity.css"


// Importando Data
import Eventos from '../../Data/Eventos.json'
import Button from '../../Componentes/Button/Button'
import ButtonLink from '../../Componentes/ButtonLink/ButtonLink'


const Home = () => {

  const arrayEmbaixadoras = ([
    { "id": 1, "imagem": Greice, "nome": "Greice Maria", "cidade": "Rio do Sul - SC" },
    { "id": 2, "imagem": Fran, "nome": "Fran de Morais", "cidade": "Blumenau - SC" },
    { "id": 3, "imagem": Renata, "nome": "Renata", "cidade": "Brasília - DF" },
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
    <div className="Home">
      <Menu />
      {popupAberto}

      <BannerInicial banner="foraDaCaixa">
        <h1>Pensando <strong>fora da caixa</strong><br></br>e gerando negócios <strong> mundo afora.</strong></h1>
      </BannerInicial>

      <SecaoTextoImagem titulo="Como Funciona?" imagem={comoFunciona}>
        <p><strong>Promovemos negócios com mulheres e entre elas!</strong></p>
        <p>Isso acontece de um lado, através de eventos de conteúdo rico, fomento de negócios e muito network de qualidade.  De outro, através das nossas vertentes de capital intelectual, através de consultorias e mentorias empresariais.</p>
        <p>Mas em ambos, através do empresariado que <strong>quer fazer acontecer!</strong></p>
      </SecaoTextoImagem>

      <PlanosAssinatura />

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
            <ButtonLink color="secondary" text="Nossas embaixadoras" path="/embaixadoras" tipo="link"/>
            <ButtonLink color="primary" text="Quer ser uma embaixadora?" path="/contato" tipo="link"/>
          </div>

        </div>
      </div>

      <SecaoTextoImagemDireita titulo="Está buscando escalar seus resultados?" imagem={escalarResultados}>
        <p><b>Quer se destacar no que faz?</b></p>
        <p>Nossas mentorias são a melhor opção para quem deseja escalar seus resultados e ser provocado a sair da zona de conforto, em busca de melhores resultados.</p>
        <p>É hora de mostrar para o mundo <b>toda a sua força!</b></p>
        <ButtonLink color="primary" text="Conheça nossas mentorias" tipo="link" path="/mentorias" />
      </SecaoTextoImagemDireita>

      <SecaoTime />

      <Newsletter />
      <Rodape />


    </div>
  );
}

export default Home
