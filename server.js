const express = require('express');
const ejs =  require('ejs');
const app = express();
const path = require('path');
const port = 8000;
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded({extended:true}));
app.use(express.static('assets'));

const session = require('express-session');
const passport = require('passport');
require('./config/passport-local');

app.use(session({
    secret: 'Jack Sparrow',
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

app.use('/',require('./routers'));
app.listen(port);