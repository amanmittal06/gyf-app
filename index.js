const express = require('express')
const server = express();
const fs = require('fs')
const mongoose = require('mongoose');
const { Schema } = mongoose;
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
const cors = require('cors');
require('dotenv').config().parsed;
const path = require('path')


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

server.use(cors());
server.use(express.json());
server.use('/products' , productRouter.router);
server.use('/users' , userRouter.router);
server.use('*', (req,res)=>{
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

server.listen(process.env.PORT , ()=>{
    console.log('server started');
})


