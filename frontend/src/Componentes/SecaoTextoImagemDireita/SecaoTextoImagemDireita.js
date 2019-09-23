import React from 'react'

import './SecaoTextoImagemDireita.css'

const SecaoTextoImagemDireita = props => (
  <div className="container">
    <div className="secaoTextoImagem">
      <h2>{props.titulo}</h2>
      <div className="divisaoTextoImagem">
        <img src={props.imagem} className="imagemSecaoTextoImagem"/>
        <div className="textoAreaImagem">
          {props.children}
        </div>
      </div>
    </div>
  </div>
)

export default SecaoTextoImagemDireita