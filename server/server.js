const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser')
// const cookieSession = require('cookie-session');

const app = express();

 // Passport Config
require('./config/passport')(passport);

//connect server to mongoDB 
mongoose.connect(
  'mongodb', 
  { useNewUrlParser: true, useCreateIndex: true, }
).then(() => console.log('MongoDB Connected'));
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({credentials: true, origin: 'http://localhost:8080'}));
app.use(cookieParser())
// Express session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
 
 
app.use('/users', require('./routes/users.js'));

app.use('/posts', require('./routes/posts.js'))

const PORT = 5000;
app.listen(PORT);
console.log('api running on port ' + PORT + ': ');
