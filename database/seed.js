const db = require('./index.js');
const mongoose = require('mongoose')
const initData = require('./seed.json')
console.log(initData)

mongoose.Promise = global.Promise

db.create(initData).then(() => mongoose.connection.close())