const express = require('express')
// const mongoose = require('mongoose')
const path = require("path")
const cors = require('cors')

// const EmailController = require('./controllers/EmailController')


// mongoose.set('useNewUrlParser', true)
// mongoose.set('useFindAndModify', false)
// mongoose.set('useCreateIndex', true)
// mongoose.set('useUnifiedTopology', true)

// mongoose.connect('mongodb://kamino.mongodb.umbler.com:44677/luluzinha')

// var db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error'))
// db.once('open', () => {
//   console.log('conectou');
// })

const server = express()
const port = process.env.PORT || 21096

server.use(express.static(__dirname))
server.use(express.static(path.join(__dirname, './frontend/build')))

server.use(cors())
// Informa para o express que vai ser usado JSON
server.use(express.json())

server.get('/', (req, res) => {
  res.send('Hello')
  res.sendFile(path.join(__dirname, './frontend/build', 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
  // const teste = path.join(__dirname, "frontend/build") 
})
server.post('/email', (req, res) => {
  console.log(req.body)
})

// server.get('/email', EmailController.store)

server.listen(port, () => {
  console.log('servidor rodando');
})
