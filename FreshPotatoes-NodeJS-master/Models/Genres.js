'use strict';
module.exports = (sequelize, DataTypes) => {
  var Genres = sequelize.define('Genres', {
    name: DataTypes.STRING
  });
