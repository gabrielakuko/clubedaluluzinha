const { Schema, model } = require('mongoose')

const EmailSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  telefone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
})

module.exports = model('Email', EmailSchema)