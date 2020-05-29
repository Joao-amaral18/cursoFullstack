module.exports = {
    listNf(req, res) {

        const response = req.params.nf;
        res.send(response);
    }
}