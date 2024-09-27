const express = require('express');
const router = express.Router();
const orderController = require('../controller/order');

router
  .post('/', orderController.createOrder)
  .get('/' , orderController.getAllOrders)
  .get('/:id' , orderController.getOrder)
  .put('/:id' , orderController.replaceOrder)
  .patch('/:id' , orderController.updateOrder)
  .delete('/:id' , orderController.deleteOrder)


exports.router = router;