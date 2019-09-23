import React from 'react'

import './Arrow.css'

const Arrow = (props, direcao) => (
  <div className={`setaSlide ${direcao}`} onClick={props.funcaoClique}> {props.glyph}</div>
)

export default Arrow