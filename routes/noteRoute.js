const express = require('express');
const { model } = require('../models/noteModel');
const router = express.Router()
const Note = require('../models/noteModel')

router.post('/note', async(req,res)=>{

    let newNote =  Note(req.body);

   await newNote.save()
    .then((response)=>{
        res.status(200).json({status:true,message:'successfully added note', data:response})
    })
    .catch((error)=>{
        res.status(401).json({status:false, message:error})
    })
})

module.exports = router