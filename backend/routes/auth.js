const express = require("express");
const bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken');
const User = require("../models/Users");
const router = express.Router();


router.post("/signup", async function (req, res) {

    try {

        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                message: "All fields are required."
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                message: "Password must be at least 6 characters."
            });
        }

  
        const existingUsername = await User.findOne({
            username: username
        });

        if (existingUsername) {
            return res.status(400).json({
                message: "Username already exists."
            });
        }

    
        const existingEmail = await User.findOne({
            email: email
        });

        if (existingEmail) {
            return res.status(400).json({
                message: "Email already exists."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword
        });

  
        await newUser.save();

        res.status(201).json({
            message: "Signup successful!"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server error."
        });

    }

});

function jwtVerify(req,res,next){
    const token=req.headers.token;
    try{
    const decodedData=jwt.verify(token,process.env.JWT_SECRET);
    if(decodedData.email){
        req.email=decodedData.email;
        next()
    }else{
        res.json({
            message:"you are not logged in"
        })
    }
}catch(err){
    res.status(401).json({
        message:"error"
    })
}  
}
router.post("/login", async function (req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required."
            });
        }

        const user = await User.findOne({
            email: email
        });

        if (!user) {
            return res.status(400).json({
                message: "Invalid email or password."
            });
        }
        const passwordMatch = await bcrypt.compare( password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({
                message: "Invalid email or password."
            });
        }
        const token=jwt.sign(
            {email:user.email},
         process.env.JWT_SECRET,
         {expiresIn:"1h"}
        );

        res.status(200).json({
            message: "Login successful!",
            username: user.username,
            token:token
        });


    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server error."
        });

    }

});

router.get("/profile",jwtVerify,async function(req,res){
    const user=await User.findOne({email:req.email})
   res.json({
   username:user.username,
   })
})

module.exports = router;
