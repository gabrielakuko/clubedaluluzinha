import React from "react"
import { Carousel } from "react-responsive-carousel"

import Embaixadora from './../NossasEmbaixadoras/Embaixadora/Embaixadora'
import comoFunciona from '../../Assets/comofunciona.jpg'


import './Slide.css'


const Slide = () => (
  <Carousel centerMode showThumbs={false} showIndicators={false} selectedItem={1} centerSlidePercentage={50}>
    <Embaixadora imagemEmbaixadora={comoFunciona} descricaoImagem="Imagem da embaixadora Greice" nomeEmbaixadora="Greice Maria" cidadeEmbaixadora="Rio do Sul - SC"/>

    <Embaixadora imagemEmbaixadora={comoFunciona} descricaoImagem="Imagem da embaixadora Greice" nomeEmbaixadora="Greice Maria" cidadeEmbaixadora="Rio do Sul - SC"/>

    <Embaixadora imagemEmbaixadora={comoFunciona} descricaoImagem="Imagem da embaixadora Greice" nomeEmbaixadora="Greice Maria" cidadeEmbaixadora="Rio do Sul - SC"/>
  </Carousel>
);
export default Slide