const express = require('express');

const server = express();

const mongoose = require('mongoose');
//BD
mongoose.connect('mongodb+srv://admin:admin@cluster0-6pbaq.mongodb.net/cursoReact?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Config 
server.use(express.json())

//Routes
server.use('/api', require('./src/routes'));

const PORT = 3002
server.listen(PORT);
console.log('Rodando na porta ' + PORT);