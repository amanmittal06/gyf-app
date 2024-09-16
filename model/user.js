const mongoose = require('mongoose');
const {Schema} = mongoose

const userSchema = new Schema({
    fullName: String,
    mobile: Number,
    email: String,
    chapter: String
});


exports.User  = mongoose.model('User' , userSchema);
