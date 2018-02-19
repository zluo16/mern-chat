const express = require('express');
const router = express.Router();
const passport = require('passport')
const models = require('../models/')
const app = require('../app');

// Signup
router.post('/signup', passport.authenticate('signup'), function(req, res) {
  res.send(req.user);
});

// Login
router.post('/login', passport.authenticate('login'), function(req, res) {
  res.json(req.user);
});

// Logout
router.get('/logout', function(req, res) {
  req.logout();
  res.send({ message: 'Logout Successful' });
});

// Users (used for testing purposes)
router.get('/users', function(req, res) {
  // Find all users
  models.Users.find({}, function(err, users) {
    // Handle errors
    if (err) {
      throw err
    }
    // return results in JSON form
    let formattedUsers = users.map(u => {
      return {
        id: u._id,
        firstName: u.firstName,
        lastName: u.lastName,
        username: u.username
      };
    });
    return res.send(formattedUsers);
  });
});

// Session (for testing purposes)
router.get('/session', function(req, res, next) {
  // res.send();
})

module.exports = router;
