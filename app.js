const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express');
const routes = require('./routes/index')
const users = require('./routes/users')
const http = require('http')
const path = require('path');
const cors = require('cors')
const session = require('express-session')
const expressValidator = require('express-validator')
const flash = require('connect-flash')
const socket = require('socket.io').listen(4000).sockets
const mongoose = require('mongoose')
mongoose.connect('mongodb://mern-chat:sandwichDragons@ds159866.mlab.com:59866/mern-chat-db')
const db = mongoose.connection

// Initialize app
const app = express();

// Enable up CORS
app.use(cors())

// BodyParser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// Express Session
app.use(session({
  secret: 'sandwichDragons',
  saveUninitialized: true,
  resave: true
}))

// Initialize Passport
app.use(passport.initialize())
app.use(passport.session())

// Express Validator
app.use(expressValidator(param, msg, value, location))

// Connect Flash
app.use(flash())

// Global flash variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
})

app.use('/', routes)
app.use('/users', users);

// Local host port
app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), function() {
  console.log('Server started on port ' + app.get('port'));
})

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
