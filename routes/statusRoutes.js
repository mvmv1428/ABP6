// ruta

const express = require('express');
const router = express.Router();
const {getStatus} = require('../controllers/statusController');

// get /status
router.get('/', getStatus);

module.exports = router;