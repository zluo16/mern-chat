const express = require('express');
const router = express.Router();
const passport = require('passport')
const User = require('../models/user')

require('../config/passport')(null, passport)

// Signup
router.post('/signup', passport.authenticate('signup'), function(req, res) {
  // console.log(req);
  res.send(req.user);
});

// Login
router.post('/login', passport.authenticate('login'), function(req, res) {
  res.send(req.user);
});

// Logout
router.get('/logout', function(req, res) {
  req.logout();
});

// Users (used for testing purposes)
router.get('/users', function(req, res) {
  // Find all users
  User.find({}, function(err, users) {
    // Handle errors
    if (err) {
      throw err
    }
    // return results in JSON form
    // res.setHeaders('Content-Type', 'application/json')
    return res.send(users);
  });
});

module.exports = router;
