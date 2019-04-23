const connection = require('./Postgres.js');
const Sequelize = require('sequelize');
// const data = require('../data.jsonb');

const Model = connection.define('galleries', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  title: Sequelize.TEXT,
  location: Sequelize.TEXT,
  urls: Sequelize.ARRAY(Sequelize.TEXT)
  // data: Sequelize.JSONB
});
// Model.bulkCreate([data]).then(() => console.log('inserted into PSQL'));
Model.sync({ force: true }).then(() => console.log('PSQL DB CONNETED'));

module.exports = Model;
