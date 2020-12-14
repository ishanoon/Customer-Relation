const express = require('express');
const router = express.Router()
const Client = require('../models/clientModel');



router.post('/addclient',(req,res)=>{

    let newClient = new Client(req.body);
     newClient.save()
     .then((response)=>{
         res.status(200).json({status:'success',mesaage:'client added successfully', data:response})
     })
     .catch((error)=>{
         res.status(401).json({status:'error', message:'an error occured', data:error})
     })
})


// router.put()

router.get('/allclient',(req,res)=>{
    Client.find()
    .then((response)=>{
        res.status(200).json({message:'succes', data:response})
    })
    .catch((error)=>{
        res.status(404).json({ message:'error has occurred', data:error})
    })
})

router.get('/allclient/:name', (req,res)=>{
    
    console.log(req.params.name)

    Client.find({name:req.params.name})
    .then((response)=>{
        res.json({status:'200', message:response})
    })
    .catch((error)=>{
        res.json({status:'400', message:'name not found'})
    })
})



router.delete('/removeclient',(req,res)=>{
    Client.deleteOne({name:req.body.name}, (err,data)=>{
        if(err){
            res.json(err)
        }else{
            res.json(data)
        }
    })
})

module.exports = router;