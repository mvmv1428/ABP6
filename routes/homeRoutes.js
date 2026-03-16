// ruta 
const express = require('express');
const router = express.Router();
const { getHome } = require('../controllers/homeController');

// get /
router.get('/', getHome);

module.exports = router;