'use strict';
module.exports = (sequelize, DataTypes) => {
  var Artists = sequelize.define('Artists', {
    name: DataTypes.STRING
    birthday: DataTypes.STRING
    deathday: DataTypes.STRING
    gender: DataTypes.INTEGER
    place_of_birth: DataTypes.STRING
  });
