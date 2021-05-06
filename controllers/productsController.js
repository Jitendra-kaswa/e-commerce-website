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
    return res.send("Product Added Successfully");
}

module.exports.getAll = async function(req,res){
    let products  = await Products.find({}).exec();
    return res.send({allProducts:products});
}

module.exports.getById = async (req,res)=>{
    let product = await Products.findById(req.params.id).exec();
    return res.send({product:product});
}

module.exports.updateById = async (req,res)=>{
    let product = await Products.findByIdAndUpdate(req.params.id,{},{new:true});
    return res.send({product:product});
}

module.exports.removeById = async (req,res)=>{
    let product = await Products.findByIdAndRemove(req.params.id);
    return 
}
