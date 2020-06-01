const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors');

const server = express();

//database con
mongoose.connect('mongodb+srv://admin:admin@cluster0-6pbaq.mongodb.net/integraGit?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true

});

//configs
server.use(cors())
server.use(express.json());

//models
requireDir('./src/models');

//routes
server.use('/api', require('./src/routes'));

//port
const PORT = 3002;

server.listen(PORT);
console.log("server listen on port " + PORT)