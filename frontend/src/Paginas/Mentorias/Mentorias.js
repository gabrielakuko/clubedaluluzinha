import React from 'react'
import './Mentorias.css'

// Importando componentes
import BannerInicial from '../../Componentes/BannerInicial/BannerInicial'
import Newsletter from '../../Componentes/Newsletter/Newsletter'
import Rodape from '../../Componentes/Rodape/Rodape'
import Mentoria from '../../Componentes/Mentoria/Mentoria'



function Mentorias() {
  return (
    <div className="mentorias">

      <BannerInicial banner="mentorias">
        <h1><strong>Compromisso</strong> com o<br></br>seu<strong> sucesso</strong></h1>
      </BannerInicial>

      <div className="container">

        <h2>Nossas Mentorias</h2>

        <div className="gridMentorias">

          <Mentoria nomeMentoria="Mentoria Delas" resumoMentoria="Você vai ser provocado a repensar seus processos, suas metas e como atingir objetivos comerciais práticos."/>

          <Mentoria nomeMentoria="Mentoria Delas" resumoMentoria="Você vai ser provocado a repensar seus processos, suas metas e como atingir objetivos comerciais práticos."/>

          <Mentoria nomeMentoria="Mentoria Delas" resumoMentoria="Você vai ser provocado a repensar seus processos, suas metas e como atingir objetivos comerciais práticos."/>

        </div>
      </div>
      
      <Newsletter />
      <Rodape />


    </div>
  );
}

export default Mentorias
