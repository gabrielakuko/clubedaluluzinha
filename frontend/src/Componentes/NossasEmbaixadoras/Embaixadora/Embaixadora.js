import React from 'react'

// Importando componentes

import './Embaixadora.css'
import Button from '../../Button/Button'

const Embaixadora = props => (

        <div className="embaixadora" id={props.idEmbaixadora}>
          <img src={props.imagemEmbaixadora} className="imagemEmbaixadoras" alt={props.descricaoImagem}/>
          <div className="textoEmbaixadoras">
            <h4>{props.nomeEmbaixadora}</h4>
            <hr />
            <p className="detalheEmbaixadora"><strong> {props.cidadeEmbaixadora}</strong></p>
            <Button color="secondary" text="Eventos" onClick={props.funcoes} />
          </div>
        </div>
)

export default Embaixadora