import React, { useState } from 'react'
import './Home.css'

// Importando Imagens
import comoFunciona from '../../Assets/comofunciona.jpg'
import Fran from '../../Assets/embaixadorafran.jpg'
import Jani from '../../Assets/embaixadorajanidemenezes.jpg'
import Renata from '../../Assets/embaixadorarenatabrasilia.jpg'
import Greice from '../../Assets/embaixadoragreice.jpg'

// Importando componentes
import Menu from '../../Componentes/Menu/Menu'
import BannerInicial from '../../Componentes/BannerInicial/BannerInicial'
import SecaoTextoImagem from '../../Componentes/SecaoTextoImagem/SecaoTextoImagem'
import SecaoTextoImagemDireita from '../../Componentes/SecaoTextoImagemDireita/SecaoTextoImagemDireita'
import BotaoPrimario from '../../Componentes/BotaoPrimario/BotaoPrimario'
import BotaoSecundario from '../../Componentes/BotaoSecundario/BotaoSecundario'
import PlanosAssinatura from '../../Componentes/PlanosAssinatura/PlanosAssinatura'
import NossasEmbaixadoras from '../../Componentes/NossasEmbaixadoras/NossasEmbaixadoras'
import Embaixadora from '../../Componentes/NossasEmbaixadoras/Embaixadora/Embaixadora'
import Newsletter from '../../Componentes/Newsletter/Newsletter'
import Rodape from '../../Componentes/Rodape/Rodape'
import SecaoTime from '../../Componentes/SecaoTime/SecaoTime'
import Popup from '../../Componentes/Popup/Popup'


// Importando Data
import Eventos from '../../Data/Eventos.json'


const  Home = () => {

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
    <div className="Home">
      {popupAberto}

      <Menu />
      <BannerInicial titulo="Pensando fora da caixa
      e gerando negócios mundo afora." banner="foraDaCaixa"/>

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
          <BotaoSecundario  textoBotao="Nossas embaixadoras"/>
          <BotaoPrimario  textoBotao="Quer ser uma embaixadora?"/>
        </div>
        
      </div>
    </div>
      
      <SecaoTextoImagemDireita titulo="Está buscando escalar seus resultados?" imagem={comoFunciona}>
        <p><strong>Promovemos negócios com mulheres e entre elas!</strong></p>
        <p>Isso acontece de um lado, através de eventos de conteúdo rico, fomento de negócios e muito network de qualidade.  De outro, através das nossas vertentes de capital intelectual, através de consultorias e mentorias empresariais.</p>
        <p>Mas em ambos, através do empresariado que <strong>quer fazer acontecer!</strong></p>
        <BotaoPrimario  textoBotao="Conheça nossas mentorias"/>
      </SecaoTextoImagemDireita>

      <SecaoTime />

      <Newsletter />
      <Rodape />


    </div>
  );
}

export default Home
