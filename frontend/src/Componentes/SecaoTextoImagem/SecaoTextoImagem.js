import React from 'react'

import './SecaoTextoImagem.css'

const SecaoTextoImagem = props => (
  <div className="container">
    <div className="secaoTextoImagemEsquerda">
      <h2>{props.titulo}</h2>
      <div className="divisaoTextoImagemEsquerda">
        <div className="textoAreaImagemEsquerda">
          {props.children}
        </div>
        <img src={props.imagem} alt="" className="imagemSecaoTextoImagemEsquerda"/>
      </div>
    </div>
  </div>
)

export default SecaoTextoImagem