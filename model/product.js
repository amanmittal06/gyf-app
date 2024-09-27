const mongoose = require('mongoose');
const {Schema} = mongoose

const productSchema = new Schema({
    title: String,
    description: String,
    image: String,
    price: Number,
    stock: Number,
    sizes: Array,
    quantity: {type: Number, default: 0},
});

exports.Product  = mongoose.model('Product' , productSchema);