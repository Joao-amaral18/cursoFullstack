const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    login: String,
    name: String,
    avatar_url: String,
    email: String,
    puplic_repos: Number,
    followers: Number,
    bio: String
}, {
    timestamp: true
});

module.exports = mongoose.model('User', userSchema)