let mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://localhost/mydatabase",()=>{
    console.log("connect")})
