const User = require('../models/users');
module.exports.Signin = (req,res)=>{
    return res.render('login');
}

module.exports.SignUp = (req,res)=>{
    return res.render('register');
}

module.exports.login =async (req,res)=>{
    let findUser = await User.findOne({email:req.body.email});
    if(findUser===null)
        return res.send("User not found");
    if(req.body.password===findUser.password)
        return res.redirect('/')
    return res.send('Enter Correct Password');
}

module.exports.register = async (req,res)=>{
    let findUser = await User.findOne({email:req.body.email}).exec();
    
    if(findUser!==null)
        return res.send('Alreay have an account');

    if(req.body.password === req.body.confirm_password){
        let user = await User.create({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            password:req.body.password
        })
        return res.redirect('./login');
    }
    return res.send("Please enter right Password");
}

