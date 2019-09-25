import React from 'react'
import './Contato.css'

// Importando componentes
import Menu from '../../Componentes/Menu/Menu'
import Newsletter from '../../Componentes/Newsletter/Newsletter'
import Rodape from '../../Componentes/Rodape/Rodape'


function Contato() {
  return (
    <div className="Contato">
      <Menu />

      <div className="areaContato">
        <h2>Entre em contato</h2>
        <form className="formContato">
          <input type="text" className="inputContato" placeholder="Insira seu Nome" id="nome" />
          <input type="tel" className="inputContato" placeholder="Insira seu Telefone" id="telefone" />
          <input type="email" className="inputContato" placeholder="Insira seu Email" id="email" />
          <div className="selectContato">
            <select>
              <option value="contato">Contato</option>
              <option value="serembaixadora">Ser Embaixadora</option>
            </select>
          </div>
          <input type="submit" className="botaoSubmit" value="Enviar" />
        </form>
      </div>

      <Newsletter />
      <Rodape />


    </div>
  );
}

export default Contato
