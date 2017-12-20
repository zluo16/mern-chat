const express = require('express');
const router = express.Router();
const passport = require('passport')
const User = require('../models/user')

// Signup
router.post('/signup', passport.authenticate('local-signup'), function(req, res) {
  res.json(req.user);
});

// Login
router.post('/login', passport.authenticate('local-login'), function(req, res) {
  res.json(req.user)
})

// Logout
router.post('/logout', function(req, res) {
  res.logout()
})



module.exports = router;
