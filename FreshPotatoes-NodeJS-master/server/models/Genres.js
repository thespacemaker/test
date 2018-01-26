'use strict';
module.exports = (sequelize, DataTypes) => {
  var genres = sequelize.define('Genres', {
    name: DataTypes.STRING
  });
