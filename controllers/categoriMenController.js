//Import Models
const models = require('../models')
const categori = models.categori
const menu = models.menu

//FUNCTION UTAMA CRUD
exports.show = (req, res) => {
  categori.findOne({
    include: [
      {
        model: menu,
      }
    ],
    where: { id: req.params.categoriId }
  }).then(data => res.send(data))
}