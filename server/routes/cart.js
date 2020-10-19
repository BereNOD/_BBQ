const express = require('express');
const router = express.Router();

router.post('/', function (req, res) {
  console.log('Order', req.body);
  res.status(201) //422 - ошибка
  res.end()
});

module.exports = router;
