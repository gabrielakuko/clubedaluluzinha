import React from 'react'

import './Newsletter.css'

const Newsletter = props => (
  <div className="newsletter">
    <div className="container areaNewsletter">
      <h4>Assine nossa Newsletter</h4>
      <form className="formNewsletter">
        <input placeholder="Informe seu melhor email" type="email" id="emailNewsletter" />
        <button type="submit">Assinar</button>
      </form>
    </div>
  </div>
  
)

export default Newsletter