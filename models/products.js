const mongoose = require('mongoose');
const ProductsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    manufactured_by:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required:'true'
    },
    image_url:{
        type:String,
        default:'default.png'
    },
    description:{
        type:String
    },
    created_at:{
        type: Date,
        default:Date.now()
    },
    like:{
        type:Number,
        default:0
    },
    dislike:{
        type:Number,
        default:0
    }
});

const Products = mongoose.model('Products', ProductsSchema);
module.exports = Products;