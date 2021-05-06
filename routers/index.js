const express = require('express');
const router  =express.Router();

router.get('/',(req,res)=>{
    res.send('Hello Friends');
})
router.use('/products',require('./products'));

module.exports = router;