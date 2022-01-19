const express = require("express");
const path = require("path");
const app = express();

//run static page
const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path));

//for landing page
app.get("/",(req,res)=>{
    res.send("Welcome to Landing Page");
});

//for about page
app.get("/about",(req,res)=>{
    res.send("Welcome to About Page");
})

//for weater page
app.get("/weater",(req,res)=>{
    res.send("Welcome to Weater Page");
})

//404 Error Page
app.get("*",(req,res)=>{
    res.send("404 error page opps");
})





app.listen(4000,()=>{
    console.log("Listening to the port at 4000");
})