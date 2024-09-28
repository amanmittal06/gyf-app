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
    
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Database comes here

    // await Payment.create({
    //   razorpay_order_id,
    //   razorpay_payment_id,
    //   razorpay_signature,
    // });

    res.redirect(
      `http://localhost:5173/store`
    );
    } else {
    res.status(400).json({
      success: false,
    });
  }
}