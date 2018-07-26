// AdUnit.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema for AdUnits
let item = new Schema({
  product_name: {type: String},
  product_image_url: {type: String},
  product_price: {type: Number},
  product_detail: {type: String},
  category: {type: String},
  brand:{type:String},
  size:{type:String},
  discount:{type:String}
},{
    collection: 'items'
});
module.exports = mongoose.model('item', item);