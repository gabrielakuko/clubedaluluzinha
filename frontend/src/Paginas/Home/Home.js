import React, { useState } from 'react'

import './Home.css'

// Importando Imagens
import comoFunciona from '../../Assets/comofunciona.jpg'
import escalarResultados from '../../Assets/escalarseusresultados.jpg'
import Fran from '../../Assets/embaixadorafran.jpg'
import Jani from '../../Assets/embaixadorajanidemenezes.jpg'
import Renata from '../../Assets/embaixadorarenatabrasilia.jpg'
import Greice from '../../Assets/embaixadoragreice.jpg'
import Karine from '../../Assets/karine-graeff.jpg'
import Janaina from '../../Assets/janaina-rosa.jpg'

// Importando ícones
import Group from '../../Assets/Icones/group.png'
import Data from '../../Assets/Icones/data.png'
import Globo from '../../Assets/Icones/globo.png'

// Importando imagens parceiros
import Labra from '../../Assets/Parceiros/labra.png'

// Importando imagens depoimentos
import Elisa from '../../Assets/Depoimentos/elisa.jpg'
import FranDepo from '../../Assets/Depoimentos/fran.jpg'
import LuizaChai from '../../Assets/Depoimentos/luiza-chai.jpg'
import Gi from '../../Assets/Depoimentos/gi.jpg'

// Importando componentes
import Menu from '../../Componentes/Menu/Menu'
import BannerInicial from '../../Componentes/BannerInicial/BannerInicial'
import SecaoTextoImagem from '../../Componentes/SecaoTextoImagem/SecaoTextoImagem'
import SecaoTextoImagemDireita from '../../Componentes/SecaoTextoImagemDireita/SecaoTextoImagemDireita'
//import PlanosAssinatura from '../../Componentes/PlanosAssinatura/PlanosAssinatura'
import Embaixadora from '../../Componentes/NossasEmbaixadoras/Embaixadora/Embaixadora'
import Rodape from '../../Componentes/Rodape/Rodape'
import SecaoTime from '../../Componentes/SecaoTime/SecaoTime'
import Popup from '../../Componentes/Popup/Popup'
import Icone from '../../Componentes/IconesTexto/iconesTexto'
import IconeParceiro from '../../Componentes/IconesParceiros/iconesParceiros'
import Depoimentos from '../../Componentes/Depoimentos/depoimentos'
import Flickity from 'react-flickity-component'
import "flickity/css/flickity.css"


// Importando Data
import Eventos from '../../Data/Eventos.json'
//import Button from '../../Componentes/Button/Button'
import ButtonLink from '../../Componentes/ButtonLink/ButtonLink'


const Home = () => {

  const arrayEmbaixadoras = ([
    { "id": 1, "imagem": Greice, "nome": "Greice Philippi", "cidade": "Rio do Sul - SC", "possuiEvento": true },
    { "id": 2, "imagem": Fran, "nome": "Fran de Morais", "cidade": "Blumenau - SC", "possuiEvento": true },
    { "id": 3, "imagem": Renata, "nome": "Renata", "cidade": "Brasília - DF", "possuiEvento": true },
    { "id": 4, "imagem": Jani, "nome": "Jani de Menezes", "cidade": "Chapeço - SC", "possuiEvento": true },
    { "id": 5, "imagem": Karine, "nome": "Karine Graeff", "cidade": "Balneário Camburiú - SC", "possuiEvento": true },
    { "id": 6, "imagem": Janaina, "nome": "Janaina Rosa", "cidade": "Caixas do Sul - RS", "possuiEvento": false },
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

      <BannerInicial banner="bannerHome">
        <h1>O nosso <strong>sucesso</strong><br></br>é o <strong> DELAS!</strong></h1>
      </BannerInicial>

      <SecaoTextoImagem titulo="Como Funciona?" imagem={comoFunciona}>
        <p><strong>Promovemos negócios com mulheres e entre elas!</strong></p>
        <p>O Clube da Luluzinha é uma empresa que nasceu com o propósito de impulsionar o empreendedorismo feminino promovendo  negócios e desenvolvimento com mulheres e entre elas!</p>

        <p>Isso acontece de um lado, através de Workshops em formato Experience Learning, através  de técnicas aplicáveis de formação empresarial, conteúdo rico, fomento de negócios e muito network de qualidade pelas diversas cidades do país.</p>

        <p>De outro, através das nossas vertentes de capital intelectual, cursos on line, presenciais, consultorias e mentorias empresariais. </p>

        <p>Geração de negócios, desenvolvimento, parcerias, conexões, inspiração e conhecimento é o que oferecemos a todas as participantes do Clube da Luluzinha!</p><p><strong>Seja parte deste time! </strong></p>

      </SecaoTextoImagem>

      {/* Planos de Assinatura desativados */}
      {/* <PlanosAssinatura /> */}

      <div className="nossasEmbaixadoras">
        {popupAberto}
        <div className="container">
          <h2>Nossas Embaixadoras</h2>
          <div className="chamadaEmbaixadoras">
            <p>As Embaixadoras são licenciadas do Clube que replicam o nosso trastrongalho mundo a fora.</p>
            <p>Elas desenvolvem nosso formato de  Workshops em formato Experience Learning, engajam o empresariado feminino a fomentar mais e mais negócios, desenvolvem o mindset de todas que estão sob o guarda-chuvas do Clube, bem como são mentoradas para atingir resultados de alta performance.</p>
            <p>O Clube da Luluzinha, será sua plataforma de autoridade social, onde vamos alavancar sua visibilidade, e assim gerarmos ainda mais negócios.</p>
            <p>Para se tornar uma Embaixadora, a candidata passa pelo crivo das nossas conselheiras para identificarmos se ela compartilha do perfil e dos objetivos do Clube.</p>
            <p>Uma vez alinhados, ela adquire uma licença anual para fomentar o formato de negócios na sua cidade e ser uma de nossas líderes oficiais.</p>
          </div>

          <div className="areaEmbaixadoras">

            {arrayEmbaixadoras.map((embaixadora, index) => {
              return (
                <Embaixadora key={embaixadora.id} imagemEmbaixadora={embaixadora.imagem} descricaoImagem="Imagem da embaixadora Greice" idEmbaixadora={embaixadora.id}
                  funcoes={() => {
                    setPopupState(true)
                    setId(embaixadora.id)
                  }} />
              )
            })}

          </div>
          <div className="botoesHomeColunas" id="botoesEmbaixadoras">
            <ButtonLink color="secondary" text="Conheça nossas embaixadoras" path="/embaixadoras" tipo="link"/>
            <ButtonLink color="primary" text="Quer ser uma embaixadora?" path="/contato" tipo="link"/>
          </div>

        </div>
      </div>

      <div className="homeWorkshops">
        <div className="container">
          <h3>Workshops</h3>
          <h2>Vai lá e faz!</h2>
          <div className="tiposWorkshop">
            <p>Formação Empresarial</p>
            <p>Experiencie Learning</p>
          </div>
          <div className="impactosWorkshop">
            <Icone icone={Group} altIcone="Icone pessoas reunidas" titulo="+400" descricao="Empresários Monitorados"/>
            <Icone icone={Data} altIcone="Icone pessoas reunidas" titulo="+1000" descricao="Negócios Diagnosticados"/>
            <Icone icone={Globo} altIcone="Icone pessoas reunidas" titulo="+750" descricao="Planos de Negócios"/>
          </div>
          <div className="chamadaWorkshops">
            <p>A sua empresa vai aprender, vai aplicar e sair pronta para escalar muito mais resultados!</p>
            <p>Entusiastas de uma nova forma de educação, usamos a metodologia Experience Learning: um mash-up entre conceitos clássicos e movimentos contemporâneos de aprender fazendo!</p>
            <p>Levamos para a sua empresa conteúdos relevantes, de maneira original e que fogem do lugar comum por serem passados de forma leve, divertida e com muita mão na massa através de um grande evento de formação que gera conexões, network e muitos negócios!</p>
          </div>
          <div className="botoesHomeColunas">
            <ButtonLink color="primaryDark" text="Conheça nossos Workshops" path="/workshops" tipo="link"/>
          </div>

        </div>
      </div>

      <SecaoTextoImagemDireita titulo="Está buscando escalar seus resultados?" imagem={escalarResultados}>
        <p><b>Nossa meta é te levar ao próximo nível!</b></p>
        <ul>
          <li>Transforme sua empresa para aumentar seu resultado e ser verdadeiramente lucrativa.</li> 
          <li>Desenvolva suas estratégias de vendas e marketing. Alavanque seu negócio com as mais consolidadas estratégias centradas no cliente.</li>
          <li>Lidere com excelência na execução, lucratividade e crescimento.</li>
        </ul>
        <p>Ministradas pelas fundadoras do Clube da Luluzinha Daiane e Paula e direcionadas para empresárias que buscam uma solução de rápida implementação, nossas mentorias irão lhe provocar a sair da zona de conforto rumo a alta performance.</p>
        <p>Cada uma delas é preparada com base na expertise delas que vieram do mundo corporativo por mais de 15 anos e já impactaram mais de 10.000 mulheres e impulsionaram negócios com mais de 400 empresas do universo feminino.</p>
        <ButtonLink color="primary" text="Conheça nossas mentorias" tipo="link" path="/mentorias" />
      </SecaoTextoImagemDireita>

      <SecaoTime />

      <div className="parceirosClube container">
        <h2>Parceiros Clube da Luluzinha</h2>
        <h3>Conectar empresas e soluções faz parte de nosso dna</h3>

        <p>Para o Clube da Luluzinha, empresa parceira deve ser aquela capaz de complementar negócios a agregar valor.  Por isso temos orgulho em tê-las conosco e te dizer que cada uma tem um trabalho de alta competência que a gente utiliza, curte e indica.</p>

        <p>Quando a gente diz que é power, é power mesmo!</p>

        <p>Conheça as empresas parceiras que somam junto a nós e que merecem uma espiadinha sua:</p>

        <div className="parceiros">
          <IconeParceiro imagemParceiro={Labra} altParceiro="Logo Labra" />
          <IconeParceiro imagemParceiro={Labra} altParceiro="Logo Labra" />
          <IconeParceiro imagemParceiro={Labra} altParceiro="Logo Labra" />
          <IconeParceiro imagemParceiro={Labra} altParceiro="Logo Labra" />
          <IconeParceiro imagemParceiro={Labra} altParceiro="Logo Labra" />
        </div>

      </div>
      <div className="depoimentosClientes">
        <h2>O discurso empolga, mas o exemplo arrasta!</h2>
        <div className="container">
          <Depoimentos 
          imagemDepoimento={Elisa} 
          nomeEmpresa="Perfumes & Aromas" 
          depoimento="“Foi surpreendente. Elas me mostraram como gerar resultados com simplicidade.  
          Acho que funciona pq elas entendem as dificuldades que nós mulheres passamos para crescer no mundo dos negócios”"
          instagram1="@elisamariaparfum" linkInstagram1="https://www.instagram.com/elisamariaparfum/"
          instagram2="@adivinaessencia" linkInstagram1="https://www.instagram.com/adivinaessencia/"/>

          <Depoimentos 
          imagemDepoimento={FranDepo} 
          nomeEmpresa="Registro de Marcas" 
          depoimento="“Elas me mostraram como gerar negócios saindo da zona de conforto, através do network para business.  Fechei novos negócios, firmei parcerias e comecei a perceber o potencial que faltava explorar. Elas me estimulam a escalar resultados o tempo todo, não me vejo mais longe do Clube”"
          linkInstagram1="https://www.instagram.com/franmanfredi/" instagram1="@franmanfredi"
          linkInstagram2="https://www.instagram.com/primeiromundobr/" instagram2="@primeiromundobr"/>

          <Depoimentos 
          imagemDepoimento={LuizaChai} 
          nomeEmpresa="Beleza & Bem estar" 
          depoimento="“Foi transformador para os nossos resultados. Elas nos deram mais coragem e norte para agir.  É quase impossível não ter progresso”"
          linkInstagram1="https://www.instagram.com/luiza.mariacunha/" instagram1="@luiza.mariacunha"
          linkInstagram2="https://www.instagram.com/chaiwessner/" instagram2="@chaiwessner"/>

          <Depoimentos 
          imagemDepoimento={Gi} 
          nomeEmpresa="Cuidados Domiciliares" 
          depoimento="“Foi incrível pq elas conseguem explicar o que fazer de maneira muito simples e com atividades práticas pra gente implementar no negócio. Não é daquelas que colocam situações impossíveis de aplicar na nossa realidade. Isso fez toda diferença para o meu rendimento”"
          linkInstagram1="https://www.instagram.com/gicuidadodomiciliar/"
          instagram1="gicuidadodomiciliar"/>
        </div>
      </div>
      <Rodape />


    </div>
  );
}

export default Home
