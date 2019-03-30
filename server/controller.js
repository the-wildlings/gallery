const db = require('../database/index.js')

const controller = {
  get: (req, res) => {
    db
      .find({
        id: req.params.id
      })
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err))
  }
}

module.exports = controller;