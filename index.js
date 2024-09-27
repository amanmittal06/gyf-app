const express = require('express')
const server = express();
const fs = require('fs')
const mongoose = require('mongoose');
const { Schema } = mongoose;
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
const orderRouter = require('./routes/order')
const paymentRouter = require('./routes/payment')
require('dotenv').config().parsed;
const cors = require('cors');
const Razorpay = require('razorpay')


const allowedOrigins = [
  'http://localhost:5173', 
  'https://gyf.org.in', 
  'https://goudiyayouthforum.vercel.app' 
];


const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true); 
    } else {
      callback(new Error('Not allowed by CORS')); 
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true ,
  allowedHeaders: ['Content-Type', 'Authorization'],
};

server.options('*', cors(corsOptions));

main().catch(err => console.log(err));

async function main() {
  try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log('connected with database')
  }
  catch(err){
    console.log(err);
  }
}

exports.instance = new Razorpay({
  key_id : process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET

});

server.use(cors(corsOptions));
server.use(express.json());
server.use('/products' , productRouter.router);
server.use('/users' , userRouter.router);
server.use('/orders' , orderRouter.router);
server.use('/payments', paymentRouter.router)

server.listen(process.env.PORT , ()=>{
    console.log('server started');
})


