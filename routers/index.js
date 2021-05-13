const express = require('express');
const router  =express.Router();
const path = require('path');

const homecontroller  = require('../controllers/homeController');
router.get('/navbar',(req,res)=>{
    return res.render('navbar');
})
router.get('/',homecontroller.home);
router.use('/users',require('./users'));
router.use('/products',require('./products'));

module.exports = router;