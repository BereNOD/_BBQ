var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const sync = require('./middlewares/sync')

var indexRouter = require('./routes/index');
var bisnessMenuRouter = require('./routes/bisnessMenu');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'assets')));
app.use(express.static(path.join(__dirname, '..', 'build')));

app.use('/api/bisness-menu', bisnessMenuRouter);
app.use('*', sync(indexRouter));

module.exports = app;
