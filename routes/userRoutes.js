const express = require('express');
const router = express.Router()
const User = require('../models/userModel')


router.post('/register',function(req,res){
    let user = new User({email: req.body.email, password: req.body.password});

    user.save(function(err,user){
        if(err){
            res.status(400).json({status:'failure', message:'unable to register', data: err.message})
        }
        else{
            res.status(200).json({status:'success', message:'register successful', data: user})
        }
    })
})

router.post('/login',function(req,res){
    let user = new User({email: req.body.email, password: req.body.password});

    User.findOne({email: req.body.email})
    .then((response) => {
        let password = response.password;
        if(password == req.body.password){
            res.json({status:'200', message:response});
        }
        else{
            res.json({status:'400', message:"invalid password"})
        }
    })
    .catch((error)=>{
        res.statusCode(401).json({status:'401', message:"user not found"})
        console.log(error)
    })
})





/**this login route is for validating the User when there isn't a database connection */
// router.post('/login',function(req,res){
//     let User = {email:"johndoe@email.com",password:"testing123"}

//     let password = User.password;
//     if(password == req.body.password){
//         res.status(200).json({status:"200", message:"login successful", data:req.body})
//     }
//     else{
//         res.status(400).json({status:"401", message:"login failed`"})
//     }
//     })

// router.put()
router.get('/allusers',(req,res)=>{
    User.find()
    .then((response)=>{
        res.status(200).json({meassge:"all users",data:response})
    })
    .catch((error)=>{
        res.status(400).json({ message:'error has occurred', data:error})
    })
})
// router.delete()


module.exports = router;