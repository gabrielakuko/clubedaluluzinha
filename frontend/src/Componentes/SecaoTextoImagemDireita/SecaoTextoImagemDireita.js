import React from 'react'

import './SecaoTextoImagemDireita.css'

const SecaoTextoImagemDireita = props => (
  <div className="container">
    <div className="secaoTextoImagemDireita">
      <h2>{props.titulo}</h2>
      <div className="divisaoTextoImagemDireita">
        <img src={props.imagem} alt="" className="imagemSecaoTextoImagemDireita"/>
        <div className="textoAreaImagemDireita">
          {props.children}
        </div>
      </div>
    </div>
  </div>
)

export default SecaoTextoImagemDireita