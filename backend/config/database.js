const mongoose = require('mongoose')
//{ useNewUrlParser: true }
module.exports = mongoose.connect('mongodb://localhost:27017/db_finance',{ useNewUrlParser: true })

//tratamento mensagens de erro na validacao 
mongoose.Error.messages.general.require = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."