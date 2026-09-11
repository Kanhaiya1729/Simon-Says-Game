const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
 require("dotenv").config();
 const app=express();
 
 app.use(cors());
 app.use(express.json());

 app.get("/",function(req,res){
    res.json({
        message:"Backend running"
    })
 })
 mongoose.connect(process.env.MONGO_URL)
.then(function () {
console.log("MongoDB connected");
})
.catch(function (error) {
    console.log("MongoDB connection failed");
    console.log(error);
});
 app.listen(3000)