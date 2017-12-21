const express = require('express');
const router = express.Router();
const path = require('path')
const controller = require('./controller')

// Set up API namespacing
router.use('/api', controller)

module.exports = router;
