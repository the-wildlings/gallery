const controller = require('./controller');
const express = require('express');
const router = express.Router();

router
  .route('/photos/:id')
  .get(controller.get)
  .delete(controller.delete)
  .put(controller.update);

router
  .route('/')
  .get(controller.getAll)
  .post(controller.post);

module.exports = router;
