const controller = require('./controller');
const express = require('express');
const router = express.Router();

router.route('/photos/:id').get(controller.get);

router.route('/').get(controller.getAll);

module.exports = router;
