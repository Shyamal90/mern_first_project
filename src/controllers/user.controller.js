const express = require("express");
const router = express.Router();
const User = require("../models/user.model")


router.get("/:email" ,async(req,res)=>{
        try{
            console.log(req.params.email);
            const user=await User.findOne({ email: req.params.email }).lean().exec();
            return res.send(user)
        }catch(err){
            console.log(err)
        }
})

router.get("/",async(req,res)=>{
    try {
        const user = await User.find().lean().exec();
        console.log(user);
        res.status(201).send(user);
    } catch (error) {
        console.log(error);
    }
})
module.exports = router;
    