const express = require('express')
const server = express();
const fs = require('fs')
const mongoose = require('mongoose');
const { Schema } = mongoose;
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
const orderRouter = require('./routes/order')
const paymentRouter = require('./routes/payment')
const razorpayInstance  = require('./razorpayinstance')
require('dotenv').config().parsed;
const cors = require('cors');


main().catch(err => console.log(err));

async function main() {
  try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log('connected with database');
    razorpayInstance.createRazorpayInstance();
  }
  catch(err){
    console.log(err);
  }
}

const corsOptions = {
  origin: ['http://localhost:5173', 'https://gyf.org.in', 'https://goudiyayouthforum.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  credentials: true, 
};
server.use(cors(corsOptions));
server.options('*', cors(corsOptions));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use('/products' , productRouter.router);
server.use('/users' , userRouter.router);
server.use('/orders' , orderRouter.router);
server.use('/payments', paymentRouter.router)

server.listen(process.env.PORT , ()=>{
    console.log('server started');
})

module.exports = server
