const controller = require('./controller');
const express = require('express');
const router = express.Router();

router
  .route('/photos/:id')
  .get(controller.get)

module.exports = router;