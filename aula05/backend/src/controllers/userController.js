const mongoose = require('mongoose');
const axios = require('axios');

const User = mongoose.model('User');

module.exports = {
    async persistUser(req, res) {
        const payload = await User.create(req.body);
        //User.create(payload);
        res.json(payload)

    },
    async listUsers(req, res) {
        const payload = await User.find();
        res.json(payload)
    },
    async getUser(req, res) {
        try {
            const response = await axios.get('http://api.github.com/users/joao-amaral18');
            console.log(response);
            res.json(response.data);
        } catch (error) {
            console.error(error);
        }
    },
    //persist Git users
    async getGitUsers(req, res) {
        try {
            const response = await axios.get('http://api.github.com/users');
            console.log(response)
            res.json(response.data);
        } catch {

        }
    },
    async getGitUsersPost(req, res) {
        const {
            userGit
        } = req.body;
        const response = await axios.get(`http://api.github.com/users/${userGit}`);
        const {
            login,
            name,
            avatar_url,
            email,
            puplic_repos,
            followers,
            bio
        } = response.data;
        const payload = await User.create({
            login,
            name,
            avatar_url,
            email,
            puplic_repos,
            followers,
            bio
        })
        res.json(payload);

    },
    //persist on DB only if user from git was created before 2020
    async getGitUsersBefore2020(req, res) {
        const response = await axios.get('https://api.github.com/users/leonardogandrade');
        const {
            login,
            created_at
        } = response.data;
        const created_at_date = new Date(Date.parse(created_at));

        if (created_at_date.getFullYear() < 2020) {
            res.json({
                "msg": "usuário antigo"
            })
        } else {
            res.json({
                "msg": "usuário muito novo"
            })
        }

    }
}