const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const https = require('https');

const index = require('./routes/index');
const contact = require('./routes/contact');
const portfolio = require('./routes/portfolio');
const webhooks = require('./routes/webhooks');
const blog = require('./routes/blog-medium');

const app = express();

//set response headers
app.use(function (req, res, next) {
   res.setHeader('charset', 'utf-8')
   next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'projects')));

app.use('/', index);
app.use('/contact', contact);
app.use('/portfolio', portfolio);
app.use('/blog', blog);
app.use('/hook', webhooks);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
   const err = new Error('Not Found');
   err.status = 404;
   next(err);
});

// error handler
app.use(function (err, req, res, next) {
   // set locals, only providing error in development
   res.locals.message = err.message;
   res.locals.error = req.app.get('env') === 'development' ? err : {};

   // render the error page
   res.status(err.status || 500);
   res.render('error');
});

module.exports = app;