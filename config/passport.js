// const passport = require('passport')
const User = require('../models/user')
const LocalStrategy = require('passport-local').Strategy

module.exports = (passport) => {
  // Serialize user
  passport.serializeUser(function(user, done) {
    // console.log(user.local);
    // console.log(done);
    done(null, user.local);
  });
  // Deserialize user
  passport.deserializeUser(function(user, done) {
    console.log(user);
    User.findOne({ 'user.username': username }, function(err, usr) {
      if (err) {
        return done(err);
      }
      done(null, usr.local);
    })
  });

  // Passport local signup strategy
  passport.use('signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, username, password, done) {
    // Check if username already exists
    User.findOne({ 'local.username': username }, function(err, user) {
      // Handle error
      if (err) {
        console.log('Error in signup ' + err);
        return done(err)
      }
      // If user already exists
      if (user) {
        console.log('User already exists');
        return done(null, false)
      } else {
        // Create user
        const newUser = User()
        newUser.local.username = username
        newUser.local.firstName = req.param('firstName')
        newUser.local.lastName = req.param('lastName')
        newUser.local.password = newUser.genPassHash(password)
        // Save user
        newUser.save(function(err) {
          if (err) {
            console.log('Error in saving user ' + err);
            throw err
          }
          console.log('User signup successful');
          return done(null, newUser)
        })
      }
    })
  }))
  // passport local login strategy
  passport.use('login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, username, password, done) {
    // Find user by username if user exists
    User.findOne({ 'local.username': username }, function(err, user) {
      // Handle error
      if (err) {
        console.log('Error in login ' + err);
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
};
