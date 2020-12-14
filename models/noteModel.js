const mongoose = require('mongoose')

const NoteSchema = mongoose.Schema({
    title:{type:String},
    body:{type:String}
})


const Note = module.exports=mongoose.model('Note',NoteSchema);