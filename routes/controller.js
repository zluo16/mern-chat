const express = require('express');
const router = express.Router();
const passport = require('passport')
const User = require('../models/user')
const app = require('../app');

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
  // req.session.destroy(err => {
  //   res.send({ message: 'Logout Successful' })
  // });
  // logOut(req, function(err) {
  //   res.send({ message: 'Logout Successful' });
  // });
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
    return res.send(users);
  });
});

// Session (for testing purposes)
router.get('/session', function(req, res, next) {
  // res.send();
})

module.exports = router;
