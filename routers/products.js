const express = require('express');
const router  = express.Router();
const multer  = require('multer');
const path  = require('path');
const productsController = require('../controllers/productsController');

var Storage = multer.diskStorage({ // this is to send the file and get file name 
    destination:'./assets/uploads',
    filename:(req,file,callbackFunction)=>{
        callbackFunction(null,file.fieldname+'_'+Date.now()+path.extname(file.originalname));
    }
})
var upload = multer({ // this is the middleware 
    storage:Storage // this function is defined above
}).single('product_image'); // this name has to be same as given in the form while getting the data

router.get('/update/:id',productsController.updatePage); // routers to update product
router.post('/update',upload,productsController.updateById);

router.delete('/delete/:id',productsController.removeById); // router to delete product

router.post('/addProduct',upload,productsController.addProduct); // router to create new product
router.get('/addProduct',(req,res)=>{
    return res.render('addproduct');
})

router.put('/like-dislike/:id',productsController.like_dislike);
module.exports = router;