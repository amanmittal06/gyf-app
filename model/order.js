const mongoose = require('mongoose');
const {Schema} = mongoose

const sizeSchema = new Schema({
  type: String,
  quantity: Number
});

const itemSchema = new Schema({
  title:String,
  quantity: Number,
  sizes: {type:[sizeSchema], default:undefined}
});

const orderSchema = new Schema({
  name: String,
  items: [itemSchema],
  amount: Number,
  delivered: {type:Boolean, default:false},
  paymentID: {type: Number, default: undefined},
  paymentStatus: {type: String, default:'due'},
});

exports.Order  = mongoose.model('Order' , orderSchema);
