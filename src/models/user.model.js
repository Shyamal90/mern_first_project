const mongoose = require("mongoose");
const bcrypt  = require("bcryptjs")

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique : true
    },
    password:{
        type: String,
        required: true,
        minlength: 8
    },
    zip_code: {
        type: Number,
        required : true,
    },
    phone:{
        type: Number,
        required:true,
    }
},{
    versionKey: false,
    timestamps:true
});


userSchema.pre("save",async function(next){
        this.password = await bcrypt.hash(this.password,10);
        next();
})

const User = new mongoose.model("user",userSchema);

module.exports = User;