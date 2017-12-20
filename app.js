const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express');
const routes = require('./routes/index')
const controller = require('./routes/controller')
const passport = require('passport')
const http = require('http')
const path = require('path');
const cors = require('cors')
const helmet = require('helmet')
const session = require('express-session')
const expressValidator = require('express-validator')
const flash = require('connect-flash')
const socket = require('socket.io').listen(4000).sockets
const mongoose = require('mongoose')
mongoose.connect('mongodb://mern-chat:sandwichDragons@ds159866.mlab.com:59866/mern-chat-db')
const db = mongoose.connection

// Initialize app
const app = express();

// Set up CORS
app.use(cors())
app.use(helmet())

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
// app.use(expressValidator(param, msg, value))

// Connect Flash
// app.use(flash())

// Global flash variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
})

app.use('/', routes)

// Local host port
// app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), function() {
  console.log('Server started on port ' + app.get('port'));
})

module.exports = app;
