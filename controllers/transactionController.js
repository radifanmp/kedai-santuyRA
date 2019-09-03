//Import Models
const models = require('../models')
const transaction = models.transaction

//FUNCTION UTAMA CRUD
exports.index = (req, res) => {
  transaction.findAll().then(data => res.send(data))
}

exports.show = (req, res) => {
  transaction.findOne({
    where: { id: req.params.id }
  }).then(data => res.send(data))
}

exports.store = (req, res) => {
  console.log(req.body)
  transaction.create(req.body).then(data => {
    res.send({
      message: "success",
      data
    })
  })
}

exports.patch = (req, res) => {
  transaction.update(
    req.body, {
      where: { id: req.params.id }
    }
  ).then(data => {
    res.send({
      message: "success"
    })
  })
}

exports.delete = (req, res) => {
  transaction.destroy({
    where: {
      id: req.params.id
    }
  });
}