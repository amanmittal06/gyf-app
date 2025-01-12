const express = require('express');
const router = express.Router();
const newsletterController = require('../controller/newsletter');

router
  .post('/', newsletterController.createNewsletter)
  .get('/' , newsletterController.getAllNewsletters)
  .get('/latest' , newsletterController.getLatestNewsletter)


exports.router = router;