const User = require('../models/userModel')
const bcrypt = require('bcrypt')

const securePassword = async (pass)=>{
     try{
        const bpass = await bcrypt.hash(pass,8)
        return bpass
     }catch(error){
        console.log(error)
     }
}

const loadRegister = async(req,res)=>{
    try{
        res.render('registration')

    }catch(error){
        console.log(error)
    }
}

const insertUser = async(req,res)=>{
    try{
        const spass = await securePassword(req.body.pass)
        const user  = new User({
            name:req.body.name,
            email:req.body.email,
            mobile:req.body.mno,
            image:req.file.filename,
            pass:spass,
            is_admin:0 
        })
        const userData = await user.save()
        if(userData){
            res.render('registration',{message:'your form has been submited '})
        }else{
            res.render('registration',{message:'your form has been not submited'})
        }
    }catch(error){
        console.log(error)
    }
}

module.exports= { loadRegister, insertUser}