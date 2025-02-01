const express = require('express');
const router = express.Router();
const chantingCountsController = require('../controller/chantingCounts');

router
  .post('/', chantingCountsController.createData)
  .get('/byUsername/:username' , chantingCountsController.getDataofAUser)
  .patch('/:id' , chantingCountsController.updateData)


exports.router = router;