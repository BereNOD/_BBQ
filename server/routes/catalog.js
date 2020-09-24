const express = require('express');
const router = express.Router();

const catalog = require('../mocks/catalog/index.json')

router.get('/:slug?', function (req, res) {
  console.log(`Catalog: ${req.params.slug}`);
  res.json(catalog);
});

module.exports = router;
