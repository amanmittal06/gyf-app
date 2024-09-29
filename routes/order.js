const express = require('express');
const router = express.Router();
const orderController = require('../controller/order');

router
  .post('/', orderController.createOrder)
  .get('/' , orderController.getAllOrders)
  .get('/:name' , orderController.getOrders)
  .put('/:id' , orderController.replaceOrder)
  .patch('/:id' , orderController.updateOrder)
  .delete('/:id' , orderController.deleteOrder)


exports.router = router;