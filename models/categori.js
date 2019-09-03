'use strict';
module.exports = (sequelize, DataTypes) => {
  const categori = sequelize.define('categori', {
    name: DataTypes.STRING
  }, {});
  categori.associate = function(models) {
    // associations can be defined here
    categori.hasMany(models.menu)
  };
  return categori;
};