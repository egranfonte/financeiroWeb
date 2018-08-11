//Serviço de Sumário de Pagamentos 
const _ = require('lodash')
const CicloPagamento = require('../cicloPagamento/cicloPagamento')

// Mais uma função middleware
function getSumariza(req,res){
    CicloPagamento.aggregate([{
        //array de $credits.value
        //$ project verificar documentação mongo
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
    },{
        //group ver documentação mongo ( obrigatorio id )
        $group: {_id: null, credit: {$sum:"$credit"}, debt: {$sum:"$debt"}}
    },{
        $project: {_id:0, credit: 1, debt: 1}
        
    }], function (error, result){
        //result do aggregate é um array
        if(error){
            res.status(500).json({errors: [error]})
        }else{
            res.json(_.defaults(result[0], {credit: 0, debt: 0}))
        }
    })
}

module.exports = { getSumariza }