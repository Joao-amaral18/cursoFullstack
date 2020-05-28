module.exports = {
    autentica(req, res) {
        const {
            login,
            senha
        } = req.body;

        if (login == "joao" && senha == "11") {
            res.send(`Bem vindo ${login} `)
        } else {
            res.send(`usuario ${login} não encontrado`)
        }
    },
    listUsers(req, res) {

        res.json({
            "login": "adm",
            "senha": "11"
        });

    },
    loginHeaders(req, res) {

        const response = req.headers.token;
        res.json(response);
    },

}