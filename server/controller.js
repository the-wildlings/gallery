// const db = require('../database/index.js'); //mongodb
const db = require('../database/index.js');

const controller = {
  get: (req, res) => {
    db.find({
      id: req.params.id
    })
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => res.status(404).send(err));
  },

  getAll: (req, res) => {
    db.find()
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err));
  },

  post: (req, res) => {
    let { id, title, location, urls } = req.body;
    db.insertMany({ id, urls, title, location })
      .then(() => res.status(201).send('posted'))
      .catch(err => console.error(err));
  },

  delete: (req, res) => {
    let { id } = req.params;
    db.deleteOne({ id })
      .then(() => res.status(203).send('deleted'))
      .catch(err => console.error(err));
  },

  update: (req, res) => {
    let { id } = req.params;
    db.updateOne({ id }, req.body)
      .then(() => res.status(202).send('updated'))
      .catch(err => console.error(err));
  }
};

module.exports = controller;
