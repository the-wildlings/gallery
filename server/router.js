const controller = require('./controller');
const express = require('express');
const router = express.Router();

router  
  .route('/api')
  .get(controller.get)

module.exports = router;
