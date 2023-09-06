const mongoose = require ('mongoose');
const {Schema, model} = mongoose;

const ProductSchema = new Schema({
    name: String,
    price: Number,
    description: String,
    image_url: String,
});

const Product = model ('Product',ProductSchema);
module.exports = Product;