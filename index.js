const express = require('express')
const server = express();
const fs = require('fs')
const mongoose = require('mongoose');
const path = require('path')
const { Schema } = mongoose;
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
require('dotenv').config().parsed;
const cors = require('cors');

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
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)))
server.use('/products' , productRouter.router);
server.use('/users' , userRouter.router);
server.use('*', (req,res)=>{
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

server.listen(process.env.PORT , ()=>{
    console.log('server started');
})


