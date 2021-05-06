const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ecom',{useNewUrlParser:true,useUnifiedTopology:true});

const db = mongoose.connection;
db.on('error',console.error.bind(console,'error connection to db'));
db.once('open',()=>{
    console.log('Successfully connected to database');
});

module.exports = db;