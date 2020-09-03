const express = require('express');
const router = express.Router();

const bisnessMenu = require('../mocks/bisnessMenu.json')

router.get('/', function (req, res) {
  res.json(bisnessMenu);
});

module.exports = router;
