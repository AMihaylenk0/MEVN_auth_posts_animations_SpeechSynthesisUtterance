const LocalStrategy = require('passport-local').Strategy;
const twitchStrategy = require("passport-twitch.js").Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bcrypt = require('bcryptjs');


// Load User model
const User = require('../models/User');

//LOCAL STRATEGY
module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match user
      User.findOne({
        email: email
      }).then(user => {
        if (!user) {
          console.log('not register')
          return done(null, false); 
        }
      
        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            console.log('Password incorect')
            return done(null, false);
          }
        });
      });
    })
  );
// Twitch strategy
  passport.use(new twitchStrategy({
    clientID: "061b3lp6tke0a9yh4w6qipfes5ztoo",
    clientSecret: "a8498xompnpxd5b2f353vmz3411hoz",
    callbackURL: "http://localhost:5000/users/auth/twitch/redirect",
    scope: "user:read:email" 
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ twitchId: profile.id, name:profile.display_name, email: profile.email}, function (err, user) {
      return done(err, user);
    });
    console.log(profile)
  }
));

// GOOGLE STRATEGY
passport.use(new GoogleStrategy({
  clientID: '343290557719-d05uf7b2p98f96egfvd0rhfit0tfengg.apps.googleusercontent.com',
  clientSecret: 'qmoIq9QdlKrftoi88d0beqCg',
  callbackURL: "http://localhost:5000/users/auth/google/redirect"
},
function(accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ googleId: profile.id, name: profile.displayName, email: profile.emails[0].value }, function (err, user) {
    return cb(err, user);
  });
  console.log(profile)/* данные юзера из гугла */
}
));



  passport.serializeUser(function(user, done) {
    done(null, user.id);
    
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
