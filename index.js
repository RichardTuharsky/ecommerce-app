const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ecommerce_rici_app:1998.com1998R@cluster0.ymsl6.mongodb.net/shop?retryWrites=true&w=majority"
).then(() => console.log("DBConnection success"))
.catch((err)=>{console.log("not")
});

app.listen(5000, ()=> {
    console.log("Backend server is running");
});