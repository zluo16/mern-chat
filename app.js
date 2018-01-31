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
const morgan = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const expressValidator = require('express-validator')
const compression = require('compression');
const flash = require('connect-flash')
const socket = require('socket.io').listen(4000).sockets
const models = require('./models/')
const config = require('./webpack.config.dev');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const history = require('connect-history-api-fallback');
const favicon = require('serve-favicon');
const mongoose = require('mongoose')
const configDB = require('./config/database')
const sesh = require('./config/session')
mongoose.connect(configDB.db)
const db = mongoose.connection

process.env.SESSION_SECRET = process.env.SESSION_SECRET || sesh.secret;

// Pass in passport for configuration
require('./config/passport')(passport)

// Initialize app
const app = express();

// Set up CORS
app.use(cors());
app.use(helmet());

// Logger
app.use(morgan('dev'));

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Compression
app.use(compression());

// Run Webpack Dev Server in development mode
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(config);
  app.use(history({
    rewrites: [
      { from: /\/api/, to: '' }
    ],
    verbose: true
  }));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
};

// Serve static files from React
app.use(express.static(path.join(__dirname, 'public')));

// Set up mongo store
const mongoStore = new MongoStore({ mongooseConnection: db });

// Express Session
app.use(session({
  store: mongoStore,
  secret: process.env.SESSION_SECRET || sesh.secret,
  cookie: { httpOnly: false },
  unset: 'destroy'
}));

// Initialize Passport
app.use(passport.initialize())
app.use(passport.session())

// For testing purposes only
app.use(function printSession(req, res, next) {
  // console.log('req.session', req.session);
  return next();
});

// Connect Flash
app.use(flash());

// Global flash variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

app.use('/', routes);

// Local host port
app.set('port', process.env.PORT || 8000);

// Set up server
app.listen(app.get('port'), function() {
  console.log('Server started on port ' + app.get('port'));
});

module.exports = app;
