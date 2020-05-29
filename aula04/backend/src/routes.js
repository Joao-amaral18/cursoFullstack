const express = require('express')
const routes = express.Router();
const userController = require('./controllers/userController');

routes.post('/users', userController.persistData)
routes.get('/Allusers', userController.listUser)
routes.get('/userOne/:id', userController.pickOne)
routes.get('/userBySex/:sex', userController.ListBySex)
routes.get('/userByAge', userController.ListByAge)
routes.get('/userFields/:f', userController.ListManyFields)

module.exports = routes;