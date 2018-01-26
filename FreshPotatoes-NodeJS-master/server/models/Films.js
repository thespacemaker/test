'use strict';
module.exports = (sequelize, DataTypes) => {
  var films = sequelize.define('Films', {
    title: DataTypes.STRING
    release_date: DataTypes.STRING
    tagline: DataTypes.STRING
    revenue: DataTypes.INTEGER
    budget: DataTypes.INTEGER
    runtime: DataTypes.INTEGER
    original_language: DataTypes.STRING
    status: DataTypes.STRING
    genre_id: DataTypes.INTEGER
  });
