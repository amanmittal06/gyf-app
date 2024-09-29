const razorpayInstance  = require('../razorpayinstance');
const crypto = require('crypto');
const model  = require('../model/order')
const Order = model.Order;


let currOrder;

exports.checkout = async (req, res)=>{
    currOrder = req.body;
    try{
        const instance = await razorpayInstance.getRazorpayInstance();
        const amount = currOrder.amount;

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

  const body = `${razorpay_order_id}|${razorpay_payment_id}`;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Database comes here

    const newOrder = new Order(currOrder);
    newOrder.save()
     .then(() => {
        res.redirect('https://www.gyf.org.in/orders').json({
          orderSuccess:true,
        });
      })
     .catch((err) => {
        res.status(400).json({
            paymentSuccess:true,
            orderSuccess:false,
        });
        console.error(err);
      });
    } 
    else 
    {
    res.status(400).json({
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      es: expectedSignature,
      rs: razorpay_signature,
      success: false,
    });
    }
}