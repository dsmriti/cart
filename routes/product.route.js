// adunit.route.js

const express = require('express');
const app = express();
const prodRoutes = express.Router();

// Require product model in our routes module
let product = require('../models/product');

// Defined get data(index or listing) route
prodRoutes.route('/').get(function (req, res) {
    product.find(function (err, items){
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});

module.exports = prodRoutes;