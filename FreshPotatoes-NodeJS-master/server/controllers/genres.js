const genres = require('../models').genres;

module.exports = {
  create(req, res) {
    return genres
      .create({
        title: req.body.title,
      })
      .then(genres => res.status(201).send(genres))
      .catch(error => res.status(400).send(error));
  },
};
