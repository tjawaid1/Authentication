//ure model
let mongoose = require('mongoose')
let passportLocalMongoose = require('passport-local-mongoose')
const { create } = require('../models/book')

let User = mongoose.Schema
(
    {
        username:
        {
            type:String,
            default:'',
            trim: true,
            required: 'username is required'
        },
        /*
        password
        {
            type: String,
            defult: '';
            trim: true,
            required: password is required'
        }
        */
       email:
       {
           type: String,
           default: '',
           trim:true,
           required: 'Display Name is required'
       },
       created:
       {
           type: Date,
           default: Date.now
       }
       
    },
    {
        collection: "users"
    }
);

//
let options = ({missingPasswordError: 'Wrong input'});
User.plugin(passportLocalMongoose,options);
module.exports.User = mongoose.model('User', User);