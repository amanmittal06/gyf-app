const model  = require('../model/order')
const Order = model.Order;

exports.createOrder  = (req,res) =>{
    const order = new Order(req.body);
    order.save()
     .then(() => {
        res.status(201).json(req.body);
        console.log('Order saved');
      })
     .catch((err) => {
        res.status(400);
        console.error(err);
      });
}

exports.getAllOrders = async (req,res) => {
    const orders = await Order.find({});
    res.json(orders);
}

exports.getOrders = async (req, res) => {
    const email = req.params.name;
    const order = await Order.find({name:email});
    res.json(order);
}

exports.replaceOrder = async (req, res) => {
    
    const id = req.params.id;
    try{
        const doc = await Order.findOneAndReplace({_id:id}, req.body , {new:true});
        res.status(201).json(doc);
    }
    catch(err){
        res.status(400).json(err);
    }

}

exports.updateOrder = async (req, res) => {

    const id = req.params.id;
    try{
        const doc = await Order.findByIdAndUpdate(id, req.body , {new:true});
        res.status(201).json(doc);
    }
    catch(err){
        res.status(400).json(err);
    }

}

exports.deleteOrder = async (req, res) => {

    const id = req.params.id;
    try{
        const doc = await Order.findOneAndDelete({_id:id});
        res.status(201).json(doc);
        console.log('Order deleted')
    }
    catch(err){
        res.status(400).json(err);
    }

}