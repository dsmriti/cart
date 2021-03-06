// adunit.route.js

const express = require('express');
const app = express();
const prodRoutes = express.Router();

// Require product model in our routes module
let product = require('../models/product');

// Defined get data(index or listing) route
prodRoutes.route('/').get(function (req, res) {
    product.find({},function (err, items){
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});
//selection on basis of category
prodRoutes.route('/product-category/:category').get(function(req, res){
   let category = req.params.category;
   product.find().where({category:'men'})
   res.json(item);
  });


  //single product route based on id
prodRoutes.route('/product/:id').get(function (req, res) {
  let id = req.params.id;
  product.findById(id, function (err, item){
      res.json(item);
  });
});
module.exports = prodRoutes;