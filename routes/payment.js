const express = require('express');
const router = express.Router();
const paymentController = require('../controller/payment')

router
   .post('/checkout', paymentController.checkout)
   .post('/paymentverification', paymentController.paymentverification)   

exports.router = router;