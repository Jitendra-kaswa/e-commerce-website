const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
const db = require('./config/mongoose');
app.use(express.static(__dirname+'./assets/'));
app.use('/',require('./routers'));

app.listen(port);