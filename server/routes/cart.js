const express = require('express');
const postOrderValidation = require('../validators/postOrder.js');

const router = express.Router();

router.post('/', [
  ...postOrderValidation
], function (req, res) {
  console.log('Order', req.body);
  res.status(201) //422 - ошибка
  res.end()
});

module.exports = router;
