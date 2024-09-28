const Razorpay = require('razorpay')


let razorpayInstance;
const createRazorpayInstance = () =>{

    razorpayInstance = new Razorpay({
        key_id : process.env.RAZORPAY_API_KEY,
        key_secret: process.env.RAZORPAY_API_SECRET
    });

    console.log('instance created successfully', razorpayInstance);
}

const getRazorpayInstance = () => razorpayInstance;

module.exports = {
    createRazorpayInstance,
    getRazorpayInstance,
  };