const mongoose = require('mongoose')

const ClientSchema = mongoose.Schema({
    name: {type:String},

    Reps : [{
        fullname : {type:String},
        position : {type:String},
        email:{type:String}
         }]
})

const Client = module.exports=mongoose.model('Client',ClientSchema);