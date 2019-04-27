var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProductSchema = new Schema({
    dateAdded: Date,
    type: String,
    sku: Number,
    groupId: String,
    name: String,
    model: String,
    brand: String,
    url: String,
    imageUrl: String,
    overlayImageUrl: String,
    overlayImageWidth: Number,
    overlayImageHeight: Number,
    onSpecial: Boolean,
    price: Number,
    flybuysPoints: Number,
    shippingClass: String,
    addToCart: Boolean,
    categories: String,
    inStock: Boolean,
    soldOut: Boolean
})

module.exports = mongoose.model('Product', ProductSchema)