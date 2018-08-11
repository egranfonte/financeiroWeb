//servidor "express" na pasta config
const server = require('./config/server')
//
require('./config/database')
//retona o que foi atribuido para o module exports (server)
//Somente rotas
require('./config/routers')(server)