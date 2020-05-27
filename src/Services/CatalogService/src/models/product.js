/* Quentin Parmentier  */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const ProductSchema = new Schema({
    externalId: {type: String, required:true},
    libe: {type: String, required: true},
    desc: {type: String, required: true},
    price: {type: Number, required: true,min:0},
    typeId: {type: Schema.Types.ObjectId, required: true ,ref:'Type'},
})

const Product = Model('Product',ProductSchema);

module.exports = Product;