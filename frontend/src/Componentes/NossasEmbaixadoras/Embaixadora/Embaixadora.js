import React from 'react'

// Importando componentes

import './Embaixadora.css'

const Embaixadora = props => (

        <div className="embaixadora" id={props.idEmbaixadora}>
          <img src={props.imagemEmbaixadora} className="imagemEmbaixadoras" alt={props.descricaoImagem}/>
          <div className="textoEmbaixadoras">
            <h4>{props.nomeEmbaixadora}</h4>
            <hr />
            <p className="detalheEmbaixadora"><strong> {props.cidadeEmbaixadora}</strong></p>
            {props.children}
          </div>
        </div>
)

export default Embaixadora