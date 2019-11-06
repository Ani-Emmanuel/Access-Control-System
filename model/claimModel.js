const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ClaimSchema = new Schema({
  name: { type: String, required: true },
  timestamps:true
});

module.exports = mongoose.model("Claim", ClaimSchema);
