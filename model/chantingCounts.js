const mongoose = require('mongoose');

const {Schema} = mongoose

const dataSchema = new Schema({
    username: {type:String, required: true},
    roundsChanted: {type: Number, default: 0},
    roundsRemaining: {type: Number , default: 0}
    
});

exports.Data = mongoose.model('Data' , dataSchema);