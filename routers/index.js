const express = require('express');
const router  =express.Router();
const path = require('path');

router.get('/',(req,res)=>{
    res.render('home');
})
router.use('/users',require('./users'));
router.use('/products',require('./products'));

module.exports = router;