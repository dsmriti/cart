var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    product_name: {type:string},
    product_image_url: {type: any},
    product_price:{type: number},
    product_detail:{type: any},
    category:{type: any}
})

module.exports=mongoose.model('Products',schema);