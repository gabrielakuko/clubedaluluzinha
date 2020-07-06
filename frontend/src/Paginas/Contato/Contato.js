import React from 'react'
import './Contato.css'
import Axios from 'axios'

// Importando componentes
import Menu from '../../Componentes/Menu/Menu'
import Newsletter from '../../Componentes/Newsletter/Newsletter'
import Rodape from '../../Componentes/Rodape/Rodape'


function Contato(props) {
  const enviarEmail = (e) => {
    e.preventDefault()

    const nome = document.querySelector('#nome').value
    const email = document.querySelector('#email').value
    const tel = document.querySelector('#telefone').value
    const assunto = document.querySelector('#assunto').value
    const mensagem = document.querySelector('#mensagem').value
    const emailEmbaixadora = document.querySelector('#embaixadora').value

    const formulario = document.querySelector('.formContato')

    // Axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8'
    // Axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

    Axios.post('http://clubdaluluzinha.com.br/send-mail', {
      nome,
      email,
      telefone: tel,
      assunto,
      mensagem,
      emailEmbaixadora
    }).then(() => {
      alert('Email enviado com sucesso!')
      formulario.reset()
    }).then(() => {
      if(props.location.link) {
        window.location.href = props.location.link
      }
      else {
        window.location.href = '/'
      }
    })
    
  }
  const tituloPagina = () => {
    if (props.location.assunto) {
      return('Preencha seus dados para continuar a compra')
    }
    else {
      return('Entre em contato')
    }
  }
  const botaoFormulario = () => {
    if (props.location.assunto) {
      return('Finalizar pedido')
    }
    else {
      return('Enviar')
    }
  }
  return (
    <div className="Contato">
      <Menu />

      <div className="areaContato">
        <h2>{tituloPagina()}</h2>
        <form className="formContato" method="post" onSubmit={enviarEmail}>
          <input type="text" className="inputContato" placeholder="Insira seu Nome" id="nome" name="nome"/>
          <input type="tel" className="inputContato" placeholder="Insira seu Telefone" id="telefone" name="telefone" />
          <input type="email" className="inputContato" placeholder="Insira seu Email" id="email" name="email" />
          <input type="text" value={props.location.assunto} className="inputContato" placeholder="Insira o assunto" id="assunto" name="assunto" />
          <input type="hidden" id="embaixadora" name="email-embaixadora" value={props.location.embaixadora}></input>
          <textarea name="mensagem" className="texteAreaContato" placeholder="Digite sua mensagem" id="mensagem"></textarea>
          <input type="submit" id="botaoForm" className="botaoSubmit" value={botaoFormulario()} />
        </form>
      </div>

      <Newsletter />
      <Rodape />


    </div>
  );
}

export default Contato
