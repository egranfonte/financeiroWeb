//Mapeamento 
const restful = require('node-restful')
const mongoose = restful.mongoose
//MAPEAR CREDITO
const creditoSchema = new mongoose.Schema({
    name: {type: String, require: true},
    value: { type: Number, min: 0, require: true}
})
//MAPEAR O DEBITO 
const debitoSchema = new mongoose.Schema({
    name: { type: String, require: true},
    value: { type: Number, min: 0, require: [true, 'Informe o valor do débito!']},
    status: { type: String, require: false, uppercase: true,
        enum: ['PAGO','PENDENTE','AGENDADO']}
})

//MAPEAR O PROPRIO CICLO DE PAGAMENTO
const cicloPagamentoSchema = new mongoose.Schema({
    name: {type: String, require: true},
    month: { type: Number, min: 1, max: 12, require: true },
    year: { type: Number, min: 1900, max: 2100, require: true},
    /*date: {type: date, default: Date.now },*/
    credits: [creditoSchema],
    debts: [debitoSchema],
    
})

//exports | exportar o modulo "model" cicloPagamentoSchema
module.exports = restful.model('cicloPagamento', cicloPagamentoSchema)