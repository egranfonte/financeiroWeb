//
const CicloPagamento = require('./cicloPagamento')

//servicos restful com todo o padrão 
CicloPagamento.methods(['get', 'post','put','delete'])

//Quando for o put/post, ele retorna o objeto novo
CicloPagamento.updateOptions({new: true, runValidators: true})

/* Tratamento o parse do erro para o frontend */
const _ = require('lodash')
CicloPagamento.after('post', sendErrorsOrNext).after('put',sendErrorsOrNext)
function sendErrorsOrNext(req,res,next){
    const bundle = res.locals.bundle

    if(bundle.errors){
        var errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    }else{
        next()
    }
}

function parseErrors(nodeRestfulErrors){
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}

//contador
CicloPagamento.route('count', function(req,res,next){
    CicloPagamento.count(function(error,value){
        if(error){
            res.status(500).json({errors: [error]})
        }else{
            res.json({value})   
        }
    })
})

//exportar CicloPagamento
module.exports = CicloPagamento

