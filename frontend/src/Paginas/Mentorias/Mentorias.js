import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import './Mentorias.css'

import imagemTrilha from '../../Assets/trilhaconhecimento.jpg'
import mentoriaDelas from '../../Assets/mentoriadelas.jpg'
import consultoriaEmpresarial from '../../Assets/consultoriaEmpresarial.jpg'


// Importando componentes
import BannerInicial from '../../Componentes/BannerInicial/BannerInicial'
import Newsletter from '../../Componentes/Newsletter/Newsletter'
import Rodape from '../../Componentes/Rodape/Rodape'
import Mentoria from '../../Componentes/Mentoria/Mentoria'
import Menu from '../../Componentes/Menu/Menu'
import Popup from '../../Componentes/Popup/Popup'
import ButtonLink from '../../Componentes/ButtonLink/ButtonLink'


import MentoriaJSON from '../../Data/Mentoria.json'


const Mentorias = () => {
  const arrayMentorias = ([
    {"id": 1, "nome": "Mentoria Delas", "resumo": "Você vai ser provocado a repensar seus processos, suas metas e como atingir objetivos comerciais práticos.", "imagem": mentoriaDelas},
    {"id": 2, "nome": "Consultoria Empresarial", "resumo": "Vamos te ajudar a reorganizar a sua empresa e seus objetivos estratégicos.", "imagem": consultoriaEmpresarial},
    {"id": 3, "nome": "Trilha do conhecimento", "resumo": "Vamos te provocar a pensar sob 3 pilares:  corpo, mente e espírito.", "imagem": imagemTrilha},
  ]);

  const [abrirPopup, setPopupState] = useState(false)
  const [mentoriaId, setId] = useState(0)

  let popupAberto

  if (abrirPopup) {
    popupAberto =
      <Popup fecharPopup={() => setPopupState(false)} >
        {MentoriaJSON.map((mentoria, index) => {
              let idAtual = mentoriaId
              if (idAtual === mentoria.idMentoria) {
                  return (
                    <div key={index} className="carousel-cell mentoriaPopup">
                      <div className="itemMentoria">
                        {/* <img src={itemMentoria.imagem} /> */}
                        <h4>{mentoria.nomeMentoria}</h4>
                        <p>{mentoria.resumoMentoria}</p>
                        <Link to={{ pathname: '/contato', assunto: mentoria.nomeMentoria}} className="botaoAgenda">Inscreva-se</Link>
                      </div>
                    </div>
                  )
                }
              return '';
            })}
      </Popup>
  }
  return (
    <div className="mentorias">

      {popupAberto}

      <Menu />

      <BannerInicial banner="mentorias">
        <h1><strong>Compromisso</strong> com o<br></br>seu<strong> sucesso</strong></h1>
      </BannerInicial>

      <div className="container">

        <h2>Nossas Mentorias</h2>

        <div className="gridMentorias">

        {arrayMentorias.map((mentoria, index) => {   
              return (
                <Mentoria key={index} imagemMentoria={mentoria.imagem} nomeMentoria={mentoria.nome} resumoMentoria={mentoria.resumo} funcoes={() => {
                  setPopupState(true)
                  setId(mentoria.id)
                }}/>
              )
          })} 

          {/* <Mentoria nomeMentoria="Mentoria Delas" resumoMentoria="Você vai ser provocado a repensar seus processos, suas metas e como atingir objetivos comerciais práticos." funcoes={() => setPopupState(true)}/>

          <Mentoria nomeMentoria="Consultoria Empresarial" resumoMentoria="vamos te ajudar a reorganizar a sua empresa e seus objetivos estratégicos." funcoes={() => setPopupState(true)}/>

          <Mentoria nomeMentoria="Trilha do Conhecimento" resumoMentoria="Vamos te provocar a pensar sob 3 pilares:  corpo, mente e espírito." funcoes={() => setPopupState(true)}/> */}

        </div>
      </div>
      
      <Newsletter />
      <Rodape />


    </div>
  );
}

export default withRouter(Mentorias)
