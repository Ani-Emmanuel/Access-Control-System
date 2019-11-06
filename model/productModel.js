const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  productModel: { type: String, required: true },
  purchaseDate: {type:Date, default:Date.now()},
  manufacturalDate:{type:Date, required: true},
  expiringDate: { type: Date, required: true },
  timestamps:true
});


module.exports = mongoose.model("Product", productSchema);