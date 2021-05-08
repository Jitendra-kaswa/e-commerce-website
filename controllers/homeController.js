const Products = require('../models/products');
module.exports.home = async(req,res)=>{
    let prods = await Products.find({}).exec();
    return res.render('home',{
        title:'Home Page',
        products:prods
    })
}