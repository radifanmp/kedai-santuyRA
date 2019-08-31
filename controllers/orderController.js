const models = require ('../models')
const order = models.order

//CRUD
exports.index = (req, res) => {
    order.findAll().then(data => res.send(data))
}

exports.show = (req, res) => {
    order.findOne({
        where: { id: req.params.id }
    }).then(data => res.send(data))
}


exports.store = (req, res) => {
    order.create(req.body).then(order=> {
        res.send({
            message: "success",
            order
        })
    })
}

exports.patch = (req, res) => {
    order.update(
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
    order.destroy({ where: {id: req.params.id}}).then(data => {
        res.send({
            message: "Berhasil"
        })
    })
}