const express = require('express');
const router  = express.Router();

router.get('/login',(req,res)=>{
    return res.render('login.ejs');
})
router.get('/register',(req,res)=>{
    return res.render('register');
})

module.exports = router;