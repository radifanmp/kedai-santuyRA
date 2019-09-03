//Import Models
const models = require('../models')
const order = models.order
const transaction = models.transaction
const menu = models.menu

exports.show = (req, res) => {
  order.findOne({
    include: [
      {
        model: menu,
      },
      {
        model: transaction
      }
    ],
    where: { transactionId: req.params.transactionId, menuId:req.params.menuId }
  }).then(data => res.send(data))
}