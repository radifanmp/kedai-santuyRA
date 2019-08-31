const models = require ('../models')
const menu = models.menu

//CRUD
exports.index = (req, res) => {
    menu.findAll().then(data => res.send(data))
}

exports.show = (req, res) => {
    menu.findOne({
        where: { id: req.params.id }
    }).then(data => res.send(data))
}


exports.store = (req, res) => {
    menu.create(req.body).then(menu=> {
        res.send({
            message: "success",
            menu
        })
    })
}

exports.patch = (req, res) => {
    menu.update(
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
    menu.destroy({ where: {id: req.params.id}}).then(data => {
        res.send({
            message: "Berhasil"
        })
    })
}