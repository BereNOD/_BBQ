const express = require('express');
const router = express.Router();

const bisnessMenuRouter = require('./bisnessMenu');
const navigationRouter = require('./navigation');
const catalogRouter = require('./catalog');
const cartRouter = require('./cart');

router.use('/bisness-menu', bisnessMenuRouter);
router.use('/navigation', navigationRouter);
router.use('/catalog', catalogRouter);
router.use('/cart', cartRouter);

module.exports = router;
