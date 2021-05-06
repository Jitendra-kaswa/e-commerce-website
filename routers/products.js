const express = require('express');
const router  =express.Router();
const productsController = require('../controllers/productsController');
router.get('/',(req,res)=>{
    res.send('Hello Ganduo');
})
router.get('/getall',productsController.getAll);

module.exports = router;