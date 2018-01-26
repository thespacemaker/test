'use strict';
module.exports = (sequelize, DataTypes) => {
  var artistFilms = sequelize.define('artist_films', {
    credit_type: DataTypes.STRING
    role: DataTypes.STRING
    description: DataTypes.STRING
    artist_id: DataTypes.INTEGER
    film_id: DataTypes.INTEGER
  });
