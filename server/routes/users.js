const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load User model
const User = require('../models/User');

const { ensureAuthenticated } = require('../config/auth');



// Register
router.post('/register', (req, res) => {
  const { name, email, password, password2 } = req.body;

  if (!name || !email || !password || !password2) {
    console.log('Please enter all fields');
  }

  else if (password != password2) {
    console.log('Passwords do not match');
  }

  else if (password.length < 6) {
    console.log('Password must be at least 6 characters');
  }
  else { 
     User.findOne({ email: email }).then(user => {
      if (user) {
        console.log( 'Email already exists' )
      } else {
        const newUser = new User({
          email,
          password,
          name
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(() => {
                res.sendStatus(200)
                console.log('user registered')
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  };
});

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate("local",  (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(400).send([user, "Cannot log in", info]);
    }
    
    req.login(user, err => {
      res.send("Logged in")
    });
    console.log('User logged in')
  })(req, res, next);
});


router.get("/user",ensureAuthenticated,  (req, res) => {
   console.log(req.user)
   console.log(req.isAuthenticated())
   console.log('da')
   console.log(req.cookies)
    res.send({ user: req.user })
    // res.sendStatus(200)
})


// Twitch authentication
router.get("/auth/twitch", passport.authenticate("twitch.js"));
router.get("/auth/twitch/redirect", passport.authenticate("twitch.js", { failureRedirect: "/" }), function(req, res) {
    // Successful authentication, redirect home.
    console.log('\nSuccessful')
    console.log(req.user,'LUL')
    // res.redirect("/");
    res.send('twitch`s ok')
});

// Google authentication
router.get("/auth/google", passport.authenticate("google" , { scope: ['profile','email'] }));
router.get("/auth/google/redirect", passport.authenticate("google", { failureRedirect: "/" }), function(req, res) {
  // Successful authentication, redirect home.
  console.log('Successful')
  console.log(req.isAuthenticated())
  console.log(req.user)
  // res.redirect("/");
  res.send('google`s ok')
});
// Logout
router.get("/logout", (req, res) => {
  
  console.log("logged out")
  req.logout();
  res.send();
});

module.exports = router;
