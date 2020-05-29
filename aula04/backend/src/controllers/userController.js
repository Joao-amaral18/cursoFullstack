const mongoose = require('mongoose')
const User = mongoose.model('User');

module.exports = {
    async persistData(req, res) {
        const response = await req.body;
        User.create(response);
        res.json(response)
    },
    async listUser(req, res) {
        const response = await User.find()
        res.json(response);
    },
    async pickOne(req, res) {
        const response = await User.findById(req.params.id);
        res.json(response)
    },
    //find By Sex
    async ListBySex(req, res) {
        const response = await User.find({
            "sex": req.params.sex
        });
        res.json(response)
    },
    //find By Age
    async ListByAge(req, res) {
        const response = await User.find().where('age').gt(17)
        res.json(response)
    },
    ListManyFields(req, res) {
        console.log(res)
        const response = req.query.f;
        res.json(response)
    }
}