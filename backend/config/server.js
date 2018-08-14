//servidor express
//backend estará rodando na porta 3003
const porta = 3003
//
const bodyParser = require('body-parser' )
//framework web express
const express = require('express')
const server = express()
//cors
const allowCors = require('./cors')

//para toda requisicao que chegar dentro do backend será passado por esse middleware urlencoded
server.use(bodyParser.urlencoded({extended: true}))
//outro middleware para fazer o parse do json
server.use(bodyParser.json())
//
server.use(allowCors)

//escutando porta
server.listen(porta, function(){
    console.log(` BACKEND está rodando na porta ${porta}.`)
})

module.exports = server

/*
server.use(function (req,res,next){
    //const init = Date.now()
    //console.log(` ---------------------- `)
    console.log(' meu middleware 1 ')
    next()
})

//middleware que serve para todas as urls da aplicação
server.use(function (req,res,next){
    console.log(' meu middleware 2 ')
    res.send(' ControlP ')
    
})
*/