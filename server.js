const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
app.use('/',require('./routers'));

app.listen(port);