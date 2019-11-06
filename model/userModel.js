const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: { type: String, required: true, min: 5 },
  email: { type: String, required: true },
  phoneNumber: String,
  password: { type: String, required: true },
  claim: [String],
  timestamps:true
});


module.exports = mongoose.model("User", userSchema);