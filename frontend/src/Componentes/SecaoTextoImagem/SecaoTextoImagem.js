import React from 'react'

import './SecaoTextoImagem.css'

const SecaoTextoImagem = props => (
  <div className="container">
    <div className="secaoTextoImagem">
      <h2>{props.titulo}</h2>
      <div className="divisaoTextoImagem">
        <div className="textoAreaImagem">
          {props.children}
        </div>
        <img src={props.imagem} className="imagemSecaoTextoImagem"/>
      </div>
    </div>
  </div>
)

export default SecaoTextoImagem