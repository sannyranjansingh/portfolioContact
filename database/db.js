const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/portfolio").then(()=>{
    console.log("connectd to the database");

}).catch(()=>{
    console.log("No connection")
})