const express = require('express');
const router = express.Router();

const bisnessMenuRouter = require('./bisnessMenu');
const navigationRouter = require('./navigation');

router.use('/bisness-menu', bisnessMenuRouter);
router.use('/navigation', navigationRouter);

module.exports = router;
