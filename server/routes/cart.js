const express = require('express');
const router = express.Router();

router.post('/', function (req, res) {
  console.log('Order', req.body);
  res.status(201)
  res.end()
});

module.exports = router;
