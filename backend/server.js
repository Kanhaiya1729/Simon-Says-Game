const express = require("express");
const mongoose = require("mongoose");
const jwt=require('jsonwebtoken');
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
const PORT=process.env.PORT || 3000;
app.get("/", function (req, res) {

    res.json({
        message: "Backend running"
    });

 });
 
const authRoutes = require("./routes/auth");

app.use("/api", authRoutes);

mongoose.connect(process.env.MONGO_URL)

    .then(function () {

        console.log("MongoDB connected");

    })

    .catch(function (error) {

        console.log("MongoDB connection failed");

        console.log(error);

    });


app.listen(PORT, function () {

    console.log(`Server running on port ${PORT}`);

});
