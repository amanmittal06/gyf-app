const razorpayInstance  = require('../razorpayinstance');
const crypto = require('crypto');



exports.checkout = async (req, res)=>{
    try{
        const instance = await razorpayInstance.getRazorpayInstance();
        const amount = req.body.amount;
        const options ={
        amount: amount*100,
        currency: "INR",
        }
        const order = await instance.orders.create(options);
        res.status(200).json({
            success: true,
            order
        })
        console.log(order)
    }
    catch(err){
        console.log
    }
    

    
}

exports.paymentverification = async (req, res)=>{
    
    res.redirect(
        `http://localhost:5173/store`
    );
}