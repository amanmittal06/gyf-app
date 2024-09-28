const express = require('express');
const router = express.Router();
const storeUserController = require('../controller/storeuser');

router
  .post('/', storeUserController.createStoreUser)
  .get('/:email', storeUserController.getStoreUser);

exports.router = router;