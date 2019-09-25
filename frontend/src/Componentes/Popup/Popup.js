import React from 'react'

import './Popup.css'

const Popup = props => {

  return (
    <div className="popup">
      <div className="fundoPopup">
        <div className="areaPopup">
          <h2 className="tituloPopup">Agenda de Eventos</h2>
          <span className="fecharPopup" onClick={props.fecharPopup}>X</span>
          <div className="conteudoPopup">
            {props.children}
          </div>
        </div>
      </div>
    </div>  
  )
}
export default Popup