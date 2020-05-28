const express = require('express')
const routes = express.Router();
const userController = require('./controllers/userController');
const nfController = require('./controllers/nfController');

routes.get('/users', userController.listUsers);

routes.post('/autentica', userController.autentica);

routes.post('/login', userController.loginHeaders)

routes.post('/notafiscal/:nf', nfController.listNf)


module.exports = routes;