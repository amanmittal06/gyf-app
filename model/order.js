const mongoose = require('mongoose');
const {Schema} = mongoose

const sizeSchema = new Schema({
  size: String,
  quantity: Number
});

const itemSchema = new Schema({
  title:String,
  quantity: Number,
  sizes: [sizeSchema]
});

const orderSchema = new Schema({
  name: String,
  items: [itemSchema]
});

exports.Order  = mongoose.model('Order' , orderSchema);
