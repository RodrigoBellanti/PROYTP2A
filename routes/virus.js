const express = require('express');
const router = express.Router();
const dataVirus = require('./../data/virus');


router.get('/', async function(req, res, next) {
  res.json(await dataVirus.getTotals());
});

module.exports = router;