import React from 'react'
import './QuemSomos.css'

// Importando Imagens
import quemSomos1 from '../../Assets/imagemQuemSomos1.jpg'
import quemSomos2 from '../../Assets/imagemQuemSomos2.jpg'
import quemSomos3 from '../../Assets/mentoriadelas.jpg'

// Importando componentes
import Menu from '../../Componentes/Menu/Menu'
import BannerInicial from '../../Componentes/BannerInicial/BannerInicial'
import SecaoTextoImagem from '../../Componentes/SecaoTextoImagem/SecaoTextoImagem'
import SecaoTextoImagemDireita from '../../Componentes/SecaoTextoImagemDireita/SecaoTextoImagemDireita'
import Newsletter from '../../Componentes/Newsletter/Newsletter'
import Rodape from '../../Componentes/Rodape/Rodape'


function QuemSomos() {
  return (
    <div className="QuemSomos">
      <Menu />

      <BannerInicial banner="quemSomos">
        <h1>Conheça nossa <strong>história</strong><br></br>e nosso<strong> compromisso</strong></h1>
      </BannerInicial>

      <SecaoTextoImagem titulo="Nossa Motivação" imagem={quemSomos3}>
        <p>Uma empresa que nasceu com propósito firme: <strong>Gerar e impulsionar negócios com mulheres e entre elas!</strong></p>

        <p>Para fazer isso acontecer, passamos por poucas e boas nos últimos tempos. Foram muitas turbulências para nós.  E é provável que o motivo seja o mesmo que está provocando turbulências em possivelmente 100% das empresas:<strong> a necessidade de mudar, se adaptar, de evoluir.</strong>Em épocas exponenciais, as barreiras territoriais não fazem mais sentido. O mais do mesmo não cabe mais.</p>

        <p>Nesse processo, nós vivemos na pele o que sempre falamos em mentorias, <strong>a transformação é desconfortável, mas necessária.</strong></p>
      </SecaoTextoImagem>

      <SecaoTextoImagemDireita titulo="Focadas no empreendendorismo feminino" imagem={quemSomos2}>
        <p>Nosso compromisso inegociável com o crescimento do empreendedorismo feminino está explicitamente impresso no que temos de mais valioso: o nosso propósito.  Por ele a gente sai da zona de conforto, faz e acontece!</p>

        <p>Dentro deste contexto, podemos dizer que hoje somos um Clube que promove eventos de diversos portes, porém todos com foco em negócios, no network de qualidade e na capacitação com conteúdo rico.
        </p>
      </SecaoTextoImagemDireita>

      <SecaoTextoImagem titulo="Você também pode!" imagem={quemSomos1}>
        <p>Temos várias novidades, mas a principal é que as mulheres podem se fidelizar conosco tanto através dos planos de assinatura construídos para cada perfil, como através das nossas mentorias e consultorias que foram pensadas e repensadas para impulsionar negócios e levar as empresárias para a alta performance.  Através do capital intelectual dos nossos best mentores, iremos te provocar a pensar fora da caixa e escalar resultados.</p>

        <p>Agora que a turbulência passou e tudo isso já está na mesa, a gente tá amando! Tomara que você também.  Venha com a gente, rumo ao mundo do business exponencial.</p>
      </SecaoTextoImagem>

      <Newsletter />
      <Rodape />


    </div>
  );
}

export default QuemSomos
