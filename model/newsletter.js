const mongoose = require('mongoose');
const {Schema} = mongoose

const newsletterSchema = new Schema({
   volume: Number, 
   coverImage: String,
   adress: String,
   latest: {type: Boolean, default: false},
   description: {type: String, default: undefined}
});


exports.Newsletter  = mongoose.model('Newsletter' , newsletterSchema);
