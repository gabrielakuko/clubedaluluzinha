import React from 'react'
import './QuemSomos.css'

// Importando Imagens
import quemSomos1 from '../../Assets/imagemQuemSomos1.jpg'
import quemSomos2 from '../../Assets/imagemQuemSomos2.jpg'
import quemSomos3 from '../../Assets/mentoriadelas.jpg'
import video from '../../Videos/quem-somos.mp4'

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
import Newsletter from '../../Componentes/Newsletter/Newsletter'
import Rodape from '../../Componentes/Rodape/Rodape'
import SecaoTextoVideo from '../../Componentes/SecaoTextoVideo/SecaoTextoVideo'
import SecaoTime from '../../Componentes/SecaoTime/SecaoTime'
import Depoimentos from '../../Componentes/Depoimentos/depoimentos'


function QuemSomos() {
  return (
    <div className="QuemSomos">
      <Menu />

      <BannerInicial banner="quemSomos">
        <h1>Conheça nossa <strong>história</strong><br></br>e nosso<strong> compromisso</strong></h1>
      </BannerInicial>
      
      <SecaoTime />
      
      <SecaoTextoVideo titulo="Nossa Motivação" linkVideo={video}>
        <p>Uma empresa que nasceu com propósito firme: <strong>Gerar e impulsionar negócios com mulheres e entre elas!</strong></p>

        <p>Para fazer isso acontecer, passamos por poucas e boas nos últimos tempos. Foram muitas turbulências para nós.  E é provável que o motivo seja o mesmo que está provocando turbulências em possivelmente 100% das empresas:<strong> a necessidade de mudar, se adaptar, de evoluir. </strong>Em épocas exponenciais, as barreiras territoriais não fazem mais sentido. O mais do mesmo não cabe mais.</p>

        <p>Nesse processo, nós vivemos na pele o que sempre falamos em mentorias, <strong>a transformação é desconfortável, mas necessária.</strong></p>
      </SecaoTextoVideo>



      <SecaoTextoImagemDireita titulo="Focadas no empreendendorismo feminino" imagem={quemSomos2}>
        <p>Nosso compromisso inegociável com o crescimento do empreendedorismo feminino está explicitamente impresso no que temos de mais valioso: o nosso propósito. Por ele a gente sai da zona de conforto, faz e acontece!</p>

        <p>Dentro deste contexto, podemos dizer que hoje somos um Clube que promove encontros empresarias de diversos portes e todos com foco em negócios,  em network de qualidade e na capacitação com conteúdo rico.</p>
      </SecaoTextoImagemDireita>

      <SecaoTextoImagem titulo="Você também pode!" imagem={quemSomos1}>
        <p>Todos os serviços oferecidos pelo Clube da Luluzinha foram pensados e repensados para impulsionar negócios e levar as empresárias para a alta performance. </p>

        <p>Venha com a gente rumo ao mundo do business exponencial.</p>

        <p>Através de nossas mentorias, consultorias, cursos on-line, workshops em formato Experience Learning e parcerias o Clube da Luluzinha, suas Mentoras, Embaixadoras e Parceiros de Negócios estão preparados para impulsionar mulheres em todo país!</p>
      </SecaoTextoImagem>

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

      {/* <Newsletter /> */}
      <Rodape />

    </div>
  );
}

export default QuemSomos
