const express = require('express')
// const mongoose = require('mongoose')

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
const port = process.env.PORT || 3000

server.get('/', (req, res) => {
  res.send('Hello World Umbler')
})

server.listen(port, () => {
  console.log('servidor rodando');
})
