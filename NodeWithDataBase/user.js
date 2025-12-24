const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Enter a Email"],
        unique: true,
        lowercase: true,
        validator: [validator.isEmail, "Enter a Valid Email"]
    },
    password: {
        type: String,
        required: [true, "Enter a Password"],
        unique: true,
        minlength: 8
    },
    confirmPassword: {
        type: String,
        required: [true, "Confirm a Password"],
        unique: true,
        minlength: 8
    }
    ,
    photo: String
})
const Users = mongoose.model("User", userSchema);
module.exports = Users;