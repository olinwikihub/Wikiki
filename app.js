// Utility Imports
var express = require('express');
var session = require('express-session');
var mongoose = require('mongoose');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
React = require('react');

// Route Imports
var base = require('./routes/base');

// Config
var app = express();

var mongoURI = process.env.MONGOURI || "mongodb://localhost/test";
var PORT = process.env.PORT || 3000;
mongoose.connect(mongoURI);

app.set('views', __dirname + '/views');

var options = { jsx: { harmony: true , beautify: true} };

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Routing Table

//GET

app.get('/', base.index);
app.get('/allRepos', base.allRepos);

// POSTS
//FIXME for testing
app.get('/addRepo', base.addRepo);


// Listen
app.listen(PORT);
