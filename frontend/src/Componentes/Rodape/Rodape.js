import React from 'react'

//import Newsletter from '../Newsletter/Newsletter'

import './Rodape.css'

const Rodape = () => {

  return (

  <div className="rodape">
    {/* <Newsletter /> */}
    <ul className="menuRodape">
        <li><a href="/">Home</a></li>
        <li><a href="/quem-somos">Quem Somos</a></li>
        <li><a href="/embaixadoras">Embaixadoras</a></li>
        <li><a href="/mentorias">Mentorias</a></li>
        <li><a href="/contato">Contato</a></li>
    </ul>
  </div>

  );

}

export default Rodape