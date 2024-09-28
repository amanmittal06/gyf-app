const mongoose = require('mongoose');
const {Schema} = mongoose

const storeUserSchema = new Schema({
    email:{
        type:String,
        unique:true
    },
     
    isAdmin: {
        type:Boolean,
        default: false,
    }
});


exports.StoreUser  = mongoose.model('StoreUser' , storeUserSchema);
