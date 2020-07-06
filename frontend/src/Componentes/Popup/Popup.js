import React from 'react'

import './Popup.css'

const Popup = (props) => {
  // document.body.classList.add("no-scroll");

  const closePopup = () => {
    // document.body.classList.remove("no-scroll");
    return props.fecharPopup();
  };
  return (
    <div className="popup">
      <div className="fundoPopup">
        <div className="areaPopup">
          <h2 className="tituloPopup">{[props.tituloPopup]}</h2>
          <span className="fecharPopup" onClick={() => closePopup()}>X</span>
          <div className="conteudoPopup">
            {props.children}
          </div>
        </div>
      </div>
    </div>  
  )
}
export default Popup