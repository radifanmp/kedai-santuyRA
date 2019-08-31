'use strict';
module.exports = (sequelize, DataTypes) => {
  const categori = sequelize.define('categori', {
    name: DataTypes.STRING
  }, {});
  categori.associate = function(models) {
    // associations can be defined here
  };
  return categori;
};