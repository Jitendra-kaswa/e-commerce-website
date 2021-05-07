const express = require('express');
const ejs =  require('ejs');
const app = express();
const path = require('path');
const port = 8000;
const db = require('./config/mongoose');

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded({extended:true}));
// app.use(express.static(__dirname+'./assets/'));
app.use(express.static('assets'));


app.use('/',require('./routers'));

app.listen(port);