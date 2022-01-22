const bcrypt = require("bcryptjs/dist/bcrypt");
const express = require("express");
const async = require("hbs/lib/async");
const User = require("../models/user.model");

const router = express.Router();

router.get("",(req,res)=>{
    res.render("email_login");
});


router.post("",async(req,res)=>{
    try {
        const {email,password} = req.body;
        // console.log(email);

        if(!email || !password){
            res.send("Please Filled the Details");
        }

        const user = await User.findOne({email});
        console.log(user);

        const isMatch = await bcrypt.compare(password,user.password);
        
        if(isMatch === true){
            // console.log(user);
            res.status(201).render("index",{
                id: user._id
            });
        }else{
            res.send("Invalid Credincial");
        }
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message);
    }
})


module.exports = router;