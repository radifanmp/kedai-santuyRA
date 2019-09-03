'use strict';
module.exports = (sequelize, DataTypes) => {
  const menu = sequelize.define('menu', {
    categoriId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, {});
  menu.associate = function(models) {
    // associations can be defined here
    menu.belongsTo(models.categori)
    menu.hasMany(models.order)
  };
  return menu;
};