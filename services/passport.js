const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const Admin = require('../models/Admin');

passport.serializeUser( (user, done) => {
  done(null, user.id)
});

passport.deserializeUser( (id, done) => {
  Admin.findById(id).then(user => { done(null, user)} )
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    Admin.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.validatePassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
))
