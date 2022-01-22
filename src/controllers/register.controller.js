const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

router.get("",(req,res)=>{
    res.render("register");
})


router.post("",async(req,res)=>{
    try {
        const registerUser = new User({
            email : req.body.email,
            password: req.body.password,
            zip_code: req.body.zip_code,
            phone: req.body.phone
        })

        const registerData = await registerUser.save();
        res.status(201).render("email_login");
        
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message);
    }
})


module.exports = router;