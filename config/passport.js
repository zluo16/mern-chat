const User = require('../models/user')
const LocalStrategy = require('passport-local').Strategy

module.exports = (config, passport) => {
  passport.use('signup', new LocalStrategy({
    passReqToCallback: true
  },
  function(req, username, password, done) {
    // Check if username already exists
    User.findOne({ 'user.username': username }, function(err, user) {
      // Handle error
      if (err) {
        console.log('Error in signup' + err);
        return done(err)
      }
      // If user already exists
      if (user) {
        console.log('User already exists');
        return done(null, false)
      } else {
        // Create user
        const newUser = User()
        newUser.user.username = username
        newUser.user.firstName = req.param('firstName')
        newUser.user.lastName = req.param('lastName')
        newUser.user.password = newUser.genPassHash(password)
        // Save user
        newUser.save(function(err) {
          if (err) {
            console.log('Error in saving user' + err);
            throw err
          }
          console.log('User signup successful');
          return done(null, newUser)
        })
      }
    })
  }))

  passport.use('login', new LocalStrategy({
    passReqToCallback: true
  },
  function(req, username, password, done) {
    // Find user by username if user exists
    User.findOne({ 'user.username': username }, function(err, user) {
      // Handle error
      if (err) {
        console.log('Error in login' + err);
        return done(err)
      }
      // If user doesn't exist
      if (!user) {
        console.log("User not found with username");
        return done(null, false);
      }
      // If user exists but password is not valid
      if (!user.isValidPassword(password)) {
        console.log('Password is not valid');
        return done(null, false)
      }
      // If user exists and password is validated
      return done(null, user)
    })
  }))
}
