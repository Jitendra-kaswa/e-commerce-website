const Products = require('../models/products');

module.exports.addProduct = async(req,res)=>{
    await Products.create({
        name:req.body.name,
        manufactured_by:req.body.manufactured_by,
        price:req.body.price,
        image_url:req.file.filename,
        description:req.body.description,
        created_at:req.body.created_at
    });
    return res.redirect('/');
}

module.exports.updateById = async (req,res)=>{
    await Products.findByIdAndUpdate(req.body.prod_id,{
        name:req.body.name,
        manufactured_by:req.body.manufactured_by,
        price:req.body.price,
        description:req.body.description
    },{new:true});
    
    if(req.file){
        await Products.findByIdAndUpdate(req.body.prod_id,{
            image_url:req.file.filename
        },{new:true});
    }
    return res.redirect('/')
}

module.exports.removeById = async (req,res)=>{
    let product = await Products.findByIdAndRemove(req.params.id);
    return res.send("Prodect Removed Successfully");
}

module.exports.updatePage = async (req,res)=>{
    
    let prod = await Products.findById(req.params.id);
    return res.render('updateProduct',{
        product:prod
    });
}

module.exports.like_dislike = async(req,res)=>{
    await Products.findByIdAndUpdate(req.params.id,{like:req.body.likes,dislike:req.body.dislikes});
    return res.send("Successfully voted");
}
