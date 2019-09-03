//Import Models
const models = require('../models')
const transaction = models.transaction
const order = models.order
const menu = models.menu

//FUNCTION UTAMA CRUD
exports.index = (req, res) => {
  transaction.findAll().then(data => res.send(data))
}
exports.show = (req, res) => {
  transaction.findOne({
    include: [
      {
        model: order,
        include:[
          {model:menu}
        ]
      }
    ],
    where: { id: req.params.id }
  }).then(data => res.send(data))
}