const express = require('express');
const router = express.Router();

const navigation = require('../mocks/navigation.json')

router.get('/', function (req, res) {
  res.json(navigation);
});

module.exports = router;
