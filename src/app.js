const express = require("express");
const path = require("path");
const app = express();
const registerController = require("./controllers/register.controller");

//handle json data
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//run static page
const static_path = path.join(__dirname,"../public");
const templates_path = path.join(__dirname,"../templates/views")
app.use(express.static(static_path));

//tell I want to use handle bar
app.set("view engine","hbs");
app.set("views",templates_path);

//for landing page
app.get("/index",(req,res)=>{
    res.render("index");
});

//for register page
app.use("/register",registerController);

//for email login page
app.get("/email_login",(req,res)=>{
    res.render("email_login");
})

//404 Error Page
app.get("*",(req,res)=>{
    res.send("404 error page opps");
})





module.exports = app;