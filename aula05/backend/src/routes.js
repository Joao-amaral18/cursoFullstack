const express = require('express');
const mongoose = require('mongoose');
const routes = express.Router();

const userController = require('./controllers/userController');

routes.post('/users', userController.persistUser);
routes.get('/users', userController.listUsers);
routes.get('/user', userController.getUser);
routes.get('/usersGit', userController.getGitUsers);
routes.post('/usersGitpost', userController.getGitUsersPost);
routes.post('/usersGitpost2020', userController.getGitUsersBefore2020);



module.exports = routes