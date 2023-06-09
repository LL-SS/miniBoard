const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

// enable .env file to be used
// must install dotenv before using (npm i dotenv)
require('dotenv').config();

const indexRouter = require('./routes/index');
const listRouter = require('./routes/list');
const postRouter = require('./routes/post');
const createRouter = require('./routes/create');
const updateRouter = require('./routes/update');
const deleteRouter = require('./routes/delete');
const authRouter = require('./routes/auth');

const app = express();

// using URI in .env file instead of raw URI
mongoose
  .connect(process.env.mongodb_miniBoard)
  .then(() => console.log('database connected'))
  .catch(err => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/list', listRouter);
app.use('/post', postRouter);
app.use('/create', createRouter);
app.use('/update', updateRouter);
app.use('/delete', deleteRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000);

module.exports = app;
