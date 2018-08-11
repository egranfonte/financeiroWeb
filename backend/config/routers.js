//
const express = require('express')
//funcao que recebe server (server.js)
module.exports = function(server){
    
    //API Routers
    const router = express.Router()
    server.use('/api', router)

    // rotas da API
    const cicloPagamentoService = require('../api/cicloPagamento/cicloPagamentoService')
    //metodo node restul register
    cicloPagamentoService.register(router, '/cicloPagamento') 
    
    const sumarizaPagamentoService = require('../api/sumarizaPagamento/sumarizaPagamentoService')
    //
    router.route('/sumarizaPagamento').get(sumarizaPagamentoService.getSumariza)


    router.route('/').get(function(req,res,next){
        res.send('API Funcioanndo corretamente !!!')
    })
    
}