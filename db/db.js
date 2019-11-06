const mongoose = require("mongoose");
require("dotenv").config();

//Connection 
mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("mongo connected sucessfully")
);
