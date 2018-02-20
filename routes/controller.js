const express = require('express');
const router = express.Router();
const passport = require('passport')
const models = require('../models/')
const app = require('../app');

// Signup
router.post('/signup', passport.authenticate('signup'), function(req, res) {
  res.json(req.user);
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
  models.User.find({}, function(err, users) {
    // Handle errors
    if (err) {
      throw err
    }
    // return results in JSON form
    let formattedUsers = users.map(u => {
      return {
        id: u.local._id,
        firstName: u.local.firstName,
        lastName: u.local.lastName,
        username: u.local.username,
        fullname: `${u.local.firstName} ${u.local.lastName}`
      };
    });
    return res.json(formattedUsers);
  });
});

// Select User
router.get('/user/:username', (req, res) => {
  models.User.findOne({ 'local.username': req.username }, function(err, user) {
    // Find the user
    if (err) {
      throw err;
    };
    // Send the user
    let formattedUser = {
      id: user.local._id,
      firstName: user.local.firstName,
      lastName: user.local.lastName,
      username: user.local.username,
      fullname: `${user.local.firstName} ${user.local.lastName}`
    }
    return res.json(formattedUser);
  });
});

// Session (for testing purposes)
router.get('/session', function(req, res, next) {
  // res.send();
})

module.exports = router;
