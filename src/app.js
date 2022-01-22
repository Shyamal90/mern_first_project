const express = require("express");
const path = require("path");
const app = express();
const registerController = require("./controllers/register.controller");
const loginController = require("./controllers/login.controller");
const userController = require("./controllers/user.controller")
const hbs = require("hbs");
const User = require("./models/user.model");

//handle json data
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//run static page
// const static_path = path.join(__dirname,"../public");
// const templates_path = path.join(__dirname,"../templates/views");
// const partial_path = path.join(__dirname,"../templates/partials")
// app.use(express.static(static_path));

//tell I want to use handle bar
// app.set("view engine","hbs");
// app.set("views",templates_path);
// hbs.registerPartials(partial_path);
// hbs.registerPartials(__dirname + '../templates/partials', function (err) {});


//
app.use("/user",userController)

app.set("view engine","ejs");
// app.set("view",template_path)
app.use(express.static("public"));

//for landing page
app.get("/index",(req,res)=>{
    res.render("index");
});

//for register page
app.use("/register",registerController);

//for login page
app.use("/email_login",loginController);

//404 Error Page
app.get("*",(req,res)=>{
    res.render("errorPage");
})





module.exports = app;