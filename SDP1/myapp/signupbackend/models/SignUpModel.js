const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    date:{
      type:Date,
      default:Date.now
    }
})

module.exports = mongoose.model('sdp',signUpTemplate)