const app = require('express');
const port = process.env.PORT || 3000;
const cors = require('cors');
const path = require("path");
const bodyParser = require('body-parser');
const mailer = require('nodemailer');

const config = { 
  host: "smtp.kinghost.net",
  port: 587,
  auth: {
    user: "contato@clubdaluluzinha.com.br",
    pass: "luluzinha@email"
  }
}

const server = app()

server.use(cors())

server.use(app.static(__dirname));
server.use(app.static(path.join(__dirname, './frontend/build')));

const transporter = mailer.createTransport(config);

server.use(bodyParser.json());

server.post('/send-mail', (req, res) => {
  console.log('req.body: ', req.body);
  const message = {
    from: config.auth.user,
    to: config.auth.user,
    subject: req.body.assunto,
    text: req.body.mensagem,
    html: `
      <style>
        .fundo {
          background: #823DC3;
          width: 100%;
          height: 100%;
          padding: 50px;
        }
        .area-email {
          background: white;
          width: 80%;
          height: 80%;
          border: 1px solid white;
          border-radius: 15px;
          padding: 20px;
          text-align: center;
          font-family: sans-serif;
        }
        .titulo {
          text-align: center;
        }
      </style>
      <div class="fundo">
        <div class="area-email">
          <h1 class="titulo">${req.body.assunto}</h1>
          <b>nome: </b>${req.body.nome} <br>
          <b>telefone: </b>${req.body.telefone}<br>
          <b>email: </b>${req.body.email}<br>
        </div>
      </div>
      
    `
  }

  transporter.sendMail(message, (error, info) => {
    if (error) {
      res.status(400).send('Falhou!');
    }
    res.status(200).send('Enviado!');
  })
});

server.get('/', (req, res) => {
  res.send('Hello')
  res.sendFile(path.join(__dirname, './frontend/build', 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})

server.listen(port, () => {
  console.log(`listening on port: ${port}`)
});
