const express = require('express');
const router = express.Router();

const catalog = require('../mocks/catalog/index.json')

router.get('/', function (req, res) {
  res.json(catalog);
});

module.exports = router;
