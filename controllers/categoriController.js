const models = require ('../models')
const categori = models.categori

//CRUD
exports.index = (req, res) => {
    categori.findAll().then(data => res.send(data))
}

exports.show = (req, res) => {
    categori.findOne({
        where: { id: req.params.id }
    }).then(data => res.send(data))
}


exports.store = (req, res) => {
    categori.create(req.body).then(categori=> {
        res.send({
            message: "success",
            categori
        })
    })
}

exports.patch = (req, res) => {
    categori.update(
        req.body, {
            where: {id: req.params.id}
        }
    ).then(data => {
        res.send({
            message: "Berhasil"
        })
    })
}

exports.delete = (req, res) => {
    categori.destroy({ where: {id: req.params.id}}).then(data => {
        res.send({
            message: "Berhasil"
        })
    })
}