import React from 'react'

import './SecaoTextoVideo.css'

const SecaoTextoVideo = props => (
  <div className="container">
    <div className="secaoTextoImagemEsquerda">
      <h2>{props.titulo}</h2>
      <div className="divisaoTextoImagemEsquerda">
        <div className="textoAreaImagemEsquerda">
          {props.children}
        </div>
        <video width="50%" height="auto" controls>
          <source src={props.linkVideo} type="video/mp4"></source>
        </video>
      </div>
    </div>
  </div>
)

export default SecaoTextoVideo